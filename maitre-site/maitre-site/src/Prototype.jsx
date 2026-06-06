import React, { useState } from "react";
import {
  Sparkles, Send, Copy, Check, Mail, Instagram, MessageCircle, Video, Clock,
  Users, ArrowRight, Wine, Heart, Music, Mic, Palette, BookOpen, Brain,
  Loader2, ChevronRight, Image as ImageIcon, Phone, Globe, PartyPopper
} from "lucide-react";

const STYLE = `
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;0,6..96,700;1,6..96,500&family=Hanken+Grotesk:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap');
:root{--ink:#100b0d;--ink2:#1a1113;--oxblood:#3b0e15;--oxblood2:#561620;--paper:#ece1cd;--paper-dim:#b7a98f;--gold:#caa24b;--gold-soft:#e2c785;--verm:#d6432c;--line:rgba(202,162,75,.28);}
*{box-sizing:border-box}
.mv-root{font-family:'Hanken Grotesk',sans-serif;color:var(--paper);min-height:100%;position:relative;overflow-x:hidden;
  background:radial-gradient(120% 80% at 80% -10%,rgba(86,22,32,.55),transparent 55%),radial-gradient(90% 70% at 0% 110%,rgba(202,162,75,.10),transparent 50%),var(--ink);}
.mv-root::before{content:"";position:fixed;inset:0;pointer-events:none;z-index:0;opacity:.05;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}
.mv-d{font-family:'Bodoni Moda',serif;}
.mv-m{font-family:'JetBrains Mono',monospace;}
.mv-wrap{position:relative;z-index:1;max-width:980px;margin:0 auto;padding:0 22px 80px;}
.mv-top{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:20px 0 16px;border-bottom:1px solid var(--line);position:sticky;top:0;background:linear-gradient(var(--ink),rgba(16,11,13,.86));backdrop-filter:blur(6px);z-index:5;flex-wrap:wrap;}
.mv-brand{display:flex;align-items:center;gap:11px;}
.mv-seal{width:34px;height:34px;border:1.5px solid var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--gold);transform:rotate(-8deg);}
.mv-kick{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.32em;text-transform:uppercase;color:var(--gold);}
.mv-tabs{display:flex;gap:4px;flex-wrap:wrap;}
.mv-tab{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;padding:8px 12px;border:1px solid transparent;border-radius:999px;color:var(--paper-dim);background:none;cursor:pointer;transition:.25s;}
.mv-tab:hover{color:var(--paper);}.mv-tab.on{color:var(--ink);background:var(--gold);border-color:var(--gold);}
.mv-lang{display:flex;gap:3px;border:1px solid var(--line);border-radius:999px;padding:3px;}
.mv-lang button{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.1em;padding:5px 9px;border-radius:999px;border:none;background:none;color:var(--paper-dim);cursor:pointer;}
.mv-lang button.on{background:var(--gold);color:var(--ink);}
.mv-eyebrow{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);margin-bottom:16px;}
.mv-h1{font-family:'Bodoni Moda',serif;font-weight:500;font-size:clamp(36px,6.2vw,64px);line-height:1.02;letter-spacing:-.01em;margin:0 0 18px;}
.mv-h1 em{font-style:italic;color:var(--gold-soft);}
.mv-lead{font-size:clamp(16px,2.2vw,19px);line-height:1.55;color:var(--paper-dim);max-width:62ch;}
.mv-btn{font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;display:inline-flex;align-items:center;gap:9px;padding:14px 22px;border-radius:999px;border:none;cursor:pointer;transition:.25s;}
.mv-gold{background:var(--gold);color:var(--ink);}.mv-gold:hover{background:var(--gold-soft);transform:translateY(-1px);}
.mv-ghost{background:transparent;color:var(--paper);border:1px solid var(--line);}.mv-ghost:hover{border-color:var(--gold);color:var(--gold);}
.mv-btn:disabled{opacity:.45;cursor:not-allowed;transform:none;}
.mv-card{background:linear-gradient(180deg,rgba(255,247,233,.05),rgba(255,247,233,.02));border:1px solid var(--line);border-radius:16px;padding:22px;}
.mv-fade{animation:fade .55s ease both;}
@keyframes fade{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.mv-d1{animation-delay:.05s}.mv-d2{animation-delay:.13s}.mv-d3{animation-delay:.21s}.mv-d4{animation-delay:.29s}
.mv-pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:40px;}
@media(max-width:720px){.mv-pillars{grid-template-columns:1fr}}
.mv-pill{padding:22px;border:1px solid var(--line);border-radius:14px;background:rgba(255,247,233,.03);position:relative;overflow:hidden;}
.mv-pill .n{font-family:'Bodoni Moda',serif;font-size:38px;color:var(--oxblood2);line-height:1;position:absolute;right:14px;top:8px;opacity:.7;}
.mv-pill h3{font-family:'Bodoni Moda',serif;font-weight:500;font-size:21px;margin:10px 0 7px;}
.mv-pill p{color:var(--paper-dim);font-size:14px;line-height:1.5;margin:0;}
.mv-label{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:9px;}
.mv-input{width:100%;background:rgba(0,0,0,.25);border:1px solid var(--line);border-radius:11px;padding:14px 16px;color:var(--paper);font-family:'Hanken Grotesk',sans-serif;font-size:16px;outline:none;transition:.2s;}
.mv-input:focus{border-color:var(--gold);}.mv-input::placeholder{color:rgba(183,169,143,.55);}
.mv-chips{display:flex;flex-wrap:wrap;gap:9px;}
.mv-chip{display:inline-flex;align-items:center;gap:7px;padding:10px 14px;border-radius:999px;border:1px solid var(--line);background:rgba(0,0,0,.2);color:var(--paper-dim);font-size:13.5px;cursor:pointer;transition:.2s;font-family:'Hanken Grotesk',sans-serif;}
.mv-chip:hover{border-color:var(--gold-soft);color:var(--paper);}.mv-chip.on{background:var(--oxblood);border-color:var(--gold);color:var(--gold-soft);}
.mv-consent{display:flex;gap:11px;align-items:flex-start;font-size:13px;color:var(--paper-dim);line-height:1.5;cursor:pointer;}
.mv-check{flex:0 0 20px;width:20px;height:20px;border:1px solid var(--gold);border-radius:5px;display:flex;align-items:center;justify-content:center;margin-top:1px;transition:.2s;}
.mv-check.on{background:var(--gold);color:var(--ink);}
.mv-prog{display:flex;gap:5px;margin-bottom:22px;}
.mv-dot{height:3px;flex:1;background:rgba(202,162,75,.2);border-radius:2px;overflow:hidden;}
.mv-dot i{display:block;height:100%;width:0;background:var(--gold);transition:.4s;}.mv-dot.on i{width:100%;}
/* tessera */
.tessera{border:1px solid var(--gold);border-radius:16px;padding:18px;margin-bottom:20px;position:relative;overflow:hidden;
  background:linear-gradient(135deg,rgba(86,22,32,.6),rgba(16,11,13,.9));box-shadow:0 18px 40px rgba(0,0,0,.4);}
.tessera::after{content:"";position:absolute;right:-30px;top:-30px;width:120px;height:120px;border:1px solid var(--line);border-radius:50%;opacity:.4;}
.tessera .wm{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.26em;color:var(--gold);}
.tessera .role{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:.2em;color:var(--paper-dim);margin-top:2px;}
.tessera .nm{font-family:'Bodoni Moda',serif;font-style:italic;font-size:26px;color:var(--paper);margin:14px 0 4px;min-height:32px;}
.tessera .meta{display:flex;gap:14px;font-size:11px;color:var(--gold-soft);font-family:'JetBrains Mono',monospace;}
.tessera .stamps{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px;}
.tessera .stamp{font-size:10px;border:1px solid var(--line);border-radius:6px;padding:4px 8px;color:var(--gold-soft);animation:pop .3s ease;}
@keyframes pop{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}
.mv-row{display:flex;gap:11px;align-items:flex-start;font-size:14.5px;color:#d8cdb6;line-height:1.5;}
/* phone chat */
.mv-phone{max-width:420px;margin:0 auto;border:1px solid var(--line);border-radius:26px;overflow:hidden;background:#0c0809;box-shadow:0 30px 80px rgba(0,0,0,.5);}
.mv-pbar{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid var(--line);background:rgba(59,14,21,.5);}
.mv-pav{width:34px;height:34px;border-radius:50%;background:var(--gold);color:var(--ink);display:flex;align-items:center;justify-content:center;}
.mv-chatw{padding:16px;display:flex;flex-direction:column;gap:10px;min-height:280px;}
.mv-bub{max-width:84%;padding:11px 14px;border-radius:15px;font-size:14px;line-height:1.45;}
.mv-bot{align-self:flex-start;background:rgba(255,247,233,.07);border:1px solid var(--line);border-bottom-left-radius:5px;}
.mv-me{align-self:flex-end;background:var(--gold);color:var(--ink);border-bottom-right-radius:5px;}
.mv-typ{display:inline-flex;gap:4px;}.mv-typ i{width:6px;height:6px;border-radius:50%;background:var(--gold);animation:bl 1.2s infinite;}
.mv-typ i:nth-child(2){animation-delay:.2s}.mv-typ i:nth-child(3){animation-delay:.4s}
@keyframes bl{0%,60%,100%{opacity:.25}30%{opacity:1}}
.mv-ex{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:24px;}
@media(max-width:720px){.mv-ex{grid-template-columns:1fr}}
.mv-exc{border:1px solid var(--line);border-radius:13px;padding:15px 16px;background:rgba(0,0,0,.18);}
.mv-exq{font-size:13.5px;color:var(--gold-soft);font-style:italic;margin-bottom:7px;}
.mv-exa{font-size:13.5px;color:#d8cdb6;line-height:1.5;}.mv-exa b{color:var(--gold-soft);font-weight:600;}
.mv-out{display:grid;gap:13px;margin-top:8px;}
.mv-oc{border:1px solid var(--line);border-radius:13px;padding:17px 18px;background:rgba(255,247,233,.03);}
.mv-och{display:flex;align-items:center;gap:9px;margin-bottom:11px;}
.mv-och .t{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);}
.mv-cpy{margin-left:auto;background:none;border:1px solid var(--line);border-radius:7px;color:var(--paper-dim);cursor:pointer;padding:5px 7px;display:flex;align-items:center;gap:5px;font-size:10px;font-family:'JetBrains Mono',monospace;}
.mv-subj{font-family:'Bodoni Moda',serif;font-size:17px;margin:0 0 6px;}
.mv-body{font-size:14.5px;line-height:1.55;color:#d8cdb6;white-space:pre-wrap;margin:0;}
.mv-meta{display:flex;flex-wrap:wrap;gap:10px;}
.mv-tag{font-family:'JetBrains Mono',monospace;font-size:11px;display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border-radius:999px;border:1px solid var(--line);color:var(--gold-soft);background:rgba(0,0,0,.2);}
.mv-spin{animation:spin 1s linear infinite;}@keyframes spin{to{transform:rotate(360deg)}}
.mv-foot{margin-top:46px;padding-top:20px;border-top:1px solid var(--line);font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.1em;color:var(--paper-dim);}
`;

