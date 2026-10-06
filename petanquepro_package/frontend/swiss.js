// PFP Pétanque App - Swiss System Pairings & Standings Calculation Algorithms

/**
 * Calculates current tournament standings based on completed matches.
 * Tiebreakers:
 * 1. Wins (Punkty meczowe)
 * 2. Buchholz (Suma wygranych przeciwników)
 * 3. Fine Buchholz (Suma punktów Buchholza przeciwników)
 * 4. Small Points Difference (Różnica małych punktów)
 * 5. Small Points Scored (Zdobyte małe punkty)
 */
export function calculateStandings(tournament) {
  const { teams, matches, byes } = tournament;
  
  if (!teams || teams.length === 0) return [];
  
  // Initialize standings map for each team
  const standingsMap = {};
  teams.forEach(t => {
    standingsMap[t.id] = {
      teamId: t.id,
      name: t.name,
      wins: 0,
      buchholz: 0,
      fineBuchholz: 0,
      diff: 0,
      scored: 0,
      opponents: [], // Track list of opponent team IDs
      hadBye: false
    };
  });
  
  // Process all completed matches
  matches.forEach(m => {
    if (m.status !== "Completed") return;
    
    const tA = standingsMap[m.teamAId];
    const tB = standingsMap[m.teamBId];
    
    if (!tA || !tB) return;
    
    tA.opponents.push(m.teamBId);
    tB.opponents.push(m.teamAId);
    
    tA.scored += m.scoreA;
    tA.diff += (m.scoreA - m.scoreB);
    
    tB.scored += m.scoreB;
    tB.diff += (m.scoreB - m.scoreA);
    
    if (m.scoreA > m.scoreB) {
      tA.wins += 1;
    } else if (m.scoreB > m.scoreA) {
      tB.wins += 1;
    } else {
      // In case of a draw (rare in petanque, usually played until 13, but handle just in case)
      tA.wins += 0.5;
      tB.wins += 0.5;
    }
  });
  
  // Process byes (wolny los)
  if (byes && byes.length > 0) {
    byes.forEach(byeTeamId => {
      const team = standingsMap[byeTeamId];
      if (team) {
        team.wins += 1;
        team.scored += 13;
        team.diff += 13;
        team.hadBye = true;
      }
    });
  }
  
  const standingsList = Object.values(standingsMap);
  
  // Calculate Buchholz score (sum of opponent wins)
  standingsList.forEach(team => {
    let opponentWinsSum = 0;
    team.opponents.forEach(oppId => {
      const opp = standingsMap[oppId];
      if (opp) {
        opponentWinsSum += opp.wins;
      }
    });
    // For byes, FIPJP rules suggest adding a virtual opponent with wins equal to the team's own wins
    // or simply average tournament wins. We will add a virtual opponent with half the tournament rounds
    // to keep it balanced, or just use actual opponents. Let's add team's own wins for each bye round.
    if (team.hadBye) {
      opponentWinsSum += team.wins;
    }
    team.buchholz = opponentWinsSum;
  });
  
  // Calculate Fine Buchholz score (sum of opponent Buchholz scores)
  standingsList.forEach(team => {
    let opponentBuchholzSum = 0;
    team.opponents.forEach(oppId => {
      const opp = standingsMap[oppId];
      if (opp) {
        opponentBuchholzSum += opp.buchholz;
      }
    });
    if (team.hadBye) {
      opponentBuchholzSum += team.buchholz;
    }
    team.fineBuchholz = opponentBuchholzSum;
  });
  
  // Sort standings based on tiebreakers
  standingsList.sort((a, b) => {
    if (b.wins !== a.wins) return b.wins - a.wins;
    if (b.buchholz !== a.buchholz) return b.buchholz - a.buchholz;
    if (b.fineBuchholz !== a.fineBuchholz) return b.fineBuchholz - a.fineBuchholz;
    if (b.diff !== a.diff) return b.diff - a.diff;
    return b.scored - a.scored;
  });
  
  return standingsList;
}

