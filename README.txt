================================================================================
          GHID COMPLET CLAUDE CODE - CURS MASTER PAS CU PAS
================================================================================
Link Video Curs: https://www.youtube.com/watch?v=nwjDp6rzpo4
Data & Referință: Ghid complet de învățare, comandă și configurare Claude Code
Workspace Lucru: c:\Users\Alin63\Desktop\Python_projects\Primul_Claude_md
================================================================================

TABLA DE MATERII & STAMPE TEMPORALE (CHAPTERS):
--------------------------------------------------------------------------------
01. [00:00] Intro - Introducere în Claude Code
02. [07:06] Instalare Claude Code & Cerințe Sistem
03. [21:00] Integrare IDE-uri (VS Code, Cursor, JetBrains)
04. [49:08] Fișierul CLAUDE.md - Memoria Proiectului
05. [55:33] Construirea unei Aplicații Web Live
06. [01:23:16] Folderul de Configurare .claude
07. [01:35:49] Comenzi Slash (Slash Commands)
08. [01:58:46] Claude Code Skills (Extinderea Abilităților)
09. [02:08:29] Modurile de Operare Claude Code (Interactive, Plan, Auto)
10. [02:12:47] Aplicație Practică cu Plan Mode
11. [02:35:57] Managementul Contextului & Optimizare Tokeni
12. [03:21:11] Agent Teams & Arhitectură Multi-Agent
13. [03:57:47] MCP (Model Context Protocol) - Conectare Date Externe
14. [04:12:40] Sisteme Automate Integrând MCP
15. [04:21:18] Plugins și Marketplace
16. [04:24:24] Subagents - Izolare și Delegare Task-uri
17. [04:56:22] Git Worktrees - Dezvoltare Paralelă Fără Conflicte
18. [05:07:47] Scalare, Producție și Publicare (Deployment)
19. [05:19:43] Outro & Concluzii Final

================================================================================
                  DETALIERE PAS CU PAS PE CAPITOLE
================================================================================

--------------------------------------------------------------------------------
CAPITOLUL 1: INTRO (00:00)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=0s

REZUMAT & CONCEPTE CHEIE:
- Ce este Claude Code? Este un agent CLI (Command Line Interface) dezvoltat de Anthropic.
- Permite modelului Claude (ex: Claude 3.5 Sonnet / Claude 3.7 Sonnet) să opereze direct pe sistemul tău local: să citească fișiere, să editeze cod, să ruleze comenzi de terminal, să execute commit-uri Git și să folosească instrumente externe.
- Diferență față de chat-ul clasic web: Claude Code are acces direct la codul sursă, înțelege arhitectura proiectului și execută acțiuni autonome.

RESURSE & SITE-URI:
- Site Oficial Anthropic: https://www.anthropic.com
- Documentație Claude Code: https://docs.anthropic.com/en/docs/agents-and-tools/claude-code
- GitHub Anthropic: https://github.com/anthropic

--------------------------------------------------------------------------------
CAPITOLUL 2: INSTALARE CLAUDE CODE (07:06)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=426s

CERINȚE PREALABILE:
1. Node.js instalat (versiune minimă recomodată v18.0.0+ sau v20+).
   - Verificare: node -v
   - Descărcare: https://nodejs.org
2. Git instalat.
   - Verificare: git --version
3. Cont Anthropic activ cu cheie API (API Key) sau abonament Claude Pro / Max / Team.

PAȘI DE INSTALARE:
1. Deschide Terminalul / PowerShell / Command Prompt.
2. Instalează pachetul global direct din NPM:
   npm install -g @anthropic-ai/claude-code

3. Verifică instalarea corectă:
   claude --version

4. Autentificarea inițială:
   - Rulează comanda:
     claude
   - Se va deschide o fereastră de browser unde confirmi autentificarea cu contul tău Anthropic.
   - Alternativ, poți seta variabila de mediu direct cu cheia API:
     pe Windows PowerShell: $env:ANTHROPIC_API_KEY="cheia_ta_api"
     pe Linux/macOS: export ANTHROPIC_API_KEY="cheia_ta_api"

