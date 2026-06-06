# Maître × Cabaret Voltaire — demo site

One site, one URL, to show the client:
- `/` — hub linking to everything
- the interactive demo (member sign-up, Telegram bot, live Maître generator)
- `/pitch.html` — Basic & Pro, pricing, hiring comparison
- `/proposta.html` — bilingual proposal
- `/email.html` — sample event email

## Deploy to Vercel — fastest path (CLI)

```bash
# 1. unzip and enter the folder
cd maitre-site

# 2. install dependencies
npm install

# 3. install the Vercel CLI (once) and deploy
npm i -g vercel
vercel            # answer the prompts; gives a preview URL
vercel --prod     # publishes the shareable production URL
```

## Deploy to Vercel — via GitHub (no CLI)

1. Push this folder to a new GitHub repo.
2. Go to vercel.com → **New Project** → import the repo.
3. Vercel auto-detects **Vite** — leave the defaults, click **Deploy**.

## Make the live "Il Maître" generation real

Out of the box, the generator returns a polished **canned sample**, so the demo
never looks broken. To make it generate live, add an environment variable in
Vercel (Project → Settings → Environment Variables), then redeploy:

```
ANTHROPIC_API_KEY = sk-ant-...        # your key
MODEL = claude-haiku-4-5-20251001     # optional; cheap + good enough
```

Prefer OpenRouter / a cheaper model? See the commented block at the bottom of
`api/generate.js`.

## Local development

```bash
npm run dev          # frontend only; the generator falls back to the sample
# or, to test the /api function locally:
vercel dev
```
