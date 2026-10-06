// auth.js - Mock JWT, OAuth and RBAC (Role-Based Access Control)
import { getPlayers, addPlayer } from './data.js';

// Roles in the system
export const ROLES = {
  USER: 'USER',
  ORGANIZER: 'ORGANIZER',
  REFEREE: 'REFEREE',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

function safeBtoa(str) {
  return btoa(unescape(encodeURIComponent(str)));
}
function safeAtob(str) {
  return decodeURIComponent(escape(atob(str)));
}

// Mock JWT Generation
function generateMockJWT(payload) {
  const header = safeBtoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const data = safeBtoa(JSON.stringify({ ...payload, exp: Date.now() + 15 * 60 * 1000 })); // 15 mins
  const signature = safeBtoa("mock-signature");
  return `${header}.${data}.${signature}`;
}

// Mock Refresh Token (normally HttpOnly Cookie)
function setRefreshToken(token) {
  localStorage.setItem('pfp_mock_refresh_token', token);
}

// Initial DB setup for users
function initAuthDB() {
  if (!localStorage.getItem("pfp_users")) {
    const initialUsers = [
      { id: 'u-1', email: 'admin@pfp.pl', password: 'admin', role: ROLES.SUPER_ADMIN, firstName: 'Super', lastName: 'Admin' },
      { id: 'u-2', email: 'org@pfp.pl', password: 'org', role: ROLES.ORGANIZER, firstName: 'Jan', lastName: 'Kowalski' },
      { id: 'u-3', email: 'gracz@pfp.pl', password: 'gracz', role: ROLES.USER, firstName: 'Jędrzej', lastName: 'Śliż', license: '78' }
    ];
    localStorage.setItem("pfp_users", JSON.stringify(initialUsers));
  }
}

// Get Session from mock JWT
export function getSession() {
  initAuthDB();
  const token = localStorage.getItem("pfp_access_token");
  if (!token) return null;
  
  try {
    const payload = JSON.parse(safeAtob(token.split('.')[1]));
    if (payload.exp < Date.now()) {
      // Mock token expiration
      logout();
      return null;
    }
    return payload;
  } catch (e) {
    return null;
  }
}

// Standard Login
export function login(email, password, totpCode = null) {
  initAuthDB();
  const users = JSON.parse(localStorage.getItem("pfp_users"));
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error("Błędny e-mail lub hasło!");
  }

  // 2FA Mock Check for Organizer/Referee/Admin
  if ([ROLES.ORGANIZER, ROLES.REFEREE, ROLES.SUPER_ADMIN].includes(user.role)) {
    if (user.requires2FA && !totpCode) {
      throw new Error("Wymagany kod 2FA!");
    }
    if (user.requires2FA && totpCode !== '123456') { // Mock TOTP code
      throw new Error("Nieprawidłowy kod 2FA!");
    }
  }

  const payload = {
    userId: user.id,
    email: user.email,
    role: user.role,
    name: `${user.firstName} ${user.lastName}`,
    license: user.license || null
  };

  const accessToken = generateMockJWT(payload);
  const refreshToken = `ref-${Date.now()}-${user.id}`;

  localStorage.setItem("pfp_access_token", accessToken);
  setRefreshToken(refreshToken);

  return payload;
}

// OAuth 2.0 Mock Login
export function loginWithOAuth(provider) {
  // In reality this would redirect to Google/Facebook, we mock the callback here
  return new Promise((resolve) => {
    setTimeout(() => {
      const payload = {
        userId: `oauth-${Date.now()}`,
        email: `user@${provider}.com`,
        role: ROLES.USER,
        name: `OAuth ${provider} User`,
        license: null
      };
      const accessToken = generateMockJWT(payload);
      localStorage.setItem("pfp_access_token", accessToken);
      setRefreshToken(`ref-oauth-${Date.now()}`);
      resolve(payload);
    }, 1000);
  });
}

// Logout
export function logout() {
  localStorage.removeItem("pfp_access_token");
  localStorage.removeItem("pfp_mock_refresh_token");
}

// Registration with License Validation
export function register(userConfig) {
  initAuthDB();
  const users = JSON.parse(localStorage.getItem("pfp_users"));
  
  if (users.find(u => u.email === userConfig.email)) {
    throw new Error("Użytkownik z tym adresem e-mail już istnieje!");
  }
  
  const players = getPlayers();

  if (userConfig.license) {
    // Check if license already claimed by another user
    if (users.find(u => u.license === userConfig.license)) {
      throw new Error("Ta licencja jest już przypisana do innego konta!");
    }
    
    // Check if player exists in ranking DB
    const existingPlayer = players.find(p => p.license === userConfig.license);
    if (!existingPlayer) {
      addPlayer({
        id: `lic-${userConfig.license}`,
        firstName: userConfig.firstName,
        lastName: userConfig.lastName,
        license: userConfig.license,
        clubId: userConfig.clubId || null,
        gender: "M", // simplified
        category: "Senior",
        points: 0,
        strength: 0
      });
    }
  }

  const newUser = {
    id: `u-${Date.now()}`,
    email: userConfig.email,
    password: userConfig.password,
    role: ROLES.USER, // default role
    firstName: userConfig.firstName,
    lastName: userConfig.lastName,
    license: userConfig.license || null
  };

  users.push(newUser);
  localStorage.setItem("pfp_users", JSON.stringify(users));

  return true;
}

// Request Organizer Status
export function requestOrganizerStatus(userId, certificateInfo) {
  const requests = JSON.parse(localStorage.getItem('pfp_organizer_requests') || '[]');
  requests.push({
    userId,
    certificateInfo,
    status: 'PENDING',
    date: new Date().toISOString()
  });
  localStorage.setItem('pfp_organizer_requests', JSON.stringify(requests));
}