5. Verificarea stării sistemului & diagnosticare:
   claude doctor

--------------------------------------------------------------------------------
CAPITOLUL 3: IDE-URI (21:00)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=1260s

INTEGRARE MEDII DE DEZVOLTARE:
1. VS Code / VS Codium:
   - Deschide folderul proiectului în VS Code (`code .`).
   - Deschide Terminalul Integrat (`Ctrl + ~` pe Windows/Linux sau `Cmd + ~` pe Mac).
   - Rulează comanda `claude` direct în rădăcina proiectului.
2. Cursor / Windsurf:
   - Funcționează identic în terminalul integrat, permițând rularea paralelă a asistentului Claude Code.
3. JetBrains (PyCharm, WebStorm, IntelliJ IDEA):
   - Deschide tab-ul 'Terminal' din partea de jos a IDE-ului și inițializează `claude`.
4. Terminale Avansate Recomandate:
   - Windows: Windows Terminal (cu PowerShell 7 / WSL2).
   - macOS: Ghostty, Warp Terminal, iTerm2.

BUNE PRACTICI DE CONFIGURARE:
- Asigură-te că rulezi `claude` întotdeauna din directorul rădăcină (root) al proiectului de cod pentru a-i permite să scaneze structura fișierelor.

--------------------------------------------------------------------------------
CAPITOLUL 4: CLAUDE.MD - MEMORIA PROIECTULUI (49:08)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=2948s

CE ESTE CLAUDE.MD?
- Este fișierul principal de instrucțiuni de memorie per proiect. Claude Code îl citește automat la pornire în orice director.

STRUCTURA STANDARD A UNUI FIȘIER CLAUDE.MD:
--------------------------------------------------
# Proiect NumeProiect

## Descriere & Arhitectură
Scurtă descriere a aplicației, framework-urile folosite (ex: React, Node.js, Python, Tailwind).

## Comenzi Utilizate Frecvent
- Build: `npm run build`
- Dev Server: `npm run dev`
- Testare: `npm test`
- Linting: `npx eslint .`

## Reguli de Cod (Code Style Guidelines)
- Utilizați ES6+ și TypeScript strict.
- Numele fișierelor de componente: PascalCase (ex: `UserProfile.jsx`).
- Structură CSS: Folosiți clase Tailwind CSS inline sau variabile CSS Vanilla.

## Standarde Git & Commit
- Format commit-uri: `feat: descriere`, `fix: descriere`.
--------------------------------------------------

COMANDĂ PENTRU GENERARE AUTOMATĂ:
- Rulează în Claude Code: `/init`
- Agentul va analiza proiectul și va crea un fișier `CLAUDE.md` optimizat.

--------------------------------------------------------------------------------
CAPITOLUL 5: APLICAȚIE WEB LIVE (55:33)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=3333s

FLUX DE DEZVOLTARE A UNEI APLICAȚII WEB:
1. Inițializarea proiectului:
   - Prompt către Claude Code: "Creează o aplicație web de tip Dashboard interactiv cu HTML, CSS (Tailwind) și JavaScript vanilla."
2. Structura fișierelor create:
   - `index.html` (interfața UI)
   - `styles.css` (stiluri personalizate)
   - `app.js` (logica interactivă)