const INTERESTS = [
  { id: "poesia", icon: BookOpen, it: "Poesia & Reading", en: "Poetry & Reading" },
  { id: "musica", icon: Music, it: "Musica dal vivo", en: "Live music" },
  { id: "openmic", icon: Mic, it: "Open Mic", en: "Open Mic" },
  { id: "arte", icon: Palette, it: "Arte & Mostre", en: "Art & Exhibitions" },
  { id: "degust", icon: Wine, it: "Degustazioni", en: "Tastings" },
  { id: "filo", icon: Brain, it: "Dialoghi & Filosofia", en: "Talks & Philosophy" },
];

const L = {
  it: {
    nav: ["Manifesto", "Il Salotto", "Il Bot", "Il Maître"],
    man: {
      eye: "Art & Drink Club · Dada 1916 → Monti 2026",
      h: ["Voi pensate all'", "evento", ".", "Al resto pensa il ", "Maître", "."],
      lead: "Scrivete l'evento una volta a un bot su Telegram, e l'agente prepara email, post, locandina e messaggi pronti da approvare con un tap. La vostra lista soci diventa un pubblico che torna.",
      c1: "Vedi il bot in azione", c2: "Prova il Maître dal vivo",
      pills: [["I", "Capture", "Un modulo soci elegante raccoglie contatto, gusti e compleanno. Ogni firma è consenso GDPR pulito."],
        ["II", "Compose", "Scrivete l'evento al bot. L'agente redige email IT/EN, caption, hook, locandina e WhatsApp sul vostro tono."],
        ["III", "Convert", "Invii segmentati, promemoria che riducono i no-show, calice in omaggio nel mese del compleanno."]],
    },
    sal: {
      eye: "Il Salotto · entra nel circolo",
      role: "Tessera Socio", member: "Socio No. 0412", since: "dal 2026",
      placeName: "il tuo nome", langLab: "Lingua", noName: "Nuovo socio",
      steps: {
        intro: ["Un calice di benvenuto ti aspetta 🍷", "Entra nel circolo del Cabaret Voltaire. Costruiamo insieme la tua tessera — una domanda alla volta.", "Inizia"],
        name: ["Come ti chiami?", "Nome e cognome"],
        contact: ["Come ti raggiungiamo?", "La tua email", "Telefono (facoltativo)"],
        bday: ["Quando festeggi?", "Per offrirti un calice nel mese del compleanno 🎂", "In che lingua preferisci gli inviti?"],
        interests: ["Cosa ti porta al Cabaret?", "Scegli tutto ciò che ami — riceverai solo questi inviti."],
        source: ["Come ci hai conosciuto?", ["Instagram", "Passando per Monti", "Un amico", "A un evento"]],
        consent: ["Ultimo passo", "Acconsento a ricevere gli inviti agli eventi e ho letto l'informativa privacy. Disiscrizione in un tap (double opt-in)."],
      },
      next: "Avanti", back: "Indietro", join: "Entra nel circolo", skip: "Salta",
      done: ["Benvenuto nel circolo,", "Mostra questa tessera al banco per il tuo calice di benvenuto."],
      doneRows: ["Email di benvenuto inviata", "Aggiunto ai segmenti:", "Calice in omaggio a", "Inviti solo per ciò che ami — mai spam"],
      restart: "Ricomincia la demo", none: "Tutti",
    },
    bot: {
      eye: "Il Bot · l'unica cosa che il locale tocca",
      lead: "Stesso bot su telefono, desktop e web.telegram.org. Il proprietario scrive, sceglie i canali, approva.",
      hi: "Ciao! Scrivimi l'evento e preparo tutto. 🎭",
      sendEx: "Invia evento di esempio",
      msg: "Venerdì 21:30 — live jazz trio, posti limitati, cocktail d'autore. Ingresso con tessera.",
      ready: "BOZZA PRONTA ✓", draftTitle: "“Venerdì il jazz prende il Cabaret”",
      draftLine: "Email IT/EN ✓ · caption ✓ · hook reel ✓ · locandina ✓ · WhatsApp ✓",
      chooseCh: "Scegli i canali", approve: "Approva e invia",
      sent: "Fatto. ✦", sentLine: "Inviato su:", reach: { email: "312 via email", whatsapp: "188 via WhatsApp", instagram: "post + storia IG" },
      reminder: "Promemoria automatico 3 ore prima.", restart: "Riavvia demo",
      proTitle: "Versione Pro · chiedi qualsiasi cosa", proSub: "Esempi reali di conversazione con il bot intelligente.",
      ex: [
        ["Invita al jazz di venerdì i soci 20–32 che amano la musica dal vivo.", "Trovati <b>84 soci</b>. Preparo l'invito su email + WhatsApp? <b>[Sì] [Modifica]</b>"],
        ["Il martedì è sempre vuoto. Idee?", "Proverei un Open Mic ricorrente + calice scontato per studenti, con invito mirato ai soci entro 1 km."],
        ["Com'è andato l'evento poesia del mese scorso?", "<b>42 presenze</b>, +18% sulla media. Il segmento Poesia ha aperto al 61%."],
        ["Dammi un'idea per il reel di venerdì.", "Primo piano sullo shaker, taglio sul contrabbasso, testo: «Il venerdì ha un suono». 9 secondi."],
        ["Quanti soci non vengono da due mesi?", "<b>61 soci</b> inattivi. Lancio una campagna “ci manchi” con un calice omaggio?"],
        ["Domani pioggia e sala mezza vuota.", "Proposta last-minute: «Aperitivo del temporale, 2x1 fino alle 21» a chi è entro 1 km. Procedo?"],
      ],
    },
    mai: {
      eye: "Il Maître · da una frase a una campagna",
      h: "Scrivi l'evento come lo manderesti al bot.",
      lead: "Una riga in italiano o inglese. L'agente prepara email, social, locandina e messaggi.",
      ph: "Es. Giovedì 20:00 — serata poesia bilingue, letture aperte, calice incluso…",
      gen: "Genera la campagna", working: "L'agente compone…",
      err: "L'agente non è raggiungibile. Riprova tra poco.",
      send: "Invio consigliato:", seg: "Segmento:",
      cIt: "Email · Italiano", cEn: "Email · English", cIg: "Instagram", cTk: "Hook per Reel / TikTok", cWa: "WhatsApp broadcast", cBan: "Locandina (auto)",
      examples: [
        "Giovedì sera: serata poesia bilingue, letture aperte dal palco, calice di vino incluso, ore 20:00.",
        "Live jazz trio venerdì 21:30, posti limitati, cocktail d'autore, ingresso con tessera.",
        "Open mic del martedì — comici, musicisti, performer. Iscrizione dalle 20, show alle 21.",
      ],
    },
    foot: "MAÎTRE · sistema di crescita per locali indipendenti · No.87 Via Panisperna, Monti",
    loop: [["1 · Scrivi", "Mandi l'evento al bot."], ["2 · Compone", "Tutto pronto in 20 secondi."], ["3 · Approvi", "Scegli i canali e tocchi ✅."], ["4 · Parte", "Email, WhatsApp e post."]],
  },
  en: {
    nav: ["Manifesto", "The Salon", "The Bot", "The Maître"],
    man: {
      eye: "Art & Drink Club · Dada 1916 → Monti 2026",
      h: ["You think about the ", "event", ".", "The ", "Maître", " does the rest."],
      lead: "Text the event once to a Telegram bot, and the agent drafts email, posts, a poster and messages ready to approve with one tap. Your member list becomes an audience that returns.",
      c1: "See the bot in action", c2: "Try the Maître live",
      pills: [["I", "Capture", "An elegant member sign-up collects contact, tastes and birthday. Every entry is clean GDPR consent."],
        ["II", "Compose", "Text the event to the bot. The agent drafts IT/EN email, captions, hooks, a poster and WhatsApp in your voice."],
        ["III", "Convert", "Segmented sends, reminders that cut no-shows, a free glass in the guest's birthday month."]],
    },
    sal: {
      eye: "The Salon · join the circle",
      role: "Member Card", member: "Member No. 0412", since: "since 2026",
      placeName: "your name", langLab: "Language", noName: "New member",
      steps: {
        intro: ["A welcome drink awaits 🍷", "Join the Cabaret Voltaire circle. Let's build your card together — one question at a time.", "Begin"],
        name: ["What's your name?", "Full name"],
        contact: ["How do we reach you?", "Your email", "Phone (optional)"],
        bday: ["When do you celebrate?", "So we can offer a glass in your birthday month 🎂", "Which language for invites?"],
        interests: ["What brings you to the Cabaret?", "Pick everything you love — you'll only get those invites."],
        source: ["How did you find us?", ["Instagram", "Walking by in Monti", "A friend", "At an event"]],
        consent: ["Last step", "I agree to receive event invites and have read the privacy policy. Unsubscribe in one tap (double opt-in)."],
      },
      next: "Next", back: "Back", join: "Join the circle", skip: "Skip",
      done: ["Welcome to the circle,", "Show this card at the bar for your welcome drink."],
      doneRows: ["Welcome email sent", "Added to segments:", "Free glass in", "Invites only for what you love — never spam"],
      restart: "Restart demo", none: "All",
    },
    bot: {
      eye: "The Bot · the only thing the venue touches",
      lead: "Same bot on phone, desktop and web.telegram.org. The owner writes, picks channels, approves.",
      hi: "Hi! Text me the event and I'll prepare everything. 🎭",
      sendEx: "Send sample event",
      msg: "Friday 9:30pm — live jazz trio, limited seats, signature cocktails. Members only.",
      ready: "DRAFT READY ✓", draftTitle: "“Friday, jazz takes over the Cabaret”",
      draftLine: "IT/EN email ✓ · caption ✓ · reel hook ✓ · poster ✓ · WhatsApp ✓",
      chooseCh: "Choose channels", approve: "Approve & send",
      sent: "Done. ✦", sentLine: "Sent via:", reach: { email: "312 by email", whatsapp: "188 by WhatsApp", instagram: "IG post + story" },
      reminder: "Auto reminder 3 hours before.", restart: "Restart demo",
      proTitle: "Pro version · ask anything", proSub: "Real conversations with the smart bot.",
      ex: [
        ["Invite members 20–32 who love live music to Friday's jazz.", "Found <b>84 members</b>. Prep the invite over email + WhatsApp? <b>[Yes] [Edit]</b>"],
        ["Tuesdays are always empty. Ideas?", "I'd try a recurring Open Mic + student discount, with a targeted invite to members within 1 km."],
        ["How did last month's poetry night do?", "<b>42 attendees</b>, +18% vs average. The Poetry segment opened at 61%."],
        ["Give me an idea for Friday's reel.", "Close-up on the shaker, cut to the double bass, caption: 'Friday has a sound.' 9 seconds."],
        ["How many members haven't come in two months?", "<b>61 lapsed</b> members. Launch a 'we miss you' campaign with a free glass?"],
        ["Rain tomorrow and the room's half empty.", "Last-minute idea: 'Thunderstorm aperitivo, 2-for-1 till 9pm' to those within 1 km. Go?"],
      ],
    },
    mai: {
      eye: "The Maître · from one line to a campaign",
      h: "Write the event like you'd text the bot.",
      lead: "One line in Italian or English. The agent prepares email, social, a poster and messages.",
      ph: "e.g. Thursday 8pm — bilingual poetry night, open readings, glass of wine included…",
      gen: "Generate the campaign", working: "The agent is composing…",
      err: "The agent is unreachable. Try again shortly.",
      send: "Suggested send:", seg: "Segment:",
      cIt: "Email · Italian", cEn: "Email · English", cIg: "Instagram", cTk: "Reel / TikTok hook", cWa: "WhatsApp broadcast", cBan: "Poster (auto)",
      examples: [
        "Thursday evening: bilingual poetry night, open readings from the stage, glass of wine included, 8pm.",
        "Live jazz trio Friday 9:30pm, limited seats, signature cocktails, members only.",
        "Tuesday open mic — comedians, musicians, performers. Sign-up from 8, show at 9.",
      ],
    },
    foot: "MAÎTRE · growth system for independent venues · No.87 Via Panisperna, Monti",
    loop: [["1 · Write", "Text the event to the bot."], ["2 · Compose", "Everything ready in 20 seconds."], ["3 · Approve", "Pick channels and tap ✅."], ["4 · Send", "Email, WhatsApp and posts."]],
  },
};

