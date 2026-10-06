// PFP Pétanque App - Core Application Controller

import * as db from './data.js';
import * as swiss from './swiss.js';
import * as auth from './auth.js';

// SVG Icons helper
function getIcon(name) {
  const icons = {
    dashboard: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>`,
    tournament: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v1H6V8a6 6 0 0 1 6-6Z"/></svg>`,
    ranking: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/></svg>`,
    club: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 20V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"/><path d="M6 18h12"/><path d="M6 14h12"/><path d="M6 10h12"/><path d="M12 4v4"/></svg>`,
    player: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    login: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`,
    logout: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
    plus: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    settings: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    users: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
  };
  return icons[name] || '';
}

// Router state
let currentView = '';
let currentParams = {};

// Initialize DB and router
window.addEventListener('load', async () => {
  db.initDB();
  await db.fetchPlayersFromAPI();
  router();
  initTheme();
});

window.addEventListener('hashchange', router);

// Simple hash router
function router() {
  const hash = window.location.hash || '#/';
  const cleanHash = hash.replace(/^#/, '');
  
  const pathParts = cleanHash.split('/');
  const route = pathParts[1] || '';
  const param = pathParts[2] || null;
  const subParam = pathParts[3] || null;
  
  currentView = route;
  currentParams = { param, subParam };
  
  renderWrapper();
  
  // Render sub views
  if (route === '') {
    renderDashboard();
  } else if (route === 'tournaments') {
    renderTournaments();
  } else if (route === 'rankings') {
    renderRankings();
  } else if (route === 'clubs') {
    renderClubs();
  } else if (route === 'players') {
    renderPlayers();
  } else if (route === 'login') {
    renderLogin();
  } else if (route === 'register') {
    renderRegister();
  } else if (route === 'profile') {
    renderProfile();
  } else if (route === 'tournament') {
    renderTournamentDetail(param);
  } else if (route === 'tournament-manage') {
    renderTournamentManage(param);
  } else {
    renderDashboard(); // Fallback
  }
  
  window.scrollTo(0, 0);
  updateActiveNavLink();
}

// Setup Light/Dark Theme
function initTheme() {
  const savedTheme = localStorage.getItem("pfp_theme") || "dark";
  document.body.setAttribute("data-theme", savedTheme);
  const toggleCheckbox = document.getElementById("theme-switch-input");
  if (toggleCheckbox) {
    toggleCheckbox.checked = (savedTheme === "light");
    toggleCheckbox.addEventListener("change", (e) => {
      const targetTheme = e.target.checked ? "light" : "dark";
      document.body.setAttribute("data-theme", targetTheme);
      localStorage.setItem("pfp_theme", targetTheme);
    });
  }
}

// Renders the overall app navigation structure
function renderWrapper() {
  const root = document.getElementById('root');
  
  // Check if wrapper is already rendered
  if (document.querySelector('.sidebar')) {
    // Only update the profile widget in case login status changed
    updateUserWidget();
    return;
  }
  
  const session = auth.getSession();
  
  root.innerHTML = `
    <!-- Sidebar for Desktop -->
    <aside class="sidebar" id="app-sidebar">
      <button id="sidebar-toggle-btn" class="sidebar-toggle-btn" title="Zwiń / Rozwiń panel">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="brand">
        <div class="brand-logo">P</div>
        <div class="brand-name">PetanquePRO PL</div>
      </div>
      
      <nav class="nav-menu">
        <li class="nav-item" id="nav-home">
          <a href="#/">
            <span class="nav-icon">${getIcon('dashboard')}</span>
            <span>Dashboard</span>
          </a>
        </li>
        <li class="nav-item" id="nav-tournaments">
          <a href="#/tournaments">
            <span class="nav-icon">${getIcon('tournament')}</span>
            <span>Turnieje</span>
          </a>
        </li>
        <li class="nav-item" id="nav-rankings">
          <a href="#/rankings">
            <span class="nav-icon">${getIcon('ranking')}</span>
            <span>Rankingi</span>
          </a>
        </li>
        <li class="nav-item" id="nav-clubs">
          <a href="#/clubs">
            <span class="nav-icon">${getIcon('club')}</span>
            <span>Kluby</span>
          </a>
        </li>
        <li class="nav-item" id="nav-players">
          <a href="#/players">
            <span class="nav-icon">${getIcon('player')}</span>
            <span>Zawodnicy</span>
          </a>
        </li>
      </nav>
      
      <div class="theme-toggle-container">
        <span class="theme-toggle-label">Jasny motyw</span>
        <label class="theme-switch">
          <input type="checkbox" id="theme-switch-input">
          <span class="slider"></span>
        </label>
      </div>
      
      <div class="user-widget" id="sidebar-user-widget">
        <!-- User info injected here -->
      </div>
    </aside>
    
    <!-- Main Content Container -->
    <main class="main-content" id="main-content-area">
      <!-- Subpage content injected here -->
    </main>
    
    <!-- Bottom Navigation for Mobile -->
    <nav class="mobile-nav">
      <a href="#/" class="mobile-nav-item" id="mob-nav-home">
        <span class="mobile-nav-icon">${getIcon('dashboard')}</span>
        <span>Home</span>
      </a>
      <a href="#/tournaments" class="mobile-nav-item" id="mob-nav-tournaments">
        <span class="mobile-nav-icon">${getIcon('tournament')}</span>
        <span>Turnieje</span>
      </a>
      <a href="#/rankings" class="mobile-nav-item" id="mob-nav-rankings">
        <span class="mobile-nav-icon">${getIcon('ranking')}</span>
        <span>Rankingi</span>
      </a>
      <a href="#/clubs" class="mobile-nav-item" id="mob-nav-clubs">
        <span class="mobile-nav-icon">${getIcon('club')}</span>
        <span>Kluby</span>
      </a>
      <a href="#/players" class="mobile-nav-item" id="mob-nav-players">
        <span class="mobile-nav-icon">${getIcon('player')}</span>
        <span>Zawodnicy</span>
      </a>
    </nav>
    
    <!-- Modal Dialog System -->
    <div class="modal-overlay" id="app-modal">
      <div class="modal-card" id="app-modal-card">
        <!-- Modal content -->
      </div>
    </div>
  `;
  
  updateUserWidget();
  
  // Collapse sidebar script
  const sidebar = document.getElementById('app-sidebar');
  const toggleBtn = document.getElementById('sidebar-toggle-btn');
  
  // Restore collapsed state from localStorage
  const isCollapsed = localStorage.getItem('sidebar_collapsed') === 'true';
  if (isCollapsed && sidebar) {
    sidebar.classList.add('collapsed');
  }
  
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      localStorage.setItem('sidebar_collapsed', sidebar.classList.contains('collapsed'));
    });
  }
}

function updateUserWidget() {
  const widget = document.getElementById('sidebar-user-widget');
  if (!widget) return;
  
  const session = auth.getSession();
  
  if (session) {
    const initials = session.name.split(' ').map(n => n[0]).join('').toUpperCase();
    widget.innerHTML = `
      <a href="#/profile" style="text-decoration:none; color:inherit;">
        <div class="user-info" style="cursor:pointer; padding:4px; border-radius:8px; transition:var(--transition-smooth);" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='transparent'">
          <div class="user-avatar">${initials}</div>
          <div class="user-details">
            <span class="user-name">${session.name}</span>
            <span class="user-role">${[auth.ROLES.ORGANIZER, auth.ROLES.REFEREE, auth.ROLES.SUPER_ADMIN].includes(session.role) ? 'Sędzia / Org' : `Licencja: ${session.license || 'brak'}`}</span>
          </div>
        </div>
      </a>
      <div style="display:flex; gap:8px;">
        <a href="#/profile" class="btn-secondary" style="flex:1; text-align:center; padding:8px 0; font-size:0.8rem; text-decoration:none;">Moje Konto</a>
        <button class="btn-logout" id="btn-sidebar-logout" style="flex:1;">Wyloguj</button>
      </div>
    `;
    
    document.getElementById('btn-sidebar-logout').addEventListener('click', () => {
      auth.logout();
      showToast("Pomyślnie wylogowano!");
      router();
    });
  } else {
    widget.innerHTML = `
      <a href="#/login" class="tour-action-btn" style="background: var(--gradient-blue); color: white; border: none; font-size: 0.9rem;">
        Zaloguj się
      </a>
      <a href="#/register" class="tour-action-btn" style="font-size: 0.85rem;">
        Zarejestruj się
      </a>
    `;
  }
}

function updateActiveNavLink() {
  // Desktop
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  // Mobile
  document.querySelectorAll('.mobile-nav-item').forEach(item => item.classList.remove('active'));
  
  let targetId = 'nav-home';
  let mobTargetId = 'mob-nav-home';
  
  if (currentView === 'tournaments' || currentView === 'tournament' || currentView === 'tournament-manage') {
    targetId = 'nav-tournaments';
    mobTargetId = 'mob-nav-tournaments';
  } else if (currentView === 'rankings') {
    targetId = 'nav-rankings';
    mobTargetId = 'mob-nav-rankings';
  } else if (currentView === 'clubs') {
    targetId = 'nav-clubs';
    mobTargetId = 'mob-nav-clubs';
  } else if (currentView === 'players') {
    targetId = 'nav-players';
    mobTargetId = 'mob-nav-players';
  }
  
  const el = document.getElementById(targetId);
  if (el) el.classList.add('active');
  
  const mobEl = document.getElementById(mobTargetId);
  if (mobEl) mobEl.classList.add('active');
}

// Global modal helpers
function openModal(html) {
  const overlay = document.getElementById('app-modal');
  const card = document.getElementById('app-modal-card');
  card.innerHTML = `
    <button class="modal-close" onclick="closeModal()">&times;</button>
    ${html}
  `;
  // Add direct global bindings for closing since static HTML references it
  window.closeModal = closeModal;
  overlay.classList.add('open');
}

function closeModal() {
  const overlay = document.getElementById('app-modal');
  if (overlay) overlay.classList.remove('open');
}

// Simple Toast/Notification alert
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.style.position = 'fixed';
  toast.style.bottom = '80px';
  toast.style.right = '20px';
  toast.style.background = type === 'success' ? 'var(--gradient-emerald)' : 'var(--gradient-rose)';
  toast.style.color = 'white';
  toast.style.padding = '12px 24px';
  toast.style.borderRadius = '8px';
  toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  toast.style.zIndex = '9999';
  toast.style.fontWeight = '600';
  toast.style.fontSize = '0.9rem';
  toast.style.transition = 'all 0.3s ease';
  toast.style.opacity = '0';
  toast.style.transform = 'translateY(10px)';
  
  document.body.appendChild(toast);
  
  // Animate
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 50);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
  
  toast.textContent = message;
}

// ==========================================
// VIEWS IMPLEMENTATION
// ==========================================

// VIEW 1: Dashboard / Home
function renderDashboard() {
  const area = document.getElementById('main-content-area');
  const players = db.getPlayers();
  const clubs = db.getClubs();
  const tournaments = db.getTournaments();
  
  const todayDate = new Date().toISOString().split('T')[0];
  const liveTours = tournaments.filter(t => t.status === 'Ongoing' || t.date === todayDate);
  const upcomingTours = tournaments.filter(t => t.status === 'Upcoming').slice(0, 5);
  
  // Sort players for top rankings overview
  const topPlayers = [...players].sort((a,b) => b.points - a.points).slice(0, 5);
  
  // Hero Banner Logic (Nearest large tournament)
  let heroTour = upcomingTours.find(t => t.categoryPfp === 'PFP' || t.name.toLowerCase().includes('mistrzostwa')) || upcomingTours[0];
  let heroHtml = '';
  if (heroTour) {
    heroHtml = `
      <div style="background: linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.6)), url('https://images.unsplash.com/photo-1542618995-1f9e6144eeb1?auto=format&fit=crop&q=80&w=1200') center/cover; border-radius: var(--border-radius-lg); padding: 3rem 2rem; margin-bottom: 2rem; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: center; min-height: 300px; box-shadow: var(--glass-shadow);">
        <span class="tour-status-badge status-upcoming" style="align-self: flex-start; margin-bottom: 1rem; background: var(--accent-amber); color: #fff;">WYDARZENIE SEZONU</span>
        <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.5rem; color: #fff; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">${heroTour.name}</h1>
        <p style="font-size: 1.1rem; color: #e2e8f0; margin-bottom: 2rem; max-width: 600px;">
          Najlepsi zawodnicy z całej Polski zmierzą się już <strong>${heroTour.date}</strong> w miejscowości <strong>${heroTour.location}</strong>. 
        </p>
        <div>
          <a href="#/tournament/${heroTour.id}" class="btn-primary" style="font-size: 1.1rem; padding: 12px 24px; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.5);">Przejdź do turnieju &rarr;</a>
        </div>
      </div>
    `;
  }

  // Today in play Widget
  let todayHtml = '';
  if (liveTours.length > 0) {
    liveTours.forEach(tour => {
      todayHtml += `
        <div style="background: var(--glass-bg); border: 1px solid var(--accent-rose); border-radius: var(--border-radius-sm); padding: 12px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; transition: var(--transition-smooth);" class="today-item-hover">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div class="pulse-circle" style="background: var(--accent-rose); width: 12px; height: 12px; border-radius: 50%; margin: 0;"></div>
            <div>
              <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">${tour.name}</div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">${tour.location}</div>
            </div>
          </div>
          <a href="#/tournament/${tour.id}" class="btn-primary" style="font-size: 0.8rem; padding: 6px 12px; background: var(--accent-rose); border: none;">Live</a>
        </div>
      `;
    });
  } else {
    todayHtml = '<div style="color:var(--text-muted); font-size: 0.9rem; padding: 1rem; text-align: center; border: 1px dashed var(--glass-border); border-radius: var(--border-radius-sm);">Obecnie nie odbywa się żaden turniej.</div>';
  }

  // Mock News
  const mockNews = [
    { title: "Zgrupowanie Kadry Narodowej przed ME", date: "12 Lip 2026", excerpt: "W miniony weekend na bulodromach w Dzierżoniowie odbyło się zgrupowanie selekcyjne przed Mistrzostwami Europy." },
    { title: "Zmiany w regulaminie na rok 2027", date: "05 Lip 2026", excerpt: "Kolegium Sędziów opublikowało listę poprawek do regulaminu rozgrywek. Sprawdź nowe zasady rzutu świnką." },
    { title: "Nowy system informatyczny PFP", date: "01 Lip 2026", excerpt: "Witamy w nowym Portalu Petanque! System wprowadza elektroniczne zapisy, wyniki na żywo oraz cyfrowe licencje." }
  ];
  let newsHtml = mockNews.map(n => `
    <div style="padding: 16px; border-bottom: 1px solid var(--glass-border); display: flex; flex-direction: column; gap: 6px; transition: var(--transition-smooth); cursor: pointer;" class="news-item-hover">
      <div style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: 600;">${n.date}</div>
      <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary);">${n.title}</div>
      <div style="font-size: 0.9rem; color: var(--text-secondary);">${n.excerpt}</div>
      <div style="font-size: 0.85rem; color: var(--accent-blue); font-weight: 600; margin-top: 4px;">Czytaj więcej &rarr;</div>
    </div>
  `).join('');

  let rankingHtml = '';
  topPlayers.forEach((p, idx) => {
    const rankClass = idx === 0 ? 'gold' : idx === 1 ? 'silver' : idx === 2 ? 'bronze' : '';
    const club = clubs.find(c => c.id === p.clubId);
    rankingHtml += `
      <tr style="transition: var(--transition-smooth);" class="table-row-hover">
        <td style="width: 50px;"><span class="badge-rank ${rankClass}">${idx + 1}</span></td>
        <td><strong>${p.firstName} ${p.lastName}</strong></td>
        <td>${club ? club.name : 'brak'}</td>
        <td style="text-align:right;"><strong>${p.points} PA</strong></td>
      </tr>
    `;
  });

  area.innerHTML = `
    ${heroHtml}
    
    <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); margin-bottom: 2rem;">
      <!-- News Section -->
      <div class="dashboard-card" style="grid-column: span 2;">
        <div class="card-header">
          <h2 class="card-title">Aktualności ze świata Pétanque</h2>
        </div>
        <div style="display:flex; flex-direction:column;">
          ${newsHtml}
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <!-- Today widget -->
        <div class="dashboard-card" style="border: 1px solid rgba(244, 63, 94, 0.2); box-shadow: 0 4px 20px rgba(244, 63, 94, 0.05);">
          <div class="card-header">
            <h2 class="card-title" style="color: var(--accent-rose); display: flex; align-items: center; gap: 8px;">
              <span class="pulse-circle" style="background: var(--accent-rose); margin: 0;"></span> Dzisiaj w grze
            </h2>
          </div>
          <div style="display:flex; flex-direction:column;">
            ${todayHtml}
          </div>
        </div>

        <!-- Top 5 Rankings -->
        <div class="dashboard-card">
          <div class="card-header">
            <h2 class="card-title">Top Ranking Open</h2>
            <a href="#/rankings" style="color:var(--accent-blue); text-decoration:none; font-size:0.85rem; font-weight:600;">Pełna lista &rarr;</a>
          </div>
          <div class="table-wrapper">
            <table class="custom-table" style="margin-bottom: 0;">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Zawodnik</th>
                  <th>Klub</th>
                  <th style="text-align:right;">Punkty</th>
                </tr>
              </thead>
              <tbody>
                ${rankingHtml}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
}

