export const config = { runtime: 'edge' };

export default async function handler() {
  const body = {
    updated: new Date().toISOString(),
    upcoming: [
      { date: "2025-08-15T14:00:00+10:00", grade: "U15 Div 1", homeTeam: "Dudley Redhead", awayTeam: "South Newcastle", venue: "John Balcomb Field", source: "placeholder" }
    ],
    results: [
      // Minis/Mods (U6–U12) would have scoreHome/scoreAway omitted later
      { date: "2025-08-09T10:00:00+10:00", grade: "U13 Div 2", homeTeam: "Macquarie", awayTeam: "Dudley Redhead", scoreHome: 12, scoreAway: 18, status: "FT", source: "placeholder" }
    ]
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { "content-type": "application/json" } });
}