export default function App() {
  const [lang, setLang] = useState("it");
  const [tab, setTab] = useState("manifesto");
  const t = L[lang];
  return (
    <div className="mv-root">
      <style>{STYLE}</style>
      <div className="mv-wrap">
        <div className="mv-top">
          <div className="mv-brand">
            <div className="mv-seal"><Wine size={17} /></div>
            <div><div className="mv-d" style={{ fontSize: 19, fontWeight: 600, lineHeight: 1 }}>Maître</div>
              <div className="mv-kick">per Cabaret Voltaire</div></div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <div className="mv-tabs">
              {t.nav.map((l, i) => { const id = ["manifesto", "salotto", "bot", "maitre"][i];
                return <button key={id} className={`mv-tab ${tab === id ? "on" : ""}`} onClick={() => setTab(id)}>{l}</button>; })}
            </div>
            <div className="mv-lang">
              <button className={lang === "it" ? "on" : ""} onClick={() => setLang("it")}>IT</button>
              <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
            </div>
          </div>
        </div>
        {tab === "manifesto" && <Manifesto t={t} go={setTab} />}
        {tab === "salotto" && <Salotto t={t} lang={lang} key={lang} />}
        {tab === "bot" && <BotDemo t={t} />}
        {tab === "maitre" && <Maitre t={t} lang={lang} />}
        <div className="mv-foot">{t.foot}</div>
      </div>
    </div>
  );
}