// VIEW 2: Tournaments List with Creation Feature
function renderTournaments() {
  const area = document.getElementById('main-content-area');
  const session = auth.getSession();
  const tournaments = db.getTournaments();
  
  // Sub-navigation filter buttons
  let activeTab = 'all';
  
  function drawTours() {
    const searchVal = document.getElementById('tour-search')?.value.toLowerCase() || '';
    const formatFilter = document.getElementById('tour-format-filter')?.value || 'all';
    
    let filtered = tournaments;
    
    // Status tab filter
    if (activeTab === 'upcoming') {
      filtered = filtered.filter(t => t.status === 'Upcoming');
    } else if (activeTab === 'ongoing') {
      filtered = filtered.filter(t => t.status === 'Ongoing');
    } else if (activeTab === 'completed') {
      filtered = filtered.filter(t => t.status === 'Completed');
    }
    
    // Text search filter
    if (searchVal) {
      filtered = filtered.filter(t => 
        t.name.toLowerCase().includes(searchVal) || 
        t.location.toLowerCase().includes(searchVal) ||
        t.organizer.toLowerCase().includes(searchVal)
      );
    }
    
    // Format filter
    if (formatFilter !== 'all') {
      filtered = filtered.filter(t => t.format === formatFilter);
    }
    
    let gridHtml = '';
    if (filtered.length > 0) {
      filtered.forEach(t => {
        const isOrganizer = session && (session.role === 'organizer' || session.role === 'ORGANIZER');
        const actionLabel = t.status === 'Upcoming' || t.status === 'Ongoing'
          ? (isOrganizer ? 'Zarządzaj' : 'Szczegóły')
          : 'Wyniki';
        
        const actionLink = (t.status === 'Upcoming' || t.status === 'Ongoing') && isOrganizer
          ? `#/tournament-manage/${t.id}`
          : `#/tournament/${t.id}`;
          
        const statusClass = t.status === 'Completed' ? 'status-completed' 
          : t.status === 'Ongoing' ? 'status-ongoing' : 'status-upcoming';
        
        const statusText = t.status === 'Completed' ? 'Zakończony'
          : t.status === 'Ongoing' ? 'Trwa' : 'Zapisy';
          
        gridHtml += `
          <div class="tournament-card">
            <span class="tour-status-badge ${statusClass}">${statusText}</span>
            <h3 class="tour-title">${t.name}</h3>
            <div class="tour-details">
              <div class="tour-detail-item">
                <span>${getIcon('calendar')}</span>
                <span>${t.date}</span>
              </div>
              <div class="tour-detail-item">
                <span>${getIcon('mapPin')}</span>
                <span>${t.location}</span>
              </div>
              <div class="tour-detail-item">
                <span>${getIcon('users')}</span>
                <span>Format: ${t.format === 'Triplets' ? 'Triplety (3os)' : t.format === 'Doublets' ? 'Dublety (2os)' : 'Single (1os)'}</span>
              </div>
              <div class="tour-detail-item">
                <span>${getIcon('settings')}</span>
                <span>System: ${t.system === 'Swiss' ? 'Szwajcarski' : 'Pucharowy'} (${t.rounds} rund)</span>
              </div>
            </div>
            <a href="${actionLink}" class="tour-action-btn">${actionLabel}</a>
          </div>
        `;
      });
    } else {
      gridHtml = `
        <div style="grid-column: 1 / -1; text-align:center; padding: 4rem; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: var(--border-radius-md);">
          <span style="font-size: 2rem; color:var(--text-secondary);">${getIcon('tournament')}</span>
          <p style="margin-top:1rem; color: var(--text-secondary);">Brak turniejów spełniających kryteria wyszukiwania.</p>
        </div>
      `;
    }
    
    const container = document.getElementById('tournaments-card-grid');
    if (container) container.innerHTML = gridHtml;
  }
  
  area.innerHTML = `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Turnieje</h1>
        <p>Baza rozgrywek PFP · Kalendarz i menedżer turniejów</p>
      </div>
      ${session && (session.role === 'organizer' || session.role === 'ORGANIZER') 
        ? `<button class="btn-primary" id="btn-create-tournament">${getIcon('plus')} Stwórz Turniej</button>` 
        : ''
      }
    </div>
    
    <div class="filter-bar">
      <input type="text" class="search-input" id="tour-search" placeholder="Szukaj po nazwie, miejscowości lub organizatorze...">
      <select class="select-input" id="tour-format-filter">
        <option value="all">Wszystkie formaty</option>
        <option value="Triplets">Triplety (3 vs 3)</option>
        <option value="Doublets">Dublety (2 vs 2)</option>
        <option value="Singles">Single (1 vs 1)</option>
      </select>
    </div>
    
    <div class="tabs-container">
      <button class="tab-btn active" id="tab-tour-all">Wszystkie</button>
      <button class="tab-btn" id="tab-tour-upcoming">Nadchodzące (Zapisy)</button>
      <button class="tab-btn" id="tab-tour-ongoing">W toku</button>
      <button class="tab-btn" id="tab-tour-completed">Zakończone</button>
    </div>
    
    <div class="tournaments-grid" id="tournaments-card-grid">
      <!-- Injected by drawTours() -->
    </div>
  `;
  
  // Attach event listeners
  document.getElementById('tour-search').addEventListener('input', drawTours);
  document.getElementById('tour-format-filter').addEventListener('change', drawTours);
  
  const tabs = ['all', 'upcoming', 'ongoing', 'completed'];
  tabs.forEach(tab => {
    document.getElementById(`tab-tour-${tab}`).addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      activeTab = tab;
      drawTours();
    });
  });
  
  // Create Tournament Button
  const createBtn = document.getElementById('btn-create-tournament');
  if (createBtn) {
    createBtn.addEventListener('click', openCreateTournamentModal);
  }
  
  drawTours();
}