3. Rularea unui server web local pentru previzualizare live:
   - Cu Python: `python -m http.server 8000` (accesibil la http://localhost:8000)
   - Cu Node live-server: `npx live-server`
   - Cu Vite: `npm run dev`
4. Iterare live:
   - Oferi feedback continuu agentului (ex: "Adaugă un buton de Dark Mode", "Modifică paleta de culori în nuanțe de albastru/violet").

--------------------------------------------------------------------------------
CAPITOLUL 6: FOLDERUL DE CONFIGURARE .CLAUDE (01:23:16)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=4996s

STRUCTURA FOLDERULUI `.claude/` (Local în proiect sau Global în `~/.claude/`):

1. `.claude/settings.json` sau `config.json`
   - Stochează preferințele de configurare ale proiectului (ex: comenzi permise automat, setări de securitate).
2. `.claude/mcp.json`
   - Fișierul de configurare pentru integrările MCP (Model Context Protocol).
3. `.claude/commands/`
   - Director pentru comenzi slash personalizate (`custom commands`).
4. `.claude/skills/`
   - Director unde se adaugă skill-uri externe/modulare ale agentului.

FIȘIERUL `.claudeignore`:
- Funcționează ca un `.gitignore`. Ignoră fișierele mari, logurile sau directoarele confidențiale pentru a nu încărca contextul modelului (ex: `node_modules/`, `build/`, `*.log`).

--------------------------------------------------------------------------------
CAPITOLUL 7: COMENZI SLASH (SLASH COMMANDS) (01:35:49)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=5749s

LISTA INTEGRALĂ DE COMENZI SLASH INCORPORATE:

/init        - Analizează depozitul curent și generează fișierul `CLAUDE.md`.
/bug        - Raportează o problemă sau lansează o investigare de bug în cod.
/clear      - Curăță istoricul conversației curente și resetează contextul.
/compact    - Compactează (rezumă) conversația curentă pentru a elibera spațiu în fereastra de context.
/config     - Deschide meniul interactive de configurare a setărilor Claude Code.
/cost       - Afișează numărul de tokeni utilizați și costul financiar estimat al sesiunii.
/doctor     - Rulează teste de diagnosticare ale mediului local și conexiunii API.
/help       - Afișează lista completă de ajutor și comenzi disponibile.
/login      - Autentificare în contul Anthropic.
/logout     - Deconectare din cont.
/model      - Permite schimbarea modelului (ex: Claude 3.5 Sonnet, Claude 3.7 Sonnet, Haiku).
/permissions- Gestionează lista de comenzi auto-aprobate și restricțiile de execuție.
/plan       - Comută agentul în modul de planificare (Planning Mode).
/resume     - Reia o sesiune de lucru anterioară salvată.
/review     - Revizuiește modificările de cod recente (Git diff) și oferă feedback.

CREAREA DE COMENZI CUSTOM:
- Poți crea fișiere markdown în `.claude/commands/nume_comanda.md` cu instrucțiuni pe care Claude Code le va executa când tastezi `/nume_comanda`.

--------------------------------------------------------------------------------
CAPITOLUL 8: CLAUDE CODE SKILLS (01:58:46)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=7126s

CE SUNT SKILL-URILE (SKILLS)?
- Rețete de lucru modulare (worklows) sau funcționalități specializate împachetate în directoare dedicate.

STRUCTURA UNUI SKILL:
Cale: `.claude/skills/nume_skill/SKILL.md`

Exemplu format SKILL.md:
---
name: web-scraper
description: Rulează un script de scraping pe un URL dat și extrage datele în JSON.
---
# Instrucțiuni Scraper
1. Folosește Puppeteer/Playwright pentru a naviga pe URL.
2. Extrage titlurile și linkurile principale.
3. Salvează rezultatul în `output.json`.

CUM ACTIVEAZĂ CLAUDE SKILL-URILE:
- Când promptul utilizatorului se potrivește cu `description`-ul dintr-un skill, agentul încarcă automat instrucțiunile din `SKILL.md` și le execută.

--------------------------------------------------------------------------------
CAPITOLUL 9: MODURILE CLAUDE CODE (02:08:29)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=7709s

CELE 3 MODURI PRINCIPALE DE OPERARE:

1. Interactive Mode (Mod Standard)
   - Fiecare editare de fișier sau comandă de terminal necesită confirmare manuală (`y/n`) din partea utilizatorului.
2. Planning Mode (`/plan` sau optiunea `--plan`)
   - Agentul nu modifică direct codul. El explorează fișierele, analizează arhitectura și redactează mai întâi un plan detaliat de implementare (`implementation_plan.md`).
3. Auto-Accept Mode / Non-Interactive Mode
   - Execută comenzi și modificări în mod autonom fără a cere confirmare la fiecare pas. Se poate activa din CLI prin opțiuni speciale de permisiuni.

--------------------------------------------------------------------------------
CAPITOLUL 10: APLICAȚIE CU PLAN MODE (02:12:47)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=7967s

FLUX PRACTIC DE LUCRU CU PLAN MODE:

Pasul 1: Activarea Modului Plan
- Tastați `/plan` în terminal sau solicitați explicit un plan în prompt.

Pasul 2: Etapa de Cercetare & Analiză (Research)
- Claude explorează fișierele relevante, depozitul de cod și documentația. Fără a altera codul sursă.

Pasul 3: Generarea Planului (`implementation_plan.md`)
- Se creează un fișier markdown care detaliază:
  * Obiectivul modificării
  * Fișierele care vor fi modificate [MODIFY] / create [NEW] / șterse [DELETE]
  * Întrebări deschise / Decizii de design
  * Plan de verificare & teste

Pasul 4: Aprobarea Utilizatorului
- Utilizatorul citește planul și apasă butonul/comanda de Aprobare (Proceed).

Pasul 5: Execuția & Verificarea (Walkthrough)
- Claude aplică modificările pas cu pas conform planului aprobat și rulează testele de verificare.

--------------------------------------------------------------------------------
CAPITOLUL 11: MANAGEMENTUL CONTEXTULUI (02:35:57)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=9357s

TEHNICI DE REDUCERE ȘI OPTIMIZARE A CONTEXTULUI:

1. Verifică consumul curent de tokeni:
   /cost
2. Compactează istoricul când discuția devine lungă:
   /compact
3. Curăță contextul când treci la un alt task independent:
   /clear
4. Folosește `.claudeignore` pentru a bloca scanarea fișierelor binare, directoarelor build și log-urilor voluminoase.
5. Specifică căi exacte de fișiere în prompturi în loc să ceri căutare globală pe tot disc-ul.

--------------------------------------------------------------------------------
CAPITOLUL 12: AGENT TEAMS (03:21:11)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=12071s

ARHITECTURA MULTI-AGENT (AGENT TEAMS):
- Conceptul presupune împărțirea unei sarcini complexe în roluri distincte de agenți AI:
  * Agent Arhitect / Lead: Stabilește structura generală și planul.
  * Agent Coder: Scrie codul sursă efectiv.
  * Agent Reviewer / QA: Analizează codul pentru bug-uri și testează execuția.
  * Agent Technical Writer: Actualizează documentația `README.md`.

--------------------------------------------------------------------------------
CAPITOLUL 13: MCP (MODEL CONTEXT PROTOCOL) (03:57:47)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=14267s

CE ESTE MCP?
- Model Context Protocol este un standard deschis creat de Anthropic pentru conectarea AI-ului la instrumente și surse externe de date într-un mod securizat.

CUM SE ADUGA UN SERVER MCP ÎN CLAUDE CODE:
- Adăugare prin CLI:
  claude mcp add nume-server npx -y @modelcontextprotocol/server-xxx

- Sau adăugare manuală în `.claude/mcp.json`:
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxxxxxxxxxx"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://user:pass@localhost:5432/mydb"]
    },
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}