function Poster({ headline = "Evento", sub = "", date = "", small }) {
  const words = headline.toUpperCase().split(" ");
  let l1 = headline.toUpperCase(), l2 = "";
  if (l1.length > 13 && words.length > 1) { const m = Math.ceil(words.length / 2); l1 = words.slice(0, m).join(" "); l2 = words.slice(m).join(" "); }
  const W = 540, H = 675, fs = l2 ? 64 : (l1.length > 9 ? 70 : 92);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: small ? 230 : 320, display: "block", borderRadius: 10 }}>
      <defs><radialGradient id="vg" cx="30%" cy="18%" r="90%"><stop offset="0%" stopColor="#561620" /><stop offset="100%" stopColor="#16070a" /></radialGradient></defs>
      <rect width={W} height={H} fill="url(#vg)" />
      <rect x="22" y="22" width={W - 44} height={H - 44} fill="none" stroke="#caa24b" strokeWidth="1.5" opacity="0.8" />
      <text x="44" y="74" fill="#caa24b" fontFamily="'JetBrains Mono',monospace" fontSize="15" letterSpacing="5">CABARET VOLTAIRE</text>
      <text x="44" y="96" fill="#b7a98f" fontFamily="'JetBrains Mono',monospace" fontSize="12" letterSpacing="3">ART &amp; DRINK CLUB · MONTI</text>
      <g transform={`translate(44 ${l2 ? 300 : 330})`}>
        <text fill="#ece1cd" fontFamily="'Bodoni Moda',serif" fontWeight="600" fontSize={fs} fontStyle="italic">{l1}</text>
        {l2 && <text y={fs + 6} fill="#e2c785" fontFamily="'Bodoni Moda',serif" fontWeight="600" fontSize={fs} fontStyle="italic">{l2}</text>}
      </g>
      <text x="44" y={H - 120} fill="#b7a98f" fontFamily="'Hanken Grotesk',sans-serif" fontSize="22">{sub}</text>
      <line x1="44" y1={H - 96} x2={W - 44} y2={H - 96} stroke="#caa24b" strokeWidth="1" opacity="0.4" />
      <text x="44" y={H - 56} fill="#caa24b" fontFamily="'JetBrains Mono',monospace" fontSize="22" letterSpacing="3">{(date || "").toUpperCase()}</text>
      <text x={W - 44} y={H - 56} textAnchor="end" fill="#b7a98f" fontFamily="'JetBrains Mono',monospace" fontSize="13">VIA PANISPERNA 87</text>
    </svg>
  );
}