// Tournament Creation Modal Flow
function openCreateTournamentModal() {
  let step = 1;
  let tourData = {
    name: "",
    date: new Date().toISOString().split('T')[0],
    location: "",
    organizer: auth.getSession()?.name || "Kolegium Sędziów PFP",
    format: "Doublets",
    system: "Swiss",
    rounds: 3,
    maxTeams: 16,
    isOpen: false
  };
  
  function renderStepContent() {
    let content = '';
    if (step === 1) {
      content = `
        <h2 style="margin-bottom: 1.5rem; font-size:1.4rem;">Kreator Nowego Turnieju</h2>
        <div class="wizard-steps">
          <div class="wizard-step active"><span class="step-num">1</span><span class="step-label">Dane</span></div>
          <div class="wizard-step"><span class="step-num">2</span><span class="step-label">Podsumowanie</span></div>
        </div>
        
        <form id="create-tour-form">
          <div class="form-group">
            <label for="new-tour-name">Nazwa turnieju</label>
            <input type="text" class="form-input" id="new-tour-name" required value="${tourData.name}" placeholder="np. Grand Prix Polski Dubletów">
          </div>
          <div class="form-group">
            <label for="new-tour-location">Miejscowość / Hala</label>
            <input type="text" class="form-input" id="new-tour-location" required value="${tourData.location}" placeholder="np. Jedlina-Zdrój">
          </div>
          <div class="form-group" style="display:grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div>
              <label for="new-tour-date">Data turnieju</label>
              <input type="date" class="form-input" id="new-tour-date" required value="${tourData.date}">
            </div>
            <div>
              <label for="new-tour-max">Limit drużyn</label>
              <input type="number" class="form-input" id="new-tour-max" required min="4" max="128" value="${tourData.maxTeams}">
            </div>
          </div>
          <div class="form-group" style="display:grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div>
              <label for="new-tour-format">Format gry</label>
              <select class="select-input" id="new-tour-format" style="width:100%; height:46px;">
                <option value="Triplets" ${tourData.format === 'Triplets' ? 'selected' : ''}>Triplety (3 vs 3)</option>
                <option value="Doublets" ${tourData.format === 'Doublets' ? 'selected' : ''}>Dublety (2 vs 2)</option>
                <option value="Singles" ${tourData.format === 'Singles' ? 'selected' : ''}>Single (1 vs 1)</option>
              </select>
            </div>
            <div>
              <label for="new-tour-rounds">Liczba rund Swiss</label>
              <input type="number" class="form-input" id="new-tour-rounds" required min="3" max="7" value="${tourData.rounds}">
            </div>
          </div>
          <div class="form-group">
            <label for="new-tour-is-open">Typ rejestracji (dostępność)</label>
            <select class="select-input" id="new-tour-is-open" style="width:100%; height:46px;">
              <option value="false" ${!tourData.isOpen ? 'selected' : ''}>Zamknięty (Tylko licencjonowani PFP)</option>
              <option value="true" ${tourData.isOpen ? 'selected' : ''}>Otwarty (Wszyscy - z licencją lub bez)</option>
            </select>
          </div>
          
          <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:1.5rem;">
            <button type="button" class="btn-secondary" onclick="closeModal()">Anuluj</button>
            <button type="submit" class="btn-primary">Dalej &rarr;</button>
          </div>
        </form>
      `;
    } else {
      content = `
        <h2 style="margin-bottom: 1.5rem; font-size:1.4rem;">Potwierdzenie rejestracji</h2>
        <div class="wizard-steps">
          <div class="wizard-step completed"><span class="step-num">1</span><span class="step-label">Dane</span></div>
          <div class="wizard-step active"><span class="step-num">2</span><span class="step-label">Podsumowanie</span></div>
        </div>
        
        <div style="background:rgba(255,255,255,0.02); border: 1px solid var(--glass-border); border-radius:8px; padding:1.25rem; margin-bottom:1.5rem; display:flex; flex-direction:column; gap:8px;">
          <div><strong>Nazwa:</strong> ${tourData.name}</div>
          <div><strong>Lokalizacja:</strong> ${tourData.location}</div>
          <div><strong>Data:</strong> ${tourData.date}</div>
          <div><strong>Format:</strong> ${tourData.format === 'Triplets' ? 'Triplety (3 vs 3)' : tourData.format === 'Doublets' ? 'Dublety (2 vs 2)' : 'Single (1 vs 1)'}</div>
          <div><strong>System:</strong> Rundy Szwajcarskie (${tourData.rounds} rund)</div>
          <div><strong>Limit:</strong> ${tourData.maxTeams} zespołów</div>
          <div><strong>Typ turnieju:</strong> ${tourData.isOpen ? 'Otwarty (amatorzy dopuszczeni)' : 'Zamknięty (wymagana licencja PFP)'}</div>
          <div><strong>Organizator:</strong> ${tourData.organizer}</div>
        </div>
        
        <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:1.5rem;">
          <button type="button" class="btn-secondary" id="wizard-btn-prev">&larr; Wstecz</button>
          <button type="button" class="btn-success" id="wizard-btn-save">Zapisz i Utwórz</button>
        </div>
      `;
    }
    
    document.getElementById('app-modal-card').innerHTML = `
      <button class="modal-close" onclick="closeModal()">&times;</button>
      ${content}
    `;
    
    // Bind Step 1 Form Submit
    if (step === 1) {
      document.getElementById('create-tour-form').addEventListener('submit', (e) => {
        e.preventDefault();
        tourData.name = document.getElementById('new-tour-name').value;
        tourData.location = document.getElementById('new-tour-location').value;
        tourData.date = document.getElementById('new-tour-date').value;
        tourData.maxTeams = parseInt(document.getElementById('new-tour-max').value);
        tourData.format = document.getElementById('new-tour-format').value;
        tourData.rounds = parseInt(document.getElementById('new-tour-rounds').value);
        tourData.isOpen = document.getElementById('new-tour-is-open').value === 'true';
        
        step = 2;
        renderStepContent();
      });
    } else {
      document.getElementById('wizard-btn-prev').addEventListener('click', () => {
        step = 1;
        renderStepContent();
      });
      document.getElementById('wizard-btn-save').addEventListener('click', () => {
        const newTour = {
          id: 'tour-' + Date.now(),
          name: tourData.name,
          date: tourData.date,
          location: tourData.location,
          organizer: tourData.organizer,
          format: tourData.format,
          system: tourData.system,
          rounds: tourData.rounds,
          maxTeams: tourData.maxTeams,
          isOpen: tourData.isOpen,
          status: "Upcoming",
          teams: [],
          matches: [],
          byes: [],
          standings: []
        };
        db.addTournament(newTour);
        closeModal();
        showToast("Turniej utworzony pomyślnie!");
        window.location.hash = `#/tournament-manage/${newTour.id}`;
      });
    }
  }
  
  openModal('<div id="wizard-container"></div>');
  renderStepContent();
}

