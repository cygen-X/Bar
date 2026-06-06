// Vercel serverless function: POST /api/generate  { event: "..." }  ->  campaign JSON
// Works out of the box: with no API key it returns a canned sample so the demo never breaks.
// Add an ANTHROPIC_API_KEY env var in Vercel to make it generate live.

const SAMPLE = {
  subject_it: "Venerdì il jazz prende il Cabaret",
  email_it: "Caro socio, venerdì il salotto si accende: un trio jazz dal vivo, luci basse e i nostri cocktail d'autore. Una di quelle serate in cui Monti somiglia ancora alla Parigi degli anni Venti. I posti sono pochi — prenota il tuo tavolo. Ti aspettiamo dalle 21:30, in Via Panisperna 87.",
  subject_en: "Friday, jazz takes over the Cabaret",
  email_en: "Dear member, on Friday the salon comes alive: a live jazz trio, low light and our signature cocktails — one of those nights when Monti still feels like 1920s Paris. Seats are few, so reserve your table. Doors from 9:30pm, Via Panisperna 87.",
  instagram_caption: "Venerdì il silenzio non è ammesso. 🎷 Trio jazz dal vivo, cocktail d'autore, posti limitati. Prenota il tuo tavolo. #cabaretvoltaireroma #monti #jazzroma #livemusic #aperitivoroma #roma",
  tiktok_hook: "Primo piano sullo shaker, taglio netto sul contrabbasso, testo a schermo: «Il venerdì ha un suono». 9 secondi, in loop.",
  whatsapp: "🎷 Venerdì jazz dal vivo al Cabaret, posti limitati. Prenota il tuo tavolo: rispondi a questo messaggio.",
  banner_headline: "Jazz al Cabaret",
  banner_sub: "Live trio · posti limitati",
  banner_date: "VEN · 21:30",
  best_send: "Mercoledì 18:30",
  segment: "Musica",
};

const SYS = `You are the marketing engine for "Cabaret Voltaire Roma", an art-and-drink club, cocktail & wine bar and cultural association in Rione Monti, Rome — Via Panisperna 87. Open 18:00-01:00, closed Mondays, English-spoken. Audience: curious locals, artists, students, travelers; intimate Dada-inspired salon. Voice: literary, warm, avant-garde.
Given an event, return ONLY JSON with keys: subject_it, email_it (55-85 words, with date/time + one CTA), subject_en, email_en (45-70 words), instagram_caption (with 4-6 hashtags), tiktok_hook (1-2 lines, Italian), whatsapp (1-2 sentences Italian, 1-2 emojis), banner_headline (2-3 words Italian), banner_sub (max 5 words), banner_date (e.g. "VEN · 21:30"), best_send (e.g. "Mercoledì 18:30"), segment (one of: Poesia, Musica, Open Mic, Arte, Degustazioni, Tutti). Valid JSON only.`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const event = (body && body.event) || "";
  const key = process.env.ANTHROPIC_API_KEY;

  // No key configured (or empty input) -> serve the canned sample so the demo always works.
  if (!key || !event) {
    res.status(200).json(SAMPLE);
    return;
  }

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: process.env.MODEL || "claude-haiku-4-5-20251001",
        max_tokens: 1000,
        messages: [{ role: "user", content: SYS + "\n\nEVENT:\n" + event }],
      }),
    });
    const data = await r.json();
    const txt = (data.content || []).map((x) => (x.type === "text" ? x.text : "")).join("").trim();
    const parsed = JSON.parse(txt.replace(/```json/g, "").replace(/```/g, "").trim());
    res.status(200).json(parsed);
  } catch (e) {
    res.status(200).json(SAMPLE);
  }
}

/*
  To use OpenRouter (cheaper models) instead of Anthropic:
  - set env OPENROUTER_API_KEY and MODEL (e.g. "deepseek/deepseek-chat" or "google/gemini-2.0-flash-001")
  - replace the fetch above with:

    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: { "content-type": "application/json", "authorization": "Bearer " + process.env.OPENROUTER_API_KEY },
      body: JSON.stringify({ model: process.env.MODEL, messages: [{ role: "user", content: SYS + "\n\nEVENT:\n" + event }] }),
    });
    const data = await r.json();
    const txt = data.choices?.[0]?.message?.content || "";
*/