function Manifesto({ t, go }) {
  const m = t.man;
  return (
    <div style={{ paddingTop: 54 }}>
      <div className="mv-eyebrow mv-fade mv-d1">{m.eye}</div>
      <h1 className="mv-h1 mv-fade mv-d2">{m.h[0]}<em>{m.h[1]}</em>{m.h[2]}<br />{m.h[3]}<em>{m.h[4]}</em>{m.h[5]}</h1>
      <p className="mv-lead mv-fade mv-d3">{m.lead}</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }} className="mv-fade mv-d4">
        <button className="mv-btn mv-gold" onClick={() => go("bot")}><MessageCircle size={15} /> {m.c1}</button>
        <button className="mv-btn mv-ghost" onClick={() => go("maitre")}><Sparkles size={15} /> {m.c2}</button>
      </div>
      <div className="mv-pillars">
        {m.pills.map((p, i) => (
          <div className={`mv-pill mv-fade mv-d${i + 2}`} key={i}><span className="n">{p[0]}</span>
            {[Users, Sparkles, Heart][i] && React.createElement([Users, Sparkles, Heart][i], { size: 20, color: "var(--gold)" })}
            <h3>{p[1]}</h3><p>{p[2]}</p></div>
        ))}
      </div>
      <div className="mv-pillars" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
        {t.loop.map((s, i) => (
          <div key={i} className="mv-pill mv-fade" style={{ animationDelay: `${i * .07 + .1}s`, textAlign: "center" }}>
            <div className="mv-d" style={{ fontSize: 15, color: "var(--gold-soft)" }}>{s[0]}</div>
            <p style={{ marginTop: 6 }}>{s[1]}</p></div>
        ))}
      </div>
    </div>
  );
}