// VIEW 3: Rankings Page
function renderRankings() {
  const area = document.getElementById('main-content-area');
  const session = auth.getSession();
  
  let activeCategory = 'Open';
  let sortColumn = 'points';
  let sortDirection = 'desc';
  let searchVal = '';
  
  function drawRankings() {
    const players = db.getPlayers();
    const clubs = db.getClubs();
    
    let filtered = players;
    
    // Text search filter
    if (searchVal) {
      filtered = filtered.filter(p => 
        p.firstName.toLowerCase().includes(searchVal) || 
        p.lastName.toLowerCase().includes(searchVal) || 
        p.license.includes(searchVal)
      );
    }
    
    // Category tabs filter
    if (activeCategory === 'Seniors-M') {
      filtered = filtered.filter(p => p.category === 'Senior' && p.gender === 'M');
    } else if (activeCategory === 'Seniors-F') {
      filtered = filtered.filter(p => p.category === 'Senior' && p.gender === 'F');
    } else if (activeCategory === 'Veterans-M') {
      filtered = filtered.filter(p => p.category === 'Veteran' && p.gender === 'M');
    } else if (activeCategory === 'Veterans-F') {
      filtered = filtered.filter(p => p.category === 'Veteran' && p.gender === 'F');
    } else if (activeCategory === 'Youth') {
      filtered = filtered.filter(p => p.category === 'Junior');
    }
    
    // Sort players
    filtered.sort((a, b) => {
      let valA, valB;
      
      if (sortColumn === 'points') {
        valA = a.points;
        valB = b.points;
      } else if (sortColumn === 'strength') {
        valA = a.strength;
        valB = b.strength;
      } else if (sortColumn === 'license') {
        valA = parseInt(a.license);
        valB = parseInt(b.license);
      } else {
        valA = `${a.lastName} ${a.firstName}`;
        valB = `${b.lastName} ${b.firstName}`;
      }
      
      if (typeof valA === 'string') {
        return sortDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
      } else {
        return sortDirection === 'asc' ? valA - valB : valB - valA;
      }
    });
    
    let rowsHtml = '';
    if (filtered.length > 0) {
      filtered.forEach((p, idx) => {
        const rank = idx + 1;
        const rankClass = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';
        const club = clubs.find(c => c.id === p.clubId);
        
        rowsHtml += `
          <tr>
            <td style="width: 50px;"><span class="badge-rank ${rankClass}">${rank}</span></td>
            <td><strong>${p.firstName} ${p.lastName}</strong></td>
            <td>${p.license}</td>
            <td>${club ? club.name : 'brak'}</td>
            <td>${p.category === 'Senior' ? 'Senior' : p.category === 'Veteran' ? 'Weteran' : 'Młodzież'} (${p.gender})</td>
            <td style="font-weight:700; color: var(--accent-blue);">${p.points}</td>
            <td style="font-weight:600; color: var(--text-secondary);">${p.strength}</td>
          </tr>
        `;
      });
    } else {
      rowsHtml = `
        <tr>
          <td colspan="7" style="text-align:center; padding: 3rem; color:var(--text-secondary);">
            Brak zawodników spełniających kryteria.
          </td>
        </tr>
      `;
    }
    
    const tbody = document.getElementById('rankings-table-body');
    if (tbody) tbody.innerHTML = rowsHtml;
  }
  
  // Trigger CSV Download
  function downloadCSV() {
    const players = db.getPlayers();
    const clubs = db.getClubs();
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Pozycja,Zawodnik,Numer Licencji,Klub,Kategoria,Plec,Punkty PA,Sila ELO\n";
    
    const sorted = [...players].sort((a,b) => b.points - a.points);
    sorted.forEach((p, idx) => {
      const club = clubs.find(c => c.id === p.clubId);
      const clubName = club ? club.name.replace(/,/g, '') : 'brak';
      const row = `${idx+1},${p.firstName} ${p.lastName},${p.license},${clubName},${p.category},${p.gender},${p.points},${p.strength}`;
      csvContent += row + "\n";
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `ranking_pfp_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Ranking wyeksportowany do CSV!");
  }
  
  area.innerHTML = `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Rankingi PFP</h1>
        <p>Klasyfikacja licencjonowanych zawodników · Dane z pro.petanque.pl</p>
      </div>
      <div style="display:flex; gap:12px;">
        <button class="btn-secondary" id="btn-rank-csv">Export CSV</button>
        ${session && (session.role === 'organizer' || session.role === 'ORGANIZER') 
          ? `<button class="btn-primary" id="btn-rank-update">Symuluj update</button>` 
          : ''
        }
      </div>
    </div>
    
    <div class="filter-bar">
      <input type="text" class="search-input" id="rank-search" placeholder="Szukaj po nazwisku, licencji lub klubie...">
    </div>
    
    <div class="tabs-container">
      <button class="tab-btn active" id="tab-rank-Open">Open (Wszyscy)</button>
      <button class="tab-btn" id="tab-rank-Seniors-M">Mężczyźni Seniorzy</button>
      <button class="tab-btn" id="tab-rank-Seniors-F">Kobiety Seniorki</button>
      <button class="tab-btn" id="tab-rank-Veterans-M">Mężczyźni Weterani</button>
      <button class="tab-btn" id="tab-rank-Veterans-F">Kobiety Weteranki</button>
      <button class="tab-btn" id="tab-rank-Youth">Młodzież (Juniorzy)</button>
    </div>
    
    <div class="table-wrapper">
      <table class="custom-table">
        <thead>
          <tr>
            <th style="cursor:pointer;" id="th-rank-pos">#</th>
            <th style="cursor:pointer;" id="th-rank-name">Zawodnik</th>
            <th style="cursor:pointer;" id="th-rank-lic">Licencja</th>
            <th>Klub</th>
            <th>Kat. (Płeć)</th>
            <th style="cursor:pointer; color: var(--accent-blue);" id="th-rank-points">Punkty PA</th>
            <th style="cursor:pointer;" id="th-rank-strength">Siła</th>
          </tr>
        </thead>
        <tbody id="rankings-table-body">
          <!-- Injected by drawRankings() -->
        </tbody>
      </table>
    </div>
  `;
  
  // Attach listeners
  document.getElementById('rank-search').addEventListener('input', (e) => {
    searchVal = e.target.value.toLowerCase();
    drawRankings();
  });
  
  document.getElementById('btn-rank-csv').addEventListener('click', downloadCSV);
  
  const updateBtn = document.getElementById('btn-rank-update');
  if (updateBtn) {
    updateBtn.addEventListener('click', () => {
      db.simulateRankingsUpdate();
      showToast("Rankingi przeliczone na podstawie wyników turniejów!");
      drawRankings();
    });
  }
  
  const tabs = ['Open', 'Seniors-M', 'Seniors-F', 'Veterans-M', 'Veterans-F', 'Youth'];
  tabs.forEach(tab => {
    document.getElementById(`tab-rank-${tab}`).addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      activeCategory = tab;
      drawRankings();
    });
  });
  
  // Sorting triggers
  const sortHeaders = [
    { id: 'th-rank-points', col: 'points' },
    { id: 'th-rank-strength', col: 'strength' },
    { id: 'th-rank-lic', col: 'license' },
    { id: 'th-rank-name', col: 'name' }
  ];
  
  sortHeaders.forEach(sh => {
    document.getElementById(sh.id).addEventListener('click', () => {
      if (sortColumn === sh.col) {
        sortDirection = sortDirection === 'desc' ? 'asc' : 'desc';
      } else {
        sortColumn = sh.col;
        sortDirection = 'desc';
      }
      // style headers
      sortHeaders.forEach(h => {
        const el = document.getElementById(h.id);
        el.style.color = (h.col === sortColumn) ? 'var(--accent-blue)' : 'var(--text-secondary)';
      });
      drawRankings();
    });
  });
  
  drawRankings();
}

// VIEW 4: Clubs List View
function renderClubs() {
  const area = document.getElementById('main-content-area');
  
  function drawClubs() {
    const clubs = db.getClubs();
    const searchVal = document.getElementById('clubs-search')?.value.toLowerCase() || '';
    
    let filtered = clubs;
    if (searchVal) {
      filtered = filtered.filter(c => 
        c.name.toLowerCase().includes(searchVal) || 
        c.city.toLowerCase().includes(searchVal) || 
        c.region.toLowerCase().includes(searchVal)
      );
    }
    
    let gridHtml = '';
    if (filtered.length > 0) {
      filtered.forEach(c => {
        // Count players belonging to this club
        const players = db.getPlayers().filter(p => p.clubId === c.id);
        
        gridHtml += `
          <div class="tournament-card" style="gap:8px;">
            <h3 style="font-size:1.2rem; font-weight:700; margin-bottom:4px;">${c.name}</h3>
            <div style="font-size:0.85rem; color:var(--text-secondary); display:flex; flex-direction:column; gap:4px; flex-grow:1;">
              <div><strong>Miejscowość:</strong> ${c.city} (${c.region})</div>
              <div><strong>Rok założenia:</strong> ${c.founded} r.</div>
              <div><strong>Liczba zawodników z licencją:</strong> ${players.length}</div>
            </div>
            <button class="tour-action-btn" id="btn-club-details-${c.id}" style="margin-top:12px;">Pokaż skład</button>
          </div>
        `;
      });
    } else {
      gridHtml = `
        <div style="grid-column:1/-1; text-align:center; padding: 4rem; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: var(--border-radius-md);">
          <span style="font-size:2rem; color:var(--text-secondary);">${getIcon('club')}</span>
          <p style="color:var(--text-secondary); margin-top:1rem;">Nie znaleziono klubów.</p>
        </div>
      `;
    }
    
    document.getElementById('clubs-card-grid').innerHTML = gridHtml;
    
    // Bind show list
    filtered.forEach(c => {
      document.getElementById(`btn-club-details-${c.id}`).addEventListener('click', () => {
        openClubDetailsModal(c.id);
      });
    });
  }
  
  area.innerHTML = `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Kluby PFP</h1>
        <p>Stowarzyszenia zrzeszone w Polskiej Federacji Pétanque</p>
      </div>
    </div>
    
    <div class="filter-bar">
      <input type="text" class="search-input" id="clubs-search" placeholder="Szukaj po nazwie klubu, mieście lub województwie...">
    </div>
    
    <div class="tournaments-grid" id="clubs-card-grid">
      <!-- Injected by drawClubs() -->
    </div>
  `;
  
  document.getElementById('clubs-search').addEventListener('input', drawClubs);
  drawClubs();
}

function openClubDetailsModal(clubId) {
  const clubs = db.getClubs();
  const club = clubs.find(c => c.id === clubId);
  if (!club) return;
  
  const players = db.getPlayers().filter(p => p.clubId === clubId).sort((a,b) => b.points - a.points);
  
  let listHtml = '';
  if (players.length > 0) {
    players.forEach((p, idx) => {
      listHtml += `
        <tr style="font-size:0.9rem;">
          <td>${idx + 1}</td>
          <td><strong>${p.firstName} ${p.lastName}</strong></td>
          <td>${p.license}</td>
          <td>${p.category}</td>
          <td style="text-align:right; font-weight:700;">${p.points} PA</td>
        </tr>
      `;
    });
  } else {
    listHtml = `<tr><td colspan="5" style="text-align:center; padding:1.5rem; color:var(--text-muted);">Brak aktywnych licencji w tym klubie</td></tr>`;
  }
  
  const modalHtml = `
    <h2 style="font-size:1.4rem; font-weight:700; margin-bottom:6px;">${club.name}</h2>
    <div style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1.5rem;">
      Siedziba: ${club.city} (${club.region}) | Założony: ${club.founded} r.
    </div>
    
    <h3 style="font-size:1rem; font-weight:600; margin-bottom:10px;">Lista Licencjonowanych Członków (${players.length})</h3>
    <div class="table-wrapper" style="max-height: 300px; overflow-y:auto;">
      <table class="custom-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Zawodnik</th>
            <th>Licencja</th>
            <th>Kategoria</th>
            <th style="text-align:right;">Punkty</th>
          </tr>
        </thead>
        <tbody>
          ${listHtml}
        </tbody>
      </table>
    </div>
    
    <div style="margin-top:1.5rem; display:flex; justify-content:flex-end;">
      <button class="btn-primary" onclick="closeModal()">Zamknij</button>
    </div>
  `;
  
  openModal(modalHtml);
}

// VIEW 5: Players List View
function renderPlayers() {
  const area = document.getElementById('main-content-area');
  
  function drawPlayers() {
    const players = db.getPlayers();
    const clubs = db.getClubs();
    
    const searchVal = document.getElementById('player-search')?.value.toLowerCase() || '';
    const genderFilter = document.getElementById('player-gender-filter')?.value || 'all';
    const catFilter = document.getElementById('player-cat-filter')?.value || 'all';
    
    let filtered = players;
    
    if (searchVal) {
      filtered = filtered.filter(p => 
        p.firstName.toLowerCase().includes(searchVal) || 
        p.lastName.toLowerCase().includes(searchVal) || 
        p.license.includes(searchVal)
      );
    }
    
    if (genderFilter !== 'all') {
      filtered = filtered.filter(p => p.gender === genderFilter);
    }
    
    if (catFilter !== 'all') {
      filtered = filtered.filter(p => p.category === catFilter);
    }
    
    let rowsHtml = '';
    
    // Upewniamy się, że mamy pola (dla danych testowych)
    filtered.forEach((p, i) => {
      if(p.current_strength === undefined) p.current_strength = p.points || 0;
      if(p.current_rank === undefined) p.current_rank = i + 1; // domyślnie z tablicy
    });
    
    // Sortujemy zawsze po current_rank
    filtered.sort((a, b) => a.current_rank - b.current_rank);
    
    if (filtered.length > 0) {
      filtered.forEach((p, idx) => {
        const club = clubs.find(c => c.id === p.clubId);
        
        let trendHtml = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7F8C8D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 6px;"><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
        
        if (p.previous_rank === null || p.previous_rank === undefined) {
           trendHtml = `<span style="font-size: 0.6rem; background: var(--glass-border); padding: 2px 4px; border-radius: 4px; margin-left: 6px; font-weight:bold; color:var(--text-secondary);">NEW</span>`;
        } else if (p.current_rank < p.previous_rank) {
           trendHtml = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 6px;"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`;
        } else if (p.current_rank > p.previous_rank) {
           trendHtml = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E74C3C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 6px;"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`;
        }
        
        rowsHtml += `
          <tr>
            <td style="font-weight:bold; display:flex; align-items:center;">
              <span style="width: 24px;">${p.current_rank}.</span>
              ${trendHtml}
            </td>
            <td>${p.license}</td>
            <td><strong>${p.firstName} ${p.lastName}</strong></td>
            <td>${club ? club.name : 'brak'}</td>
            <td>${p.category === 'Senior' ? 'Senior' : p.category === 'Veteran' ? 'Weteran' : 'Młodzież'}</td>
            <td style="text-align:right; font-weight:700;">${p.current_strength} ELO</td>
          </tr>
        `;
      });
    } else {
      rowsHtml = `
        <tr>
          <td colspan="6" style="text-align:center; padding:3rem; color:var(--text-secondary);">
            Brak zawodników spełniających podane filtry.
          </td>
        </tr>
      `;
    }
    
    document.getElementById('players-table-body').innerHTML = rowsHtml;
  }
  
  area.innerHTML = `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Baza Zawodników</h1>
        <p>Lista zarejestrowanych zawodników z licencją PFP</p>
      </div>
    </div>
    
    <div class="filter-bar">
      <input type="text" class="search-input" id="player-search" placeholder="Szukaj po nazwisku, licencji, klubie...">
      <select class="select-input" id="player-gender-filter">
        <option value="all">Wszystkie płcie</option>
        <option value="M">Mężczyźni</option>
        <option value="F">Kobiety</option>
      </select>
      <select class="select-input" id="player-cat-filter">
        <option value="all">Wszystkie kategorie</option>
        <option value="Senior">Senior</option>
        <option value="Veteran">Weteran</option>
        <option value="Junior">Młodzież</option>
      </select>
    </div>
    
    <div class="table-wrapper">
      <table class="custom-table">
        <thead>
          <tr>
            <th style="width: 80px;">Poz.</th>
            <th>Nr Licencji</th>
            <th>Zawodnik</th>
            <th>Klub</th>
            <th>Kategoria</th>
            <th style="text-align:right;">Siła ELO</th>
          </tr>
        </thead>
        <tbody id="players-table-body">
          <!-- Injected by drawPlayers() -->
        </tbody>
      </table>
    </div>
  `;
  
  document.getElementById('player-search').addEventListener('input', drawPlayers);
  document.getElementById('player-gender-filter').addEventListener('change', drawPlayers);
  document.getElementById('player-cat-filter').addEventListener('change', drawPlayers);
  
  drawPlayers();
}

// VIEW 6: Login Form
function renderLogin() {
  const area = document.getElementById('main-content-area');
  
  area.innerHTML = `
    <div class="auth-container">
      <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:1.5rem; text-align:center;">Zaloguj się</h2>
      
      <div style="background: var(--glass-bg); padding: 12px; border-radius: 8px; font-size: 0.85rem; margin-bottom: 1.5rem; color: var(--text-secondary); border: 1px solid var(--glass-border);">
        <strong>Demo konta:</strong><br>
        • Admin: <code>admin@pfp.pl</code> / <code>admin</code> (2FA nieaktywne demo)<br>
        • Sędzia: <code>org@pfp.pl</code> / <code>org</code><br>
        • Zawodnik: <code>gracz@pfp.pl</code> / <code>gracz</code>
      </div>

      <div style="display:flex; gap:10px; margin-bottom: 1.5rem;">
        <button type="button" class="btn-secondary" style="flex:1; display:flex; justify-content:center; align-items:center; gap:8px;" onclick="mockOAuth('Google')">
          <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761h-9.426Z"/></svg> Google
        </button>
        <button type="button" class="btn-secondary" style="flex:1; display:flex; justify-content:center; align-items:center; gap:8px;" onclick="mockOAuth('Facebook')">
          <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.626h2.474v-1.749c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995l-0.406,2.626h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2Z"/></svg> Facebook
        </button>
      </div>

      <div style="display:flex; align-items:center; margin-bottom:1.5rem;">
        <div style="flex:1; height:1px; background:var(--glass-border);"></div>
        <div style="padding:0 10px; color:var(--text-secondary); font-size:0.8rem;">LUB KLASYCZNIE</div>
        <div style="flex:1; height:1px; background:var(--glass-border);"></div>
      </div>
      
      <form id="login-form">
        <div class="form-group">
          <label for="login-email">Adres e-mail</label>
          <input type="email" class="form-input" id="login-email" required placeholder="twoj@email.pl">
        </div>
        <div class="form-group">
          <label for="login-pass">Hasło</label>
          <input type="password" class="form-input" id="login-pass" required placeholder="••••••••">
        </div>
        <div class="form-group" id="totp-group" style="display:none;">
          <label for="login-totp">Kod 2FA (tylko sędziowie)</label>
          <input type="text" class="form-input" id="login-totp" placeholder="np. 123456" maxlength="6">
        </div>
        
        <button type="submit" class="btn-primary" style="width:100%; height:46px; justify-content:center; margin-top:1rem;">Zaloguj się</button>
      </form>
      
      <p style="text-align:center; font-size:0.9rem; color:var(--text-secondary); margin-top:1.5rem;">
        Nie masz jeszcze konta? <a href="#/register" style="color:var(--accent-blue); text-decoration:none; font-weight:600;">Zarejestruj się</a>
      </p>
    </div>
  `;
  
  // Expose mockOAuth for global onClick
  window.mockOAuth = (provider) => {
    showToast(`Logowanie ${provider} w toku...`);
    auth.loginWithOAuth(provider).then(payload => {
      showToast(`Zalogowano pomyślnie przez ${provider}!`);
      window.location.hash = '#/';
      router();
    });
  };

  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;
    const totp = document.getElementById('login-totp').value;
    
    try {
      auth.login(email, pass, totp);
      showToast("Zalogowano pomyślnie!");
      window.location.hash = '#/';
    } catch (err) {
      if (err.message.includes("2FA")) {
        document.getElementById('totp-group').style.display = 'block';
      }
      showToast(err.message, 'error');
    }
  });
}

