import React, { useState } from "react";
import Prototype from "./Prototype.jsx";
import { Wine, Sparkles, FileText, ScrollText, Mail, ArrowLeft, ArrowUpRight } from "lucide-react";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,500;0,6..96,600;1,6..96,500&family=Hanken+Grotesk:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
.hub{min-height:100vh;font-family:'Hanken Grotesk',sans-serif;color:#ece1cd;
  background:radial-gradient(120% 80% at 80% -10%,rgba(86,22,32,.55),transparent 55%),radial-gradient(90% 70% at 0% 110%,rgba(202,162,75,.1),transparent 50%),#100b0d;
  display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 22px;}
.hub .seal{width:54px;height:54px;border:1.5px solid #caa24b;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#caa24b;transform:rotate(-8deg);}
.hub .kick{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.3em;text-transform:uppercase;color:#caa24b;margin-top:18px;}
.hub h1{font-family:'Bodoni Moda',serif;font-weight:500;font-size:clamp(34px,6vw,52px);margin:10px 0 8px;text-align:center;}
.hub h1 em{font-style:italic;color:#e2c785;}
.hub .sub{color:#b7a98f;max-width:48ch;text-align:center;line-height:1.6;margin-bottom:36px;}
.cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;width:100%;max-width:680px;}
@media(max-width:560px){.cards{grid-template-columns:1fr;}}
.tile{display:block;text-align:left;cursor:pointer;border:1px solid rgba(202,162,75,.28);border-radius:16px;padding:22px;
  background:rgba(255,247,233,.03);color:#ece1cd;text-decoration:none;transition:.2s;font-family:inherit;}
.tile:hover{border-color:#caa24b;transform:translateY(-2px);background:rgba(202,162,75,.07);}
.tile.feat{border-color:#caa24b;background:linear-gradient(180deg,rgba(202,162,75,.1),rgba(255,247,233,.02));}
.tile .ic{color:#caa24b;margin-bottom:12px;}
.tile h3{font-family:'Bodoni Moda',serif;font-weight:500;font-size:21px;margin:0 0 5px;display:flex;align-items:center;gap:7px;}
.tile p{color:#b7a98f;font-size:13.5px;line-height:1.5;margin:0;}
.back{position:fixed;bottom:18px;left:18px;z-index:100;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.12em;
  text-transform:uppercase;display:inline-flex;align-items:center;gap:8px;padding:11px 16px;border-radius:999px;
  background:#caa24b;color:#100b0d;border:none;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,.4);}
.foot{margin-top:36px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.1em;color:#7d6f57;}
`;

function Hub({ onDemo }) {
  return (
    <div className="hub">
      <style>{CSS}</style>
      <div className="seal"><Wine size={26} /></div>
      <div className="kick">Art &amp; Drink Club · Monti</div>
      <h1>Maître <em>×</em> Cabaret Voltaire</h1>
      <p className="sub">Tutto in un posto: la demo interattiva, la presentazione delle due versioni, la proposta e un'email di esempio.</p>
      <div className="cards">
        <button className="tile feat" onClick={onDemo}>
          <div className="ic"><Sparkles size={22} /></div>
          <h3>Demo interattiva <ArrowUpRight size={16} /></h3>
          <p>Il modulo soci, il bot Telegram e il Maître dal vivo. Provalo.</p>
        </button>
        <a className="tile" href="/pitch.html" target="_blank" rel="noopener">
          <div className="ic"><FileText size={22} /></div>
          <h3>Basic &amp; Pro <ArrowUpRight size={16} /></h3>
          <p>Le due versioni in dettaglio, prezzi e confronto con un addetto marketing.</p>
        </a>
        <a className="tile" href="/proposta.html" target="_blank" rel="noopener">
          <div className="ic"><ScrollText size={22} /></div>
          <h3>Proposta <ArrowUpRight size={16} /></h3>
          <p>La pagina di proposta da consegnare, bilingue IT/EN.</p>
        </a>
        <a className="tile" href="/email.html" target="_blank" rel="noopener">
          <div className="ic"><Mail size={22} /></div>
          <h3>Email di esempio <ArrowUpRight size={16} /></h3>
          <p>Come la vede il socio nella propria casella, IT/EN.</p>
        </a>
      </div>
      <div className="foot">No.87 Via Panisperna · Rione Monti · Roma</div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("hub");
  if (view === "demo") {
    return (
      <div>
        <button className="back" onClick={() => setView("hub")}><ArrowLeft size={14} /> Hub</button>
        <Prototype />
      </div>
    );
  }
  return <Hub onDemo={() => setView("demo")} />;
}