function Salotto({ t, lang }) {
  const s = t.sal, st = s.steps;
  const order = ["intro", "name", "contact", "bday", "interests", "source", "consent", "done"];
  const [i, setI] = useState(0);
  const [d, setD] = useState({ name: "", email: "", phone: "", bday: "", lang: lang === "it" ? "Italiano" : "English", interests: [], source: "", consent: false });
  const set = (k, v) => setD((p) => ({ ...p, [k]: v }));
  const toggle = (id) => set("interests", d.interests.includes(id) ? d.interests.filter((x) => x !== id) : [...d.interests, id]);
  const step = order[i];
  const segs = d.interests.map((x) => INTERESTS.find((y) => y.id === x)?.[lang]).filter(Boolean);
  const canNext = (step === "name" && d.name.trim()) || (step === "contact" && /\S+@\S+\.\S+/.test(d.email)) ||
    (step === "bday") || (step === "interests" && d.interests.length) || (step === "source");

  return (
    <div style={{ paddingTop: 44, maxWidth: 560, margin: "0 auto" }}>
      <div className="mv-eyebrow mv-fade mv-d1">{s.eye}</div>

      <div className="tessera mv-fade mv-d2">
        <div className="wm">CABARET VOLTAIRE</div><div className="role">{s.role}</div>
        <div className="nm">{d.name || s.noName}</div>
        <div className="meta"><span>{s.member}</span><span>{s.since}</span>{d.lang && <span>{d.lang}</span>}</div>
        {d.interests.length > 0 && <div className="stamps">{segs.map((x) => <span className="stamp" key={x}>✦ {x}</span>)}</div>}
      </div>

      {i > 0 && i < order.length - 1 && (
        <div className="mv-prog">{order.slice(1, -1).map((_, k) => (<div key={k} className={`mv-dot ${k <= i - 1 ? "on" : ""}`}><i /></div>))}</div>
      )}

      <div className="mv-card mv-fade mv-d3" key={step}>
        {step === "intro" && (<div style={{ display: "grid", gap: 16 }}>
          <h2 className="mv-d" style={{ fontSize: 28, fontWeight: 500, margin: 0 }}>{st.intro[0]}</h2>
          <p style={{ color: "var(--paper-dim)", lineHeight: 1.6, margin: 0 }}>{st.intro[1]}</p>
          <button className="mv-btn mv-gold" onClick={() => setI(1)}>{st.intro[2]} <ArrowRight size={15} /></button></div>)}

        {step === "name" && (<div style={{ display: "grid", gap: 14 }}>
          <h2 className="mv-d" style={{ fontSize: 24, fontWeight: 500, margin: 0 }}>{st.name[0]}</h2>
          <input className="mv-input" placeholder={st.name[1]} value={d.name} onChange={(e) => set("name", e.target.value)} autoFocus /></div>)}

        {step === "contact" && (<div style={{ display: "grid", gap: 14 }}>
          <h2 className="mv-d" style={{ fontSize: 24, fontWeight: 500, margin: 0 }}>{st.contact[0]}</h2>
          <div><label className="mv-label"><Mail size={12} style={{ verticalAlign: -1 }} /> {st.contact[1]}</label>
            <input className="mv-input" type="email" placeholder="tu@esempio.it" value={d.email} onChange={(e) => set("email", e.target.value)} /></div>
          <div><label className="mv-label"><Phone size={12} style={{ verticalAlign: -1 }} /> {st.contact[2]}</label>
            <input className="mv-input" placeholder="+39 ..." value={d.phone} onChange={(e) => set("phone", e.target.value)} /></div></div>)}

        {step === "bday" && (<div style={{ display: "grid", gap: 16 }}>
          <h2 className="mv-d" style={{ fontSize: 24, fontWeight: 500, margin: 0 }}>{st.bday[0]}</h2>
          <div><label className="mv-label">{st.bday[1]}</label>
            <input className="mv-input" type="date" value={d.bday} onChange={(e) => set("bday", e.target.value)} /></div>
          <div><label className="mv-label"><Globe size={12} style={{ verticalAlign: -1 }} /> {st.bday[2]}</label>
            <div className="mv-chips">{["Italiano", "English"].map((x) => (<button key={x} className={`mv-chip ${d.lang === x ? "on" : ""}`} onClick={() => set("lang", x)}>{x}</button>))}</div></div></div>)}

        {step === "interests" && (<div>
          <h2 className="mv-d" style={{ fontSize: 24, fontWeight: 500, margin: "0 0 6px" }}>{st.interests[0]}</h2>
          <p style={{ color: "var(--paper-dim)", fontSize: 13, marginBottom: 14 }}>{st.interests[1]}</p>
          <div className="mv-chips">{INTERESTS.map((it) => (<button key={it.id} className={`mv-chip ${d.interests.includes(it.id) ? "on" : ""}`} onClick={() => toggle(it.id)}><it.icon size={14} /> {it[lang]}</button>))}</div></div>)}

        {step === "source" && (<div>
          <h2 className="mv-d" style={{ fontSize: 24, fontWeight: 500, margin: "0 0 14px" }}>{st.source[0]}</h2>
          <div className="mv-chips">{st.source[1].map((x) => (<button key={x} className={`mv-chip ${d.source === x ? "on" : ""}`} onClick={() => set("source", x)}>{x}</button>))}</div></div>)}

        {step === "consent" && (<div style={{ display: "grid", gap: 16 }}>
          <h2 className="mv-d" style={{ fontSize: 24, fontWeight: 500, margin: 0 }}>{st.consent[0]}</h2>
          <div className="mv-consent" onClick={() => set("consent", !d.consent)}>
            <div className={`mv-check ${d.consent ? "on" : ""}`}>{d.consent && <Check size={14} />}</div><span>{st.consent[1]}</span></div>
          <button className="mv-btn mv-gold" disabled={!d.consent} onClick={() => setI(order.length - 1)}><Heart size={15} /> {s.join}</button></div>)}

        {step === "done" && (<div className="mv-fade">
          <div className="mv-eyebrow" style={{ color: "var(--gold-soft)" }}>✦</div>
          <h2 className="mv-d" style={{ fontSize: 26, fontWeight: 500, margin: "0 0 8px" }}>{s.done[0]} {d.name.split(" ")[0] || ""}.</h2>
          <p style={{ color: "var(--paper-dim)", lineHeight: 1.6, margin: "0 0 16px" }}>{s.done[1]}</p>
          <div style={{ display: "grid", gap: 9 }}>
            <Row icon={Mail}>{s.doneRows[0]}</Row>
            <Row icon={Users}>{s.doneRows[1]} <em>{segs.length ? segs.join(", ") : s.none}</em></Row>
            <Row icon={PartyPopper}>{d.bday ? `${s.doneRows[2]} ${new Date(d.bday).toLocaleDateString(lang, { month: "long" })}` : s.doneRows[3]}</Row>
          </div>
          <button className="mv-btn mv-ghost" style={{ marginTop: 18 }} onClick={() => { setI(0); set("consent", false); }}>{s.restart}</button></div>)}

        {i >= 1 && i <= 5 && (<div style={{ display: "flex", gap: 10, marginTop: 22 }}>
          <button className="mv-btn mv-ghost" onClick={() => setI(i - 1)}>{s.back}</button>
          <button className="mv-btn mv-gold" disabled={!canNext} onClick={() => setI(i + 1)}>{s.next} <ChevronRight size={15} /></button></div>)}
      </div>
    </div>
  );
}
function Row({ icon: Icon, children }) {
  return (<div className="mv-row"><Icon size={17} color="var(--gold)" style={{ flex: "0 0 17px", marginTop: 2 }} /><span>{children}</span></div>);
}