// VIEW 7: Register Form
function renderRegister() {
  const area = document.getElementById('main-content-area');
  
  area.innerHTML = `
    <div class="auth-container">
      <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:1.5rem; text-align:center;">Dołącz do portalu</h2>
      
      <form id="register-form">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:1rem;">
          <div class="form-group" style="margin-bottom:0;">
            <label for="reg-first">Imię</label>
            <input type="text" class="form-input" id="reg-first" required placeholder="np. Jan">
          </div>
          <div class="form-group" style="margin-bottom:0;">
            <label for="reg-last">Nazwisko</label>
            <input type="text" class="form-input" id="reg-last" required placeholder="np. Kowalski">
          </div>
        </div>
        <div class="form-group">
          <label for="reg-email">Adres e-mail</label>
          <input type="email" class="form-input" id="reg-email" required placeholder="twoj@email.pl">
        </div>
        <div class="form-group" style="display:grid; grid-template-columns: 3fr 2fr; gap:12px;">
          <div>
            <label for="reg-pass">Hasło</label>
            <input type="password" class="form-input" id="reg-pass" required placeholder="min. 6 znaków">
          </div>
          <div>
            <label for="reg-lic">Licencja PFP <span style="font-size:0.75rem; font-weight:normal;">(opcja)</span></label>
            <input type="text" class="form-input" id="reg-lic" placeholder="np. 402">
          </div>
        </div>
        
        <button type="submit" class="btn-primary" style="width:100%; height:46px; justify-content:center; margin-top:1rem;">Zarejestruj konto</button>
      </form>
      
      <p style="text-align:center; font-size:0.9rem; color:var(--text-secondary); margin-top:1.5rem;">
        Masz już konto? <a href="#/login" style="color:var(--accent-blue); text-decoration:none; font-weight:600;">Zaloguj się</a>
      </p>
    </div>
  `;
  
  document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const first = document.getElementById('reg-first').value;
    const last = document.getElementById('reg-last').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;
    const license = document.getElementById('reg-lic').value;
    
    if (pass.length < 6) {
      showToast("Hasło musi mieć co najmniej 6 znaków!", "error");
      return;
    }
    
    try {
      auth.register({ firstName: first, lastName: last, email, password: pass, license, role: 'player' });
      showToast("Konto zarejestrowane! Zaloguj się.");
      window.location.hash = '#/login';
    } catch (err) {
      showToast(err.message, 'error');
    }
  });
}

