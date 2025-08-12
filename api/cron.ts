
export const config = { runtime: 'edge' };

export default async function handler() {
  // later this will call the scraper and update a cache/kv
  return new Response(JSON.stringify({ ok: true, ranAt: new Date().toISOString() }), {
    headers: { "content-type": "application/json" }
  });
}