function BotDemo({ t }) {
  const b = t.bot;
  const [phase, setPhase] = useState(0);
  const [ch, setCh] = useState({ email: true, whatsapp: false, instagram: true });
  const toggle = (k) => setCh((p) => ({ ...p, [k]: !p[k] }));
  const sel = Object.entries(ch).filter(([, v]) => v).map(([k]) => k);
  const start = () => { setPhase(1); setTimeout(() => setPhase(2), 1500); };

  return (
    <div style={{ paddingTop: 44 }}>
      <div className="mv-eyebrow mv-fade mv-d1">{b.eye}</div>
      <p className="mv-lead mv-fade mv-d2" style={{ fontSize: 16, marginBottom: 22 }}>{b.lead}</p>
      <div className="mv-phone mv-fade mv-d3">
        <div className="mv-pbar"><div className="mv-pav"><Wine size={18} /></div>
          <div><div className="mv-d" style={{ fontSize: 15, fontWeight: 600 }}>Maître · Cabaret Voltaire</div><div className="mv-m" style={{ fontSize: 10, color: "var(--gold)" }}>bot online</div></div></div>
        <div className="mv-chatw">
          <div className="mv-bub mv-bot">{b.hi}</div>
          {phase === 0 && <button className="mv-btn mv-gold" style={{ alignSelf: "flex-end", marginTop: 6 }} onClick={start}><Send size={14} /> {b.sendEx}</button>}
          {phase >= 1 && <div className="mv-bub mv-me">{b.msg}</div>}
          {phase === 1 && <div className="mv-bub mv-bot"><span className="mv-typ"><i /><i /><i /></span></div>}
          {phase >= 2 && (<div className="mv-bub mv-bot" style={{ maxWidth: "92%" }}>
            <div className="mv-m" style={{ fontSize: 10, letterSpacing: ".15em", color: "var(--gold)", marginBottom: 8 }}>{b.ready}</div>
            <div className="mv-d" style={{ fontStyle: "italic", fontSize: 16, color: "var(--gold-soft)" }}>{b.draftTitle}</div>
            <p style={{ margin: "6px 0 0", fontSize: 13, lineHeight: 1.5, color: "#d8cdb6" }}>{b.draftLine}</p>
            <div className="mv-m" style={{ marginTop: 12, fontSize: 10, color: "var(--paper-dim)", letterSpacing: ".1em" }}>{b.chooseCh.toUpperCase()}</div>
            <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
              {[["email", Mail, "Email"], ["whatsapp", MessageCircle, "WhatsApp"], ["instagram", Instagram, "Instagram"]].map(([k, Ic, l]) => (
                <button key={k} className={`mv-chip ${ch[k] ? "on" : ""}`} onClick={() => toggle(k)} disabled={phase === 3}><Ic size={13} /> {l} {ch[k] ? "✓" : ""}</button>))}
            </div>
            {phase === 2 && <button className="mv-btn mv-gold" style={{ marginTop: 14, width: "100%", justifyContent: "center" }} disabled={!sel.length} onClick={() => setPhase(3)}><Check size={15} /> {b.approve}</button>}
          </div>)}
          {phase === 3 && (<div className="mv-bub mv-bot mv-fade" style={{ maxWidth: "92%" }}>
            <div className="mv-d" style={{ fontStyle: "italic", fontSize: 16, color: "var(--gold-soft)" }}>{b.sent}</div>
            <p style={{ margin: "6px 0 0", fontSize: 13, lineHeight: 1.5, color: "#d8cdb6" }}>{b.sentLine} {sel.map((x) => b.reach[x]).join(" · ")}. {b.reminder}</p>
            <button className="mv-btn mv-ghost" style={{ marginTop: 12 }} onClick={() => setPhase(0)}>{b.restart}</button></div>)}
        </div>
      </div>

      <div style={{ marginTop: 40 }} className="mv-fade">
        <div className="mv-eyebrow">{b.proTitle}</div>
        <p style={{ color: "var(--paper-dim)", fontSize: 14, marginBottom: 6 }}>{b.proSub}</p>
        <div className="mv-ex">
          {b.ex.map((e, i) => (<div className="mv-exc" key={i}>
            <div className="mv-exq">“{e[0]}”</div><div className="mv-exa" dangerouslySetInnerHTML={{ __html: e[1] }} /></div>))}
        </div>
      </div>
    </div>
  );
}

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