// VIEW 8: Tournament Public Details
function renderTournamentDetail(id) {
  const area = document.getElementById('main-content-area');
  const t = db.getTournament(id);
  
  if (!t) {
    area.innerHTML = '<div style="padding:4rem; text-align:center; color:var(--text-secondary);">Nie znaleziono turnieju o podanym ID.</div>';
    return;
  }
  
  let activeDetailTab = 'info';
  
  function drawTabContent() {
    const contentBox = document.getElementById('tour-detail-tab-content');
    if (!contentBox) return;
    
    if (activeDetailTab === 'info') {
      let signupHtml = '';
      if (t.status === 'Upcoming') {
        if (t.teams.length >= t.maxTeams) {
          signupHtml = `
            <div style="background:rgba(244,63,94,0.03); border: 1px solid var(--glass-border); border-radius:12px; padding:1.5rem; text-align:center; margin-top:1.5rem; color:var(--accent-rose);">
              <strong>Zapisy zamknięte</strong>
              <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:8px;">Limit drużyn (${t.maxTeams}) dla tego turnieju został już osiągnięty.</p>
            </div>
          `;
        } else {
          const pCount = t.format === 'Triplets' ? 3 : t.format === 'Doublets' ? 2 : 1;
          let playerFields = '';
          for (let k = 1; k <= pCount; k++) {
            playerFields += `
              <div class="form-group" style="position:relative; margin-bottom: 12px;">
                <label for="signup-player-name-${k}" style="font-weight:600; font-size:0.85rem; margin-bottom: 4px; display:block;">Zawodnik ${k} (imię, nazwisko lub licencja)</label>
                <input type="text" class="form-input" id="signup-player-name-${k}" placeholder="${t.isOpen ? 'Wpisz imię i nazwisko lub licencję...' : 'Wyszukaj z bazy PFP...'}" required autocomplete="off" style="width:100%; box-sizing:border-box;">
                <input type="hidden" id="signup-player-id-${k}">
                <div class="autocomplete-results" id="autocomplete-results-${k}" style="display:none; position:absolute; left:0; right:0; z-index:100; background:var(--bg-tertiary); border:1px solid var(--glass-border); border-radius:6px; max-height:180px; overflow-y:auto; box-shadow: 0 4px 12px rgba(0,0,0,0.5); padding:4px;"></div>
              </div>
            `;
          }
          signupHtml = `
            <div class="registration-card" style="background:var(--bg-secondary); border: 1px solid var(--glass-border); border-radius:12px; padding:1.5rem; display:flex; flex-direction:column; gap:12px; margin-top:1.5rem;">
              <h3 style="font-size:1.15rem; font-weight:700; border-bottom:1px solid var(--glass-border); padding-bottom:8px; display:flex; align-items:center; justify-content:space-between; margin-bottom: 6px;">
                <span>Zgłoszenie do turnieju</span>
                ${t.isOpen 
                  ? '<span style="background:rgba(16,185,129,0.1); color:var(--accent-emerald); font-size:0.75rem; padding:4px 10px; border-radius:12px; font-weight:600;">Otwarty (Open)</span>' 
                  : '<span style="background:rgba(59,130,246,0.1); color:var(--accent-blue); font-size:0.75rem; padding:4px 10px; border-radius:12px; font-weight:600;">Licencjonowany (PFP)</span>'
                }
              </h3>
              <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:12px;">
                ${t.isOpen 
                  ? 'To są otwarte rozgrywki. Wszyscy chętni mogą się zapisać (numer licencji nie jest wymagany).' 
                  : 'Są to oficjalne rozgrywki rankingowe. Wszyscy członkowie drużyny muszą posiadać ważną licencję PFP.'
                }
              </p>
              <form id="tour-signup-form" style="display:flex; flex-direction:column; gap:12px; max-width:500px;">
                <div class="form-group" style="margin-bottom: 12px;">
                  <label for="signup-team-name" style="font-weight:600; font-size:0.85rem; margin-bottom: 4px; display:block;">Nazwa drużyny (opcjonalnie)</label>
                  <input type="text" class="form-input" id="signup-team-name" placeholder="np. Bulerzy Wrocław (Pozostaw puste dla nazwy domyślnej)" style="width:100%; box-sizing:border-box;">
                </div>
                ${playerFields}
                <button type="submit" class="btn-success" style="margin-top:8px; justify-content:center; padding:10px 20px; font-weight:bold;">Wyślij zgłoszenie</button>
              </form>
            </div>
          `;
        }
      }

      contentBox.innerHTML = `
        <div style="background:var(--bg-secondary); border: 1px solid var(--glass-border); border-radius:12px; padding:1.5rem; display:flex; flex-direction:column; gap:16px;">
          <h3 style="font-size:1.15rem; font-weight:700; border-bottom:1px solid var(--glass-border); padding-bottom:8px;">Metryka turnieju</h3>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; font-size:0.95rem;">
            <div><strong>Organizator:</strong> ${t.organizer}</div>
            <div><strong>Format:</strong> ${t.format === 'Triplets' ? 'Triplety (3-osobowe)' : t.format === 'Doublets' ? 'Dublety (2-osobowe)' : 'Single (1-osobowe)'}</div>
            <div><strong>Miejscowość:</strong> ${t.location}</div>
            <div><strong>Data rozpoczęcia:</strong> ${t.date}</div>
            <div><strong>System parowania:</strong> System Szwajcarski</div>
            <div><strong>Planowana liczba rund:</strong> ${t.rounds}</div>
            <div><strong>Zarejestrowane zespoły:</strong> ${t.teams.length} / ${t.maxTeams}</div>
            <div><strong>Status rozgrywek:</strong> ${t.status === 'Completed' ? 'Zakończony' : t.status === 'Ongoing' ? 'Trwa' : 'Nadchodzący (Zapisy)'}</div>
          </div>
        </div>
        ${signupHtml}
      `;

      // Attach event listeners for the registration form and autocompletes
      if (t.status === 'Upcoming' && t.teams.length < t.maxTeams) {
        const form = document.getElementById('tour-signup-form');
        const pCount = t.format === 'Triplets' ? 3 : t.format === 'Doublets' ? 2 : 1;
        const players = db.getPlayers();
        const clubs = db.getClubs();

        for (let k = 1; k <= pCount; k++) {
          const input = document.getElementById(`signup-player-name-${k}`);
          const idInput = document.getElementById(`signup-player-id-${k}`);
          const resultsBox = document.getElementById(`autocomplete-results-${k}`);

          if (!input || !resultsBox) continue;

          input.addEventListener('input', () => {
            const val = input.value.trim().toLowerCase();
            idInput.value = ""; // Clear selected ID

            if (val.length < 2) {
              resultsBox.style.display = 'none';
              return;
            }

            // Exclude already selected players in current form inputs
            const alreadySelected = [];
            for (let i = 1; i <= pCount; i++) {
              const idVal = document.getElementById(`signup-player-id-${i}`)?.value;
              if (idVal) alreadySelected.push(idVal);
            }

            const matches = players.filter(p => 
              !alreadySelected.includes(p.id) && (
                p.firstName.toLowerCase().includes(val) || 
                p.lastName.toLowerCase().includes(val) || 
                p.license.includes(val)
              )
            ).slice(0, 5);

            if (matches.length > 0) {
              resultsBox.innerHTML = matches.map(p => {
                const clubName = clubs.find(cl => cl.id === p.clubId)?.name || 'brak';
                return `
                  <div class="autocomplete-item" style="padding:8px 12px; cursor:pointer; border-radius:4px; border-bottom:1px solid rgba(255,255,255,0.02); hover:background:rgba(255,255,255,0.05);" data-id="${p.id}" data-name="${p.lastName} ${p.firstName}">
                    <div style="font-weight:600; font-size:0.9rem;">${p.lastName} ${p.firstName}</div>
                    <div style="font-size:0.75rem; color:var(--text-secondary);">Licencja: ${p.license} · Klub: ${clubName}</div>
                  </div>
                `;
              }).join('');
              resultsBox.style.display = 'block';

              resultsBox.querySelectorAll('.autocomplete-item').forEach(item => {
                item.addEventListener('click', () => {
                  idInput.value = item.getAttribute('data-id');
                  input.value = item.getAttribute('data-name');
                  resultsBox.style.display = 'none';
                });
              });
            } else {
              if (t.isOpen) {
                resultsBox.innerHTML = `
                  <div style="padding:8px 12px; font-size:0.8rem; color:var(--text-secondary);">
                    Brak wyników. Zostanie dodany jako amator: <strong>"${input.value}"</strong>
                  </div>
                `;
                resultsBox.style.display = 'block';
              } else {
                resultsBox.innerHTML = `
                  <div style="padding:8px 12px; font-size:0.8rem; color:var(--accent-rose);">
                    Wymagana ważna licencja PFP! Brak wyników.
                  </div>
                `;
                resultsBox.style.display = 'block';
              }
            }
          });

          input.addEventListener('blur', () => {
            setTimeout(() => {
              resultsBox.style.display = 'none';
            }, 250);
          });
        }

        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const pIds = [];
          const names = [];

          for (let k = 1; k <= pCount; k++) {
            const input = document.getElementById(`signup-player-name-${k}`);
            const idInput = document.getElementById(`signup-player-id-${k}`);
            
            let pId = idInput.value;
            const rawVal = input.value.trim();

            if (!pId) {
              if (t.isOpen) {
                // Register custom amateur player
                const spaceIdx = rawVal.indexOf(' ');
                let fName = rawVal;
                let lName = '';
                if (spaceIdx !== -1) {
                  lName = rawVal.substring(0, spaceIdx);
                  fName = rawVal.substring(spaceIdx + 1);
                }
                
                const amId = 'amateur-' + Date.now() + '-' + k + '-' + Math.floor(Math.random()*1000);
                const amateurPlayer = {
                  id: amId,
                  firstName: fName,
                  lastName: lName,
                  license: 'brak',
                  clubId: null,
                  gender: 'M',
                  category: 'Senior',
                  points: 0,
                  strength: 0
                };
                db.addPlayer(amateurPlayer);
                pId = amId;
              } else {
                showToast(`Gracz ${k} musi być wybrany z listy licencjonowanych zawodników!`, "error");
                return;
              }
            }

            if (pIds.includes(pId)) {
              showToast("Zawodnicy w drużynie nie mogą się powtarzać!", "error");
              return;
            }
            pIds.push(pId);
            names.push(rawVal);
          }

          let customName = document.getElementById('signup-team-name').value.trim();
          if (!customName) {
            customName = names[0].split(' ')[0] + (pCount > 1 ? ' + partner' : '');
          }

          const newTeam = {
            id: 'team-' + Date.now(),
            name: customName,
            playerIds: pIds
          };

          t.teams.push(newTeam);
          db.updateTournament(t);
          showToast("Zgłoszenie wysłane pomyślnie!");
          renderTournamentDetail(t.id);
        });
      }
    } else if (activeDetailTab === 'teams') {
      let listHtml = '';
      if (t.teams.length > 0) {
        const players = db.getPlayers();
        t.teams.forEach((team, idx) => {
          const names = team.playerIds.map(pId => {
            const p = players.find(x => x.id === pId);
            return p ? `${p.firstName} ${p.lastName} (${p.license})` : pId;
          }).join(', ');
          
          listHtml += `
            <div style="padding:12px; border-bottom:1px solid var(--glass-border); display:flex; gap:12px; align-items:center;">
              <span style="color:var(--text-secondary); width:30px; font-weight:bold;">${idx+1}.</span>
              <div>
                <div style="font-weight:600;">${team.name}</div>
                <div style="font-size:0.8rem; color:var(--text-secondary); margin-top:2px;">Skład: ${names}</div>
              </div>
            </div>
          `;
        });
      } else {
        listHtml = '<div style="color:var(--text-secondary); text-align:center; padding: 2rem;">Brak zgłoszonych drużyn</div>';
      }
      contentBox.innerHTML = `
        <div style="background:var(--bg-secondary); border: 1px solid var(--glass-border); border-radius:12px; padding:1.5rem;">
          <h3 style="font-size:1.15rem; font-weight:700; border-bottom:1px solid var(--glass-border); padding-bottom:8px; margin-bottom:12px;">Lista startowa (${t.teams.length})</h3>
          <div style="display:flex; flex-direction:column; gap:6px;">
            ${listHtml}
          </div>
        </div>
      `;
    } else if (activeDetailTab === 'matches') {
      let matchesHtml = '';
      // Find what rounds we have in matches
      const rounds = [];
      t.matches.forEach(m => {
        if (!rounds.includes(m.round)) rounds.push(m.round);
      });
      rounds.sort((a,b) => b-a); // show latest round first
      
      if (rounds.length > 0) {
        rounds.forEach(r => {
          let roundMatches = t.matches.filter(m => m.round === r);
          let roundHtml = '';
          
          roundMatches.forEach(m => {
            const teamA = t.teams.find(x => x.id === m.teamAId)?.name || 'Nieznana drużyna';
            const teamB = t.teams.find(x => x.id === m.teamBId)?.name || 'Nieznana drużyna';
            const scoreText = m.status === 'Completed' ? `${m.scoreA} : ${m.scoreB}` : 'vs';
            const winAClass = m.status === 'Completed' && m.scoreA > m.scoreB ? 'winner' : '';
            const winBClass = m.status === 'Completed' && m.scoreB > m.scoreA ? 'winner' : '';
            
            roundHtml += `
              <div class="match-card">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="match-terrain">Tor ${m.terrain}</span>
                  <span style="font-size:0.75rem; font-weight:600; padding:2px 8px; border-radius:12px;" class="${m.status === 'Completed' ? 'status-completed' : 'status-ongoing'}">
                    ${m.status === 'Completed' ? 'Zakończony' : 'Trwa'}
                  </span>
                </div>
                <div style="display:flex; flex-direction:column; gap:8px;">
                  <div class="match-team ${winAClass}">
                    <span>${teamA}</span>
                    <span>${m.status === 'Completed' ? m.scoreA : ''}</span>
                  </div>
                  <div class="match-team ${winBClass}">
                    <span>${teamB}</span>
                    <span>${m.status === 'Completed' ? m.scoreB : ''}</span>
                  </div>
                </div>
              </div>
            `;
          });
          
          // Check if there was a bye in this round
          // Look up in the byes array (if bye index matches round index - 1)
          const roundByeTeamId = t.byes[r - 1] || null;
          let byeHtml = '';
          if (roundByeTeamId) {
            const byeTeamName = t.teams.find(x => x.id === roundByeTeamId)?.name || 'Nieznany';
            byeHtml = `
              <div class="match-card" style="border-style: dashed; background: rgba(59, 130, 246, 0.03);">
                <div class="match-terrain">Wolny Los (BYE)</div>
                <div style="font-weight:600; color:var(--text-secondary); display:flex; justify-content:space-between;">
                  <span>${byeTeamName}</span>
                  <span style="color:var(--accent-emerald);">+13 małych pkt</span>
                </div>
              </div>
            `;
          }
          
          matchesHtml += `
            <div style="margin-bottom:2rem;">
              <h4 style="font-size:1.1rem; font-weight:700; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:6px; margin-bottom:12px; display:flex; align-items:center;">
                Runda ${r}
              </h4>
              <div class="matches-grid">
                ${roundHtml}
                ${byeHtml}
              </div>
            </div>
          `;
        });
      } else {
        matchesHtml = '<div style="color:var(--text-secondary); text-align:center; padding: 2rem;">Rundy jeszcze nie wystartowały.</div>';
      }
      
      contentBox.innerHTML = `
        <div style="background:var(--bg-secondary); border: 1px solid var(--glass-border); border-radius:12px; padding:1.5rem;">
          ${matchesHtml}
        </div>
      `;
    } else if (activeDetailTab === 'standings') {
      const calculatedStandings = swiss.calculateStandings(t);
      let tableRows = '';
      
      if (calculatedStandings.length > 0) {
        calculatedStandings.forEach((st, idx) => {
          const rank = idx + 1;
          const rankClass = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';
          
          tableRows += `
            <tr>
              <td><span class="badge-rank ${rankClass}">${rank}</span></td>
              <td><strong>${st.name}</strong></td>
              <td style="font-weight:700; text-align:center;">${st.wins}</td>
              <td style="text-align:center;">${st.buchholz}</td>
              <td style="text-align:center;">${st.fineBuchholz}</td>
              <td style="text-align:center; font-weight:600; color: ${st.diff >= 0 ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">${st.diff > 0 ? '+' : ''}${st.diff}</td>
              <td style="text-align:center;">${st.scored}</td>
            </tr>
          `;
        });
      } else {
        tableRows = '<tr><td colspan="7" style="text-align:center; padding:2rem; color:var(--text-muted);">Brak wyników do kalkulacji tabeli.</td></tr>';
      }
      
      contentBox.innerHTML = `
        <div style="background:var(--bg-secondary); border: 1px solid var(--glass-border); border-radius:12px; padding:1.5rem;">
          <h3 style="font-size:1.15rem; font-weight:700; border-bottom:1px solid var(--glass-border); padding-bottom:8px; margin-bottom:12px;">Tabela wyników (Swiss Standings)</h3>
          <div class="table-wrapper">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Poz.</th>
                  <th>Drużyna / Zawodnik</th>
                  <th style="text-align:center;">Wygrane</th>
                  <th style="text-align:center;">Buchholz</th>
                  <th style="text-align:center;">Fine Buchholz</th>
                  <th style="text-align:center;">Bilans</th>
                  <th style="text-align:center;">Małe punkty</th>
                </tr>
              </thead>
              <tbody>
                ${tableRows}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }
  }
  
  area.innerHTML = `
    <div class="page-header">
      <div class="page-title-group">
        <h1>${t.name}</h1>
        <p>${t.location} · ${t.date} · System: Szwajcarski (${t.rounds} rund)</p>
      </div>
      <a href="#/tournaments" class="btn-secondary">&larr; Powrót</a>
    </div>
    
    <div class="tabs-container">
      <button class="tab-btn active" id="tab-det-info">Informacje ogólne</button>
      <button class="tab-btn" id="tab-det-teams">Zgłoszenia (${t.teams.length})</button>
      <button class="tab-btn" id="tab-det-matches">Mecze / Wyniki</button>
      <button class="tab-btn" id="tab-det-standings">Klasyfikacja</button>
    </div>
    
    <div id="tour-detail-tab-content">
      <!-- Tab contents injected here -->
    </div>
  `;
  
  const tabs = ['info', 'teams', 'matches', 'standings'];
  tabs.forEach(tab => {
    document.getElementById(`tab-det-${tab}`).addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      activeDetailTab = tab;
      drawTabContent();
    });
  });
  
  drawTabContent();
}

// VIEW 10: User / Organizer Profile Panel
function renderProfile() {
  const area = document.getElementById('main-content-area');
  const session = auth.getSession();
  
  if (!session) {
    area.innerHTML = '<div style="padding:4rem; text-align:center;">Musisz się zalogować, aby zobaczyć ten panel.</div>';
    return;
  }
  
  const isOrganizer = [auth.ROLES.ORGANIZER, auth.ROLES.REFEREE, auth.ROLES.SUPER_ADMIN].includes(session.role);
  
  let contentHtml = '';
  
  if (isOrganizer) {
    const allTours = db.getTournaments();
    const myTours = allTours.filter(t => t.organizer === session.name || t.organizer.includes(session.name));
    
    contentHtml = `
      <div class="dashboard-grid">
        <div class="dashboard-card" style="grid-column: 1 / -1;">
          <h2 class="card-title">Panel Sędziego i Organizatora</h2>
          <p style="color:var(--text-secondary); font-size:0.9rem;">Witaj w centrum dowodzenia. Możesz stąd zarządzać swoimi turniejami i bulodromami.</p>
        </div>
        
        <div class="dashboard-card">
          <h2 class="card-title">Moje Turnieje (${myTours.length})</h2>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${myTours.length > 0 ? myTours.map(t => `
              <div style="padding:12px; border:1px solid var(--glass-border); border-radius:var(--border-radius-sm); display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <div style="font-weight:600;">${t.name}</div>
                  <div style="font-size:0.8rem; color:var(--text-secondary);">${t.date} • ${t.location}</div>
                </div>
                <a href="#/tournament-manage/${t.id}" class="btn-primary" style="font-size:0.8rem; padding:6px 12px;">Zarządzaj</a>
              </div>
            `).join('') : '<div style="color:var(--text-muted); font-size:0.9rem;">Nie zorganizowałeś jeszcze żadnych turniejów.</div>'}
          </div>
          <button class="btn-primary" style="width:100%; margin-top:1rem;" onclick="openCreateTournamentModal()">Stwórz nowy turniej</button>
        </div>
        
        <div class="dashboard-card">
          <h2 class="card-title">Zarządzanie Obiektami</h2>
          <div style="padding:1rem; border:1px dashed var(--glass-border); border-radius:var(--border-radius-sm); text-align:center;">
            <p style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:1rem;">Zarządzaj informacjami o bulodromach przypisanych do Twojego klubu.</p>
            <button class="btn-secondary">Dodaj nowy bulodrom</button>
          </div>
        </div>
      </div>
    `;
  } else {
    // Player panel
    const players = db.getPlayers();
    const me = session.license 
      ? players.find(p => p.license === session.license) 
      : players.find(p => `${p.firstName} ${p.lastName}`.toLowerCase() === session.name.toLowerCase());
    
    const myPlayerId = me ? me.id : null;
    const myPoints = me ? me.points : 0;
    
    const allTours = db.getTournaments();
    
    // Find upcoming starts
    const upcomingTours = allTours.filter(t => t.status === 'Upcoming' || t.status === 'Ongoing');
    const myUpcoming = myPlayerId ? upcomingTours.filter(t => 
      t.teams.some(team => team.playerIds.includes(myPlayerId))
    ) : [];
    
    // Find played tournaments
    const finishedTours = allTours.filter(t => t.status === 'Completed');
    const myPlayed = myPlayerId ? finishedTours.filter(t => 
      t.teams.some(team => team.playerIds.includes(myPlayerId))
    ) : [];

    let licInfo = session.license 
      ? `<div style="color:var(--accent-emerald); font-weight:600; display:flex; align-items:center; gap:6px;">${getIcon('check')} Licencja aktywna: ${session.license}</div>`
      : `<div style="color:var(--accent-amber); font-weight:600;">Brak licencji PFP (Amator)</div>`;
      
    let upcomingHtml = `
      <div style="padding:2rem; text-align:center; color:var(--text-muted); font-size:0.9rem; border:1px dashed var(--glass-border); border-radius:var(--border-radius-sm);">
        Brak zarejestrowanych zgłoszeń w najbliższym czasie.
        <div style="margin-top:1rem;">
          <a href="#/tournaments" class="btn-primary">Przejdź do kalendarza</a>
        </div>
      </div>
    `;

    if (myUpcoming.length > 0) {
      upcomingHtml = `
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${myUpcoming.map(t => {
            const myTeam = t.teams.find(team => team.playerIds.includes(myPlayerId));
            return `
              <div style="padding:12px; border:1px solid var(--glass-border); border-radius:var(--border-radius-sm); display:flex; justify-content:space-between; align-items:center; background:var(--bg-tertiary);">
                <div>
                  <div style="font-weight:600;">${t.name}</div>
                  <div style="font-size:0.8rem; color:var(--text-secondary);">${t.date} • ${t.location}</div>
                  <div style="font-size:0.75rem; color:var(--accent-cyan); margin-top:4px;">Zgłoszono: ${myTeam ? myTeam.name : 'brak'}</div>
                </div>
                <a href="#/tournament/${t.id}" class="btn-primary" style="font-size:0.8rem; padding:6px 12px;">Szczegóły</a>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    let historyTableRows = '<tr><td colspan="6" style="text-align:center; padding:2rem; color:var(--text-muted);">Brak ukończonych turniejów w historii startów.</td></tr>';
    if (myPlayed.length > 0) {
      const results = db.getTournamentResults();
      historyTableRows = myPlayed.map(t => {
        const myTeam = t.teams.find(team => team.playerIds.includes(myPlayerId));
        const position = t.standings ? t.standings.findIndex(st => st.teamId === myTeam.id) + 1 : '-';
        const totalTeams = t.teams.length;
        
        const myResult = results.find(r => r.tournament_id === t.id && r.player_id === myPlayerId);
        const pointsEarned = myResult ? myResult.strength_points_earned : 0;
        
        return `
          <tr>
            <td><strong><a href="#/tournament/${t.id}" style="color:var(--accent-cyan); text-decoration:none; font-weight:600;">${t.name}</a></strong></td>
            <td>${t.date}</td>
            <td>${t.format === 'Triplets' ? 'Triplety' : t.format === 'Doublets' ? 'Dublety' : 'Single'}</td>
            <td>${myTeam ? myTeam.name : 'N/A'}</td>
            <td style="text-align:center; font-weight:700;">${position} / ${totalTeams}</td>
            <td style="text-align:center; font-weight:600; color:var(--accent-emerald);">+${pointsEarned.toFixed(1)} PA</td>
          </tr>
        `;
      }).join('');
    }

    contentHtml = `
      <div class="dashboard-grid">
        <div class="dashboard-card" style="grid-column: 1 / -1; display:flex; align-items:center; gap:20px;">
          <div style="width:80px; height:80px; border-radius:50%; background:var(--gradient-blue); display:flex; align-items:center; justify-content:center; font-size:2rem; font-weight:bold; color:#fff;">
            ${session.name.split(' ').map(n=>n[0]).join('')}
          </div>
          <div>
            <h2 style="font-size:1.8rem; margin-bottom:4px;">${session.name}</h2>
            ${licInfo}
          </div>
        </div>
        
        <div class="dashboard-card">
          <h2 class="card-title">Moje nadchodzące starty</h2>
          ${upcomingHtml}
        </div>
        
        <div class="dashboard-card">
          <h2 class="card-title">Historia i Statystyki</h2>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-bottom:1rem;">
            <div style="background:var(--bg-tertiary); padding:1rem; border-radius:var(--border-radius-sm); text-align:center;">
              <div style="font-size:1.5rem; font-weight:bold; color:var(--accent-cyan);">${myPlayed.length}</div>
              <div style="font-size:0.8rem; color:var(--text-secondary);">Rozegrane turnieje</div>
            </div>
            <div style="background:var(--bg-tertiary); padding:1rem; border-radius:var(--border-radius-sm); text-align:center;">
              <div style="font-size:1.5rem; font-weight:bold; color:var(--accent-amber);">${myPoints.toFixed(1)}</div>
              <div style="font-size:0.8rem; color:var(--text-secondary);">Punkty rankingowe</div>
            </div>
          </div>
          <button class="btn-secondary" style="width:100%;">Złóż wniosek o status Sędziego</button>
        </div>

        <div class="dashboard-card" style="grid-column: 1 / -1;">
          <h2 class="card-title">Historia Startów i Osiągnięcia</h2>
          <div class="table-wrapper">
            <table class="custom-table" style="width:100%;">
              <thead>
                <tr>
                  <th>Turniej</th>
                  <th>Data</th>
                  <th>Format</th>
                  <th>Drużyna</th>
                  <th style="text-align:center;">Pozycja końcowa</th>
                  <th style="text-align:center;">Punkty rankingowe</th>
                </tr>
              </thead>
              <tbody>
                ${historyTableRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }
  
  area.innerHTML = `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Moje Konto</h1>
        <p>Zarządzaj swoim profilem i ustawieniami</p>
      </div>
    </div>
    ${contentHtml}
  `;
}// VIEW 9: Tournament Organizer Dashboard (Full Swiss Tournament Manager)
function renderTournamentManage(id) {
  const area = document.getElementById('main-content-area');
  const session = auth.getSession();
  
  // Security check: Only organizer can access
  if (!session || (session.role !== 'organizer' && session.role !== 'ORGANIZER')) {
    area.innerHTML = `
      <div style="padding:4rem; text-align:center; color:var(--text-secondary);">
        <h2 style="color:var(--accent-rose);">Brak uprawnień</h2>
        <p style="margin-top:1rem;">Tylko zalogowani organizatorzy mają dostęp do panelu sędziowskiego.</p>
        <a href="#/login" class="btn-primary" style="margin-top:1.5rem;">Zaloguj się</a>
      </div>
    `;
    return;
  }
  
  const t = db.getTournament(id);
  if (!t) {
    area.innerHTML = '<div style="padding:4rem; text-align:center; color:var(--text-secondary);">Nie znaleziono turnieju o podanym ID.</div>';
    return;
  }
  
  let activeTab = t.status === 'Upcoming' ? 'teams' : 'controls';
  
  function drawTabContent() {
    const contentBox = document.getElementById('tour-manage-tab-content');
    if (!contentBox) return;
    
    // TAB 1: Registration and Team additions
    if (activeTab === 'teams') {
      const players = db.getPlayers();
      const clubs = db.getClubs();
      
      let listHtml = '';
      if (t.teams.length > 0) {
        t.teams.forEach((team, idx) => {
          const names = team.playerIds.map(pId => {
            const p = players.find(x => x.id === pId);
            return p ? `${p.firstName} ${p.lastName}` : pId;
          }).join(', ');
          
          listHtml += `
            <div style="padding:10px; border-bottom: 1px solid rgba(255,255,255,0.03); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong>${idx+1}. ${team.name}</strong>
                <div style="font-size:0.8rem; color:var(--text-secondary); margin-top:2px;">Skład: ${names}</div>
              </div>
              ${t.status === 'Upcoming' 
                ? `<button class="btn-secondary" style="padding:6px 12px; font-size:0.8rem; color:var(--accent-rose); border-color:rgba(244,63,94,0.2);" id="btn-remove-team-${team.id}">Usuń</button>`
                : ''
              }
            </div>
          `;
        });
      } else {
        listHtml = '<div style="color:var(--text-secondary); text-align:center; padding: 2rem;">Brak zarejestrowanych zespołów</div>';
      }
      
      // Compute form fields based on format (Triplet/Doublet/Single)
      let formFields = '';
      const pCount = t.format === 'Triplets' ? 3 : t.format === 'Doublets' ? 2 : 1;
      
      for (let k = 1; k <= pCount; k++) {
        formFields += `
          <div class="form-group">
            <label for="select-player-${k}">Zawodnik ${k}</label>
            <select class="select-input" id="select-player-${k}" required style="width:100%;">
              <option value="">-- Wybierz zawodnika z bazy PFP --</option>
              ${players.map(p => {
                const cName = clubs.find(cl => cl.id === p.clubId)?.name || 'brak';
                return `<option value="${p.id}">${p.lastName} ${p.firstName} (Licencja: ${p.license} - ${cName})</option>`;
              }).join('')}
            </select>
          </div>
        `;
      }
      
      contentBox.innerHTML = `
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem;">
          <!-- Left side: List -->
          <div style="background:var(--bg-secondary); border: 1px solid var(--glass-border); border-radius:12px; padding:1.5rem;">
            <h3 style="font-size:1.15rem; font-weight:700; border-bottom:1px solid var(--glass-border); padding-bottom:8px; margin-bottom:12px;">
              Zgłoszenia (${t.teams.length})
            </h3>
            <div style="display:flex; flex-direction:column; gap:6px;">
              ${listHtml}
            </div>
          </div>
          
          <!-- Right side: Add manually form -->
          <div style="background:var(--bg-secondary); border: 1px solid var(--glass-border); border-radius:12px; padding:1.5rem; display:${t.status === 'Upcoming' ? 'block' : 'none'};">
            <h3 style="font-size:1.15rem; font-weight:700; border-bottom:1px solid var(--glass-border); padding-bottom:8px; margin-bottom:12px;">
              Dodaj drużynę ręcznie
            </h3>
            <form id="add-team-form">
              <div class="form-group">
                <label for="new-team-name">Nazwa Drużyny (opcja)</label>
                <input type="text" class="form-input" id="new-team-name" placeholder="Puste = nazwisko kapitana / nazwa klubu">
              </div>
              ${formFields}
              <button type="submit" class="btn-success" style="width:100%; margin-top:1rem; justify-content:center;">Zarejestruj Drużynę</button>
            </form>
          </div>
        </div>
      `;
      
      // Bind removals
      if (t.status === 'Upcoming') {
        t.teams.forEach(team => {
          const remBtn = document.getElementById(`btn-remove-team-${team.id}`);
          if (remBtn) {
            remBtn.addEventListener('click', () => {
              t.teams = t.teams.filter(x => x.id !== team.id);
              db.updateTournament(t);
              showToast("Usunięto drużynę z listy!");
              drawTabContent();
            });
          }
        });
        
        // Bind submit additions
        document.getElementById('add-team-form')?.addEventListener('submit', (e) => {
          e.preventDefault();
          const pIds = [];
          for (let k = 1; k <= pCount; k++) {
            const pId = document.getElementById(`select-player-${k}`).value;
            if (!pId) {
              showToast("Musisz wybrać wszystkich zawodników!", "error");
              return;
            }
            if (pIds.includes(pId)) {
              showToast("Nie możesz dodać tego samego zawodnika wielokrotnie!", "error");
              return;
            }
            pIds.push(pId);
          }
          
          // Generate default team name if empty
          let customName = document.getElementById('new-team-name').value.trim();
          if (!customName) {
            const firstPlayer = players.find(x => x.id === pIds[0]);
            const clubName = clubs.find(cl => cl.id === firstPlayer.clubId)?.name || 'Klub';
            customName = `${firstPlayer.lastName} (${clubName.substring(0, 15)})`;
          }
          
          const newTeam = {
            id: 'team-' + Date.now(),
            name: customName,
            playerIds: pIds
          };
          
          t.teams.push(newTeam);
          db.updateTournament(t);
          showToast("Zarejestrowano drużynę!");
          drawTabContent();
        });
      }
    } 
    
    // TAB 2: Core Tournament Controls (Run rounds, pairings, results)
    else if (activeTab === 'controls') {
      let contentHtml = '';
      
      if (t.status === 'Upcoming') {
        contentHtml = `
          <div style="text-align:center; padding:3rem; background:rgba(255,255,255,0.01); border: 1px solid var(--glass-border); border-radius:12px;">
            <h3 style="font-size:1.3rem; font-weight:700; margin-bottom:12px;">Rozpocznij rozgrywki</h3>
            <p style="color:var(--text-secondary); margin-bottom:2rem; max-width:400px; margin-left:auto; margin-right:auto;">
              Masz zarejestrowanych <strong>${t.teams.length}</strong> drużyn. Rozpoczęcie turnieju zamknie listę startową i wygeneruje parowania na rundę 1.
            </p>
            <button class="btn-success" id="btn-start-tournament" style="padding:12px 30px; font-size:1rem;" ${t.teams.length < 3 ? 'disabled' : ''}>
              Rozpocznij Rundy Swiss
            </button>
            ${t.teams.length < 3 
              ? '<p style="color:var(--accent-rose); font-size:0.8rem; margin-top:8px;">Wymagane są minimum 3 drużyny, aby wystartować.</p>' 
              : ''
            }
          </div>
        `;
      } else if (t.status === 'Ongoing') {
        // Find current round
        let activeRound = 1;
        if (t.matches.length > 0) {
          activeRound = Math.max(...t.matches.map(m => m.round));
        }
        
        const roundMatches = t.matches.filter(m => m.round === activeRound);
        const allCompleted = roundMatches.length > 0 && roundMatches.every(m => m.status === 'Completed');
        
        let matchesListHtml = '';
        roundMatches.forEach((m, idx) => {
          const teamAName = t.teams.find(x => x.id === m.teamAId)?.name || 'Brak';
          const teamBName = t.teams.find(x => x.id === m.teamBId)?.name || 'Brak';
          
          matchesListHtml += `
            <div class="match-card" style="display:flex; flex-direction:column; gap:12px; padding:1.25rem; background:var(--bg-tertiary); border:1px solid var(--glass-border); border-radius:12px; margin-bottom:12px;">
              <div style="display:grid; grid-template-columns: 80px 1fr 100px; align-items:center; gap: 1.5rem;">
                <!-- Pitch input -->
                <div style="display:flex; flex-direction:column; gap:4px; align-items:center;">
                  <span style="font-size:0.75rem; color:var(--text-secondary); font-weight:600;">Tor</span>
                  <input type="number" class="form-input" id="terrain-${m.id}" value="${m.terrain}" style="width:55px; height:28px; padding:2px; text-align:center; font-size:0.85rem; margin:0;" min="1" max="100">
                </div>
                
                <!-- Teams -->
                <div style="display:flex; flex-direction:column; gap:6px;">
                  <div style="font-weight:600;">${teamAName}</div>
                  <div style="font-weight:600; color:var(--text-secondary); border-top:1px solid rgba(255,255,255,0.03); padding-top:6px; margin-top:4px;">${teamBName}</div>
                </div>
                
                <!-- Scores -->
                <div style="display:flex; flex-direction:column; gap:8px;">
                  <input type="number" class="match-score-input" id="score-a-${m.id}" value="${m.scoreA !== undefined ? m.scoreA : ''}" placeholder="0" min="0" max="13" style="width:100%;">
                  <input type="number" class="match-score-input" id="score-b-${m.id}" value="${m.scoreB !== undefined ? m.scoreB : ''}" placeholder="0" min="0" max="13" style="width:100%;">
                </div>
              </div>
              
              <!-- Quick Scoring Row -->
              <div style="display:flex; align-items:center; gap:8px; border-top:1px solid rgba(255,255,255,0.03); padding-top:8px; font-size:0.8rem; color:var(--text-secondary);">
                <span style="font-weight:600;">Szybki wynik:</span>
                <select class="select-input" id="quick-winner-${m.id}" style="padding:2px 6px; height:26px; font-size:0.75rem; width:150px; background:var(--bg-secondary);">
                  <option value="">Wybierz zwycięzcę...</option>
                  <option value="A">${teamAName.substring(0, 20)}</option>
                  <option value="B">${teamBName.substring(0, 20)}</option>
                </select>
                <span>różnicą punktów:</span>
                <select class="select-input" id="quick-diff-${m.id}" style="padding:2px 6px; height:26px; font-size:0.75rem; width:80px; background:var(--bg-secondary);">
                  ${Array.from({length: 13}, (_, idx) => `<option value="${idx+1}" ${idx === 2 ? 'selected' : ''}>${idx+1}</option>`).join('')}
                </select>
              </div>
            </div>
          `;
        });
        
        // Bye display
        const roundByeTeamId = t.byes[activeRound - 1] || null;
        let byeHtml = '';
        if (roundByeTeamId) {
          const byeTeamName = t.teams.find(x => x.id === roundByeTeamId)?.name || 'Nieznana';
          byeHtml = `
            <div class="match-card" style="border-style:dashed; background:rgba(59,130,246,0.03); display:flex; justify-content:space-between; align-items:center; padding:1.25rem;">
              <div>
                <span class="match-terrain">Wolny Los (BYE)</span>
                <div style="font-weight:600; margin-top:4px;">${byeTeamName}</div>
              </div>
              <span style="color:var(--accent-emerald); font-weight:700; font-size:0.9rem;">+13 (Wygrana)</span>
            </div>
          `;
        }
        
        let bottomControlsHtml = '';
        if (allCompleted) {
          if (activeRound < t.rounds) {
            bottomControlsHtml = `
              <div style="display:flex; flex-direction:column; align-items:center; gap:12px; margin-top:2rem;">
                <p style="color:var(--accent-emerald); font-weight:600;">Wszystkie wyniki dla rundy ${activeRound} zostały wprowadzone!</p>
                <button class="btn-primary" id="btn-next-round" style="padding:12px 30px; font-size:1rem;">
                  Generuj Rundy ${activeRound + 1} &rarr;
                </button>
              </div>
            `;
          } else {
            bottomControlsHtml = `
              <div style="display:flex; flex-direction:column; align-items:center; gap:12px; margin-top:2rem;">
                <p style="color:var(--accent-emerald); font-weight:600;">Wszystkie rundy zostały rozegrane!</p>
                <button class="btn-success" id="btn-finalize-tournament" style="padding:12px 30px; font-size:1rem;">
                  Zakończ Turniej i Przelicz Rankingi
                </button>
              </div>
            `;
          }
        } else {
          bottomControlsHtml = `
            <div style="display:flex; justify-content:center; margin-top:2rem;">
              <button class="btn-success" id="btn-save-scores" style="padding:12px 30px; font-size:0.95rem;">
                Zapisz wyniki rundy ${activeRound}
              </button>
            </div>
          `;
        }
        
        contentHtml = `
          <div style="background:var(--bg-secondary); border: 1px solid var(--glass-border); border-radius:12px; padding:1.5rem; margin-bottom:1.5rem;">
            <h3 style="font-size:1.2rem; font-weight:700; margin-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:6px;">
              Parowania Rundy ${activeRound}
            </h3>
            <div style="display:flex; flex-direction:column; gap:12px; max-width:600px;">
              ${matchesListHtml}
              ${byeHtml}
            </div>
            ${bottomControlsHtml}
          </div>
        `;
      } else {
        contentHtml = `
          <div style="text-align:center; padding:3rem; background:rgba(255,255,255,0.01); border: 1px solid var(--glass-border); border-radius:12px;">
            <h3 style="font-size:1.3rem; font-weight:700; margin-bottom:12px; color:var(--accent-emerald);">Turniej Zakończony</h3>
            <p style="color:var(--text-secondary); margin-bottom:1.5rem;">
              Wszystkie wyniki zostały zatwierdzone, a tabela końcowa została zablokowana i opublikowana na portalu.
            </p>
            <a href="#/tournament/${t.id}" class="btn-primary">Zobacz Tabelę Końcową</a>
          </div>
        `;
      }
      
      contentBox.innerHTML = contentHtml;
      
      // Bind controls listeners
      if (t.status === 'Upcoming') {
        document.getElementById('btn-start-tournament')?.addEventListener('click', () => {
          startTournamentGameplay();
        });
      } else if (t.status === 'Ongoing') {
        let activeRound = Math.max(...t.matches.map(m => m.round));
        const roundMatches = t.matches.filter(m => m.round === activeRound);
        
        // Bind quick score updates
        roundMatches.forEach(m => {
          const winnerSel = document.getElementById(`quick-winner-${m.id}`);
          const diffSel = document.getElementById(`quick-diff-${m.id}`);
          const scoreAInput = document.getElementById(`score-a-${m.id}`);
          const scoreBInput = document.getElementById(`score-b-${m.id}`);
          
          if (winnerSel && diffSel && scoreAInput && scoreBInput) {
            const updateQuickScore = () => {
              const winner = winnerSel.value;
              const diff = parseInt(diffSel.value);
              if (winner === 'A') {
                scoreAInput.value = 13;
                scoreBInput.value = 13 - diff;
              } else if (winner === 'B') {
                scoreAInput.value = 13 - diff;
                scoreBInput.value = 13;
              }
            };
            winnerSel.addEventListener('change', updateQuickScore);
            diffSel.addEventListener('change', updateQuickScore);
          }
        });
        
        // Save Scores & Pitches
        document.getElementById('btn-save-scores')?.addEventListener('click', () => {
          let hasErrors = false;
          
          roundMatches.forEach(m => {
            const valA = parseInt(document.getElementById(`score-a-${m.id}`).value);
            const valB = parseInt(document.getElementById(`score-b-${m.id}`).value);
            const pitchVal = parseInt(document.getElementById(`terrain-${m.id}`).value);
            
            if (isNaN(valA) || isNaN(valB)) {
              hasErrors = true;
              return;
            }
            
            m.scoreA = valA;
            m.scoreB = valB;
            if (!isNaN(pitchVal)) {
              m.terrain = pitchVal;
            }
            m.status = 'Completed';
          });
          
          if (hasErrors) {
            showToast("Wprowadź poprawne wyniki dla wszystkich meczów!", "error");
            return;
          }
          
          db.updateTournament(t);
          showToast("Wyniki i tory rundy zapisane!");
          drawTabContent();
        });
        
        // Next round generation
        document.getElementById('btn-next-round')?.addEventListener('click', () => {
          const nextR = activeRound + 1;
          const { pairings, byeTeamId } = swiss.generateNextRoundPairings(t, nextR);
          
          // Add pairings as matches
          pairings.forEach((p, idx) => {
            t.matches.push({
              id: `m-${t.id}-${nextR}-${idx}`,
              round: nextR,
              teamAId: p.teamAId,
              teamBId: p.teamBId,
              terrain: idx + 1,
              status: 'Pending'
            });
          });
          
          if (byeTeamId) {
            t.byes.push(byeTeamId);
          } else {
            // Push placeholder so indices match round numbers
            t.byes.push(null);
          }
          
          db.updateTournament(t);
          showToast(`Wygenerowano parowania dla rundy ${nextR}!`);
          drawTabContent();
        });
        
        // Finalize Tournament
        document.getElementById('btn-finalize-tournament')?.addEventListener('click', () => {
          // Generowanie ostatecznej tabeli na podstawie wyników
          t.standings = swiss.calculateStandings(t);
          db.updateTournament(t);
          
          try {
            // Uruchomienie transakcyjnego przeliczenia rankingu
            db.simulateRankingsUpdate(t.id);
            
            // Pobierz zaktualizowany obiekt turnieju, bo db.simulate go zmieniło (status)
            t = db.getTournament(t.id);
            
            showToast("Turniej zakończony! Punktacja rozdzielona i Rankingi zaktualizowane.");
            drawTabContent();
          } catch(err) {
            showToast("Błąd przy zamykaniu turnieju: " + err.message, "error");
            console.error(err);
          }
        });
      }
    }
  }
  
  function startTournamentGameplay() {
    if (t.teams.length < 3) return;
    
    t.status = 'Ongoing';
    // Generate Round 1 pairings
    const { pairings, byeTeamId } = swiss.generateNextRoundPairings(t, 1);
    
    // Create match objects
    pairings.forEach((p, idx) => {
      t.matches.push({
        id: `m-${t.id}-1-${idx}`,
        round: 1,
        teamAId: p.teamAId,
        teamBId: p.teamBId,
        terrain: idx + 1,
        status: 'Pending'
      });
    });
    
    // Add bye
    t.byes = [byeTeamId];
    
    db.updateTournament(t);
    showToast("Turniej rozpoczęty! Runda 1 wygenerowana.");
    activeTab = 'controls';
    renderWrapper(); // Refresh sidebar/topbar
    renderTournamentManage(id); // Reload view
  }
  
  area.innerHTML = `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Menedżer turnieju: ${t.name}</h1>
        <p>Panel Sędziego Głównego PFP · Status: <strong>${t.status === 'Completed' ? 'Zakończony' : t.status === 'Ongoing' ? 'Trwa' : 'Zapisy'}</strong></p>
      </div>
      <div style="display:flex; gap:12px;">
        <a href="#/tournament/${t.id}" class="btn-secondary">Podgląd Publiczny</a>
        <a href="#/tournaments" class="btn-secondary">&larr; Lista</a>
      </div>
    </div>
    
    <div class="tabs-container">
      <button class="tab-btn ${activeTab === 'teams' ? 'active' : ''}" id="tab-man-teams">Uczestnicy i Zgłoszenia (${t.teams.length})</button>
      <button class="tab-btn ${activeTab === 'controls' ? 'active' : ''}" id="tab-man-controls">Zarządzanie i Wyniki</button>
    </div>
    
    <div id="tour-manage-tab-content">
      <!-- Injected by drawTabContent() -->
    </div>
  `;
  
  document.getElementById('tab-man-teams').addEventListener('click', (e) => {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    activeTab = 'teams';
    drawTabContent();
  });
  
  document.getElementById('tab-man-controls').addEventListener('click', (e) => {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    activeTab = 'controls';
    drawTabContent();
  });
  
  drawTabContent();
}