EXEMPLE DE SERVER MENTIONATE:
- GitHub MCP (gestionare Issues, PR-uri, repos)
- PostgreSQL / SQLite MCP (interogare baze de date)
- Puppeteer MCP (automatizare browser și screenshot-uri)
- Fetch MCP (descărcare / scraping pagini web)
- Brave Search MCP (căutare pe web în timp real)

--------------------------------------------------------------------------------
CAPITOLUL 14: SISTEME AUTOMATE CU MCP (04:12:40)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=15160s

AUTOMATIZĂRI AVANSATE CU MCP:
- Crearea de pipeline-uri unde Claude Code:
  1. Interoghează o bază de date SQL via Postgres MCP.
  2. Identifică un bug din date.
  3. Deschide un Issue pe GitHub via GitHub MCP.
  4. Corectează codul local.
  5. Trimite un Pull Request automat.

--------------------------------------------------------------------------------
CAPITOLUL 15: PLUGINS ȘI MARKETPLACE (04:21:18)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=15678s

EXTINDEREA PRIN PLUGINS:
- Integrarea extensiilor create de comunitate din Marketplace-ul Claude Code.
- Permite adăugarea rapidă de integrări cu platforme precum Vercel, AWS, Cloudflare, Linear, Jira, Slack.

--------------------------------------------------------------------------------
CAPITOLUL 16: SUBAGENTS (04:24:24)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=15864s