function Maitre({ t, lang }) {
  const m = t.mai;
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [out, setOut] = useState(null);

  async function generate() {
    if (!input.trim()) return;
    setLoading(true); setErr(""); setOut(null);
    const sys = `You are the marketing engine for "Cabaret Voltaire Roma", an art-and-drink club, cocktail & wine bar and cultural association in Rione Monti, Rome — Via Panisperna 87. Open 18:00-01:00, closed Mondays, English-spoken. Audience: curious locals, artists, students, travelers; intimate Dada-inspired salon. Voice: literary, warm, avant-garde.
Given an event, return ONLY JSON with keys: subject_it, email_it (55-85 words, with date/time + one CTA), subject_en, email_en (45-70 words), instagram_caption (with 4-6 hashtags), tiktok_hook (1-2 lines, Italian), whatsapp (1-2 sentences Italian, 1-2 emojis), banner_headline (2-3 words Italian), banner_sub (max 5 words), banner_date (e.g. "VEN · 21:30"), best_send (e.g. "Mercoledì 18:30"), segment (one of: Poesia, Musica, Open Mic, Arte, Degustazioni, Tutti). Valid JSON only.`;
    try {
      const r = await fetch("/api/generate", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: input }),
      });
      if (!r.ok) throw new Error("bad");
      const data = await r.json();
      setOut(data && data.subject_it ? data : SAMPLE);
    } catch (e) { setOut(SAMPLE); } finally { setLoading(false); }
  }

  return (
    <div style={{ paddingTop: 44 }}>
      <div className="mv-eyebrow mv-fade mv-d1">{m.eye}</div>
      <h2 className="mv-d mv-fade mv-d2" style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 500, margin: "0 0 10px" }}>{m.h}</h2>
      <p className="mv-lead mv-fade mv-d2" style={{ fontSize: 16, marginBottom: 22 }}>{m.lead}</p>
      <div className="mv-card mv-fade mv-d3">
        <textarea className="mv-input" rows={3} style={{ resize: "vertical", lineHeight: 1.5 }} placeholder={m.ph} value={input} onChange={(e) => setInput(e.target.value)} />
        <div className="mv-chips" style={{ marginTop: 14 }}>
          {m.examples.map((ex, i) => (<button key={i} className="mv-chip" onClick={() => setInput(ex)} style={{ fontSize: 12.5 }}><Sparkles size={13} /> {lang === "it" ? "Esempio" : "Example"} {i + 1}</button>))}
        </div>
        <button className="mv-btn mv-gold" style={{ marginTop: 18 }} onClick={generate} disabled={loading || !input.trim()}>
          {loading ? <><Loader2 size={15} className="mv-spin" /> {m.working}</> : <><Sparkles size={15} /> {m.gen}</>}</button>
        {err && <p style={{ color: "var(--verm)", fontSize: 13, marginTop: 12 }}>{err}</p>}
      </div>
      {out && (<div className="mv-out mv-fade">
        <div className="mv-meta" style={{ marginTop: 18 }}>
          <span className="mv-tag"><Clock size={13} /> {m.send} {out.best_send}</span>
          <span className="mv-tag"><Users size={13} /> {m.seg} {out.segment}</span></div>
        <OC icon={Mail} title={m.cIt} copy={`${out.subject_it}\n\n${out.email_it}`}><p className="mv-subj">{out.subject_it}</p><p className="mv-body">{out.email_it}</p></OC>
        <OC icon={Mail} title={m.cEn} copy={`${out.subject_en}\n\n${out.email_en}`}><p className="mv-subj">{out.subject_en}</p><p className="mv-body">{out.email_en}</p></OC>
        <OC icon={Instagram} title={m.cIg} copy={out.instagram_caption}><p className="mv-body">{out.instagram_caption}</p></OC>
        <OC icon={Video} title={m.cTk} copy={out.tiktok_hook}><p className="mv-body">{out.tiktok_hook}</p></OC>
        <OC icon={MessageCircle} title={m.cWa} copy={out.whatsapp}><p className="mv-body">{out.whatsapp}</p></OC>
        <div className="mv-oc"><div className="mv-och"><ImageIcon size={16} color="var(--gold)" /><span className="t">{m.cBan}</span></div>
          <div style={{ textAlign: "center", paddingTop: 6 }}><Poster headline={out.banner_headline || "Evento"} sub={out.banner_sub || ""} date={out.banner_date || ""} /></div></div>
      </div>)}
    </div>
  );
}
function OC({ icon: Icon, title, copy, children }) {
  const [done, setDone] = useState(false);
  return (<div className="mv-oc"><div className="mv-och"><Icon size={16} color="var(--gold)" /><span className="t">{title}</span>
    <button className="mv-cpy" onClick={() => { navigator.clipboard?.writeText(copy); setDone(true); setTimeout(() => setDone(false), 1400); }}>{done ? <><Check size={12} /> ✓</> : <><Copy size={12} /></>}</button></div>{children}</div>);
}