/**
 * Generates match pairings for the next round of the tournament.
 * Prevents repeating pairings.
 * Returns { pairings: [{ teamAId, teamBId }], byeTeamId: string | null }
 */
export function generateNextRoundPairings(tournament, targetRound) {
  const { teams, matches, byes } = tournament;
  
  if (!teams || teams.length === 0) return { pairings: [], byeTeamId: null };
  
  // Compute standings up to now
  const standings = calculateStandings(tournament);
  
  // Map of who played whom
  const history = {};
  teams.forEach(t => history[t.id] = new Set());
  
  matches.forEach(m => {
    if (m.round < targetRound) {
      history[m.teamAId].add(m.teamBId);
      history[m.teamBId].add(m.teamAId);
    }
  });
  
  // Identify teams that already had a bye
  const teamsWithByes = new Set();
  // Find which team was a bye in each previous round.
  // In our model, a bye is stored round-by-round. Let's index byes by round.
  // We can scan matches and standings to see who got a bye.
  // Actually, we can check how many byes each team had.
  if (byes && byes.length > 0) {
    byes.forEach(bId => teamsWithByes.add(bId));
  }
  
  let pairingTeams = [...standings]; // Sorted by current standing
  let byeTeamId = null;
  
  // If odd number of teams, choose a bye team first
  if (pairingTeams.length % 2 !== 0) {
    // FIPJP rules: Bye is given to the team at the bottom of the standings
    // that has not yet had a bye.
    for (let i = pairingTeams.length - 1; i >= 0; i--) {
      const teamId = pairingTeams[i].teamId;
      if (!teamsWithByes.has(teamId)) {
        byeTeamId = teamId;
        // Remove bye team from matching pool
        pairingTeams.splice(i, 1);
        break;
      }
    }
    
    // If all remaining teams already had a bye (extremely rare/impossible in standard round counts),
    // just give it to the bottom team.
    if (!byeTeamId) {
      const bottomTeam = pairingTeams.pop();
      byeTeamId = bottomTeam.teamId;
    }
  }
  
  // Generate pairings using a backtracking matching solver
  const pairings = [];
  const visited = new Set();
  
  function solve(index) {
    if (index >= pairingTeams.length) return true;
    
    const teamA = pairingTeams[index];
    if (visited.has(teamA.teamId)) {
      return solve(index + 1);
    }
    
    // Try to pair teamA with another teamB further down in standings
    for (let j = index + 1; j < pairingTeams.length; j++) {
      const teamB = pairingTeams[j];
      
      if (!visited.has(teamB.teamId) && !history[teamA.teamId].has(teamB.teamId)) {
        // Valid pairing
        visited.add(teamA.teamId);
        visited.add(teamB.teamId);
        pairings.push({ teamAId: teamA.teamId, teamBId: teamB.teamId });
        
        if (solve(index + 1)) {
          return true;
        }
        
        // Backtrack
        visited.delete(teamA.teamId);
        visited.delete(teamB.teamId);
        pairings.pop();
      }
    }
    
    return false;
  }
  
  const success = solve(0);
  
  if (!success) {
    // If backtracking solver fails due to tight constraints, fall back to a greedy approach that ignores history
    // (This is a safety valve so the app never crashes or hangs).
    console.warn("Backtracking pairing failed. Falling back to greedy pairing.");
    const fallbackPairings = [];
    const pool = [...pairingTeams];
    
    while (pool.length >= 2) {
      const teamA = pool.shift();
      // Find the first team that they haven't played, or just the next team
      let matchIdx = pool.findIndex(t => !history[teamA.teamId].has(t.teamId));
      if (matchIdx === -1) matchIdx = 0; // force pairing
      const teamB = pool.splice(matchIdx, 1)[0];
      fallbackPairings.push({ teamAId: teamA.teamId, teamBId: teamB.teamId });
    }
    
    return { pairings: fallbackPairings, byeTeamId };
  }
  
  return { pairings, byeTeamId };
}