CE SUNT SUBAGENȚII (SUBAGENTS)?
- Instanțe secundare autonome ale agentului Claude lansate pentru a rezolva un sub-task specific (ex: rulare suite complete de teste, căutare profundă în fișiere, generare documentație).
- AVANTAJ CHEIE: Subagentul își consumă propriul context izolat și returnează doar un rezumat sintetic către agentul principal, economisind tokeni prețioși.

--------------------------------------------------------------------------------
CAPITOLUL 17: GIT WORKTREES (04:56:22)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=17782s

DEZVOLTARE PARALELĂ CU GIT WORKTREE & CLAUDE CODE:

Ce este un Git Worktree?
- Vă permite să aveți multiple branch-uri ale aceluiași depozit verificat (checked out) simultan în directoare separate pe disc.

Comenzi principale Git Worktree:
1. Creare worktree nou pentru un feature:
   git worktree add ../proiect-feature-x feature-x

2. Listare worktree-uri active:
   git worktree list

3. Deschide o sesiune Claude Code în noul folder:
   cd ../proiect-feature-x
   claude

4. Ștergere worktree după finalizare și merge:
   git worktree remove ../proiect-feature-x

BENEFICIU: Claude Code poate lucra într-un folder izolat pe un branch fără a strica sau modifica starea folderului tău de lucru principal!

--------------------------------------------------------------------------------
CAPITOLUL 18: SCALARE ȘI PUBLICARE (05:07:47)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=18467s

PREGĂTIREA PENTRU PRODUCȚIE & DEPLOYMENT:
1. Verificarea securității & variabilelor de mediu (`.env`).
2. Generarea versiunii de producție:
   npm run build
3. Opțiuni de Deploy:
   - Vercel: `npx vercel`
   - Netlify: `npx netlify deploy`
   - Cloudflare Pages / Railway / Render / Docker.
4. Automatizare CI/CD folosind GitHub Actions.

--------------------------------------------------------------------------------
CAPITOLUL 19: OUTRO (05:19:43)
--------------------------------------------------------------------------------
Link capitol: https://www.youtube.com/watch?v=nwjDp6rzpo4&t=19183s

RECAPITULARE & BEST PRACTICES FINALE:
- Păstrează fișierul `CLAUDE.md` scurt, clar și la zi.
- Folosește `/compact` și `/clear` pentru menținerea contextului curat.
- Utilizează `/plan` pentru sarcini mari sau complexe.
- Adaugă MCP pentru extindere cu instrumente externe (GitHub, DB, Scraper).
- Explorează `git worktree` pentru sesiuni paralele fără riscuri.

================================================================================
          LINK-URI UTILE & GHID RAPID REFERENCE
================================================================================
- Clip Video YouTube Curs: https://www.youtube.com/watch?v=nwjDp6rzpo4
- Documentație Oficială Anthropic: https://docs.anthropic.com
- Ghid Claude Code: https://docs.anthropic.com/en/docs/agents-and-tools/claude-code
- Model Context Protocol (MCP): https://modelcontextprotocol.io
================================================================================
