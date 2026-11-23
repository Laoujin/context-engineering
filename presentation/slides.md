---
theme: ./theme
title: Some Memories Are Best Forgotten
titleTemplate: "%s"
favicon: favicon.png
info: Context engineering for coding agents.
layout: title
ctx: 11
---

<script setup>
const still = `${import.meta.env.BASE_URL}stills/hotel-room.jpg`
</script>

<div class="cover-still" :style="{ backgroundImage: `url(${still})` }"></div>
<div class="cover-title">
  <h1>Some memories are best <span>forgotten</span></h1>
  <div class="by">context engineering for coding agents<br>Wouter Van Schandevijl · itenium</div>
</div>

---
layout: title
clicks: 2
ctx: [12, 12, 13]
---

<script setup>
const lenny = `${import.meta.env.BASE_URL}stills/lenny.webp`
const claude = `${import.meta.env.BASE_URL}stills/claude-mascot.webp`
</script>

<div class="lenny">
  <Polaroid :w="560" :h="420" :r="-3" class="pin" :cap="$clicks >= 2 ? 'CLAUDE' : 'LENNY'">
    <div class="lenny-photo" :class="{ developed: $clicks >= 2 }" :style="{ backgroundImage: `url(${lenny})` }"></div>
    <div class="lenny-claude" :class="{ developed: $clicks >= 2 }" :style="{ backgroundImage: `url(${claude})` }"></div>
  </Polaroid>
  <div class="lenny-lines">
    <div>This is <span class="struck" :class="{ on: $clicks >= 2 }">Lenny<svg viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M-4 88 L104 14"/></svg></span><span class="edit-ins name d1" :class="{ on: $clicks >= 2 }">&nbsp;Claude</span>.</div>
    <div v-click="1" class="up">He<span class="edit-ins d2" :class="{ on: $clicks >= 2 }">&nbsp;also</span> has <b>anterograde amnesia</b>:<br>he can't make new memories<span class="edit-ins d3" :class="{ on: $clicks >= 2 }">&nbsp;either</span></div>
  </div>
</div>

<!--
- Lenny: main character. Amazing movie.
- Amnesia: starts every scene thoroughly confused.
- Claude: Same problem. No idea what this app is.
-->

---
layout: title
clicks: 1
ctx: 13
---

<Flap still="tattoo.png" was="Tattoos" was-sub="always on him" fix="CLAUDE.md" fix-sub="read always, every session" />

<!--
- Tattoos: the few facts he can't afford to lose which he reads every time he wakes up.
- They killed his wife, he's out for revenge
-->

---
layout: title
clicks: 1
ctx: [13, 14]
---

<Flap still="polaroid.png" focus="0% center" was="Polaroids" was-sub="pulled out when needed" fix="skills" fix-sub="loaded when the caption matches" />

<!--
- Polaroids: he can't carry everything on his skin, so he pulls out the right photo when he needs it. The caption tells him who it is.
- Skills: The caption is the skill's trigger: it decides when the rest gets loaded.
-->

---
layout: title
clicks: 1
ctx: 14
---

<Flap still="note.png" focus="100% center" right was="Notes" was-sub="by him: are they stale?<br>by others: are they lies?" fix="Notes" fix-sub="memories: are they stale?<br>the web: are they lies?" />

<!--
- Notes: everything he writes down or gets handed in the moment. Some by himself, some by others. Every one of them reads as fact the next time.
- Claude's notes. Its memory, written by itself: is it stale? The web, written by strangers: is it lying? He can't tell. Neither can Claude.
-->

---
layout: title
clicks: 2
ctx: 15
---

<script setup>
const mirror = `${import.meta.env.BASE_URL}stills/mirror-solo.png`
</script>

<div class="skin-still" :style="{ backgroundImage: `url(${mirror})` }"></div>
<div class="skin-title">
  <div class="device-name" style="font-size:80px;line-height:1.05;margin-bottom:30px">Every session is a new scene.</div>
  <div class="flap" :class="{ flipped: $clicks >= 1 }">
    <div class="flap-face front"><div class="flap-sub">First thing he does:</div><div class="device-name">read his tattoos.</div></div>
    <div class="flap-face back"><div class="flap-sub">First thing Claude does:</div><div class="device-name hand amber-t"><span class="stamp-host">read CLAUDE.md<span class="stamp" :class="{ on: $clicks >= 2 }">×5</span></span></div></div>
  </div>
</div>
<div class="claudemd-levels" :class="{ on: $clicks >= 2 }">org · global · project · local · folder</div>

<!--
He wakes up somewhere he doesn't recognise. First thing: check the arm, the mirror, the tattoos.
Claude does the same at the start of every session: CLAUDE.md first.
-->

---
layout: title
clicks: 7
ctx: [16, 16, 16, 16, 17, 17, 17, 17]
---

<script setup>
const cards = [
  { x: 120, y: 190, r: -5, h: 100, body: 'system prompt', cap: 'never seen it', s: 1 },
  { x: 450, y: 170, r: 3, h: 100, body: 'CLAUDE.md ×5', cap: 'the ones you wrote', s: 2, mine: true },
  { x: 930, y: 170, r: -2, h: 100, body: 'MCP tool schemas', cap: 'every tool', s: 3 },
  { x: 1260, y: 190, r: 4, h: 100, body: 'skills index', cap: 'every caption', s: 4 },
  { x: 120, y: 560, r: 3, h: 80, body: 'memory index', cap: 'MEMORY.md', s: 5 },
  { x: 1260, y: 560, r: -4, h: 80, body: 'system reminders', cap: 'near the action', s: 6 },
]
const pin = (x, y, w, h, r) => {
  const half = h / 2, rad = r * Math.PI / 180
  return [x + w / 2 + half * Math.sin(rad), y + half - half * Math.cos(rad)]
}
const hub = pin(640, 360, 328, 230, 1)
const strings = cards.map(c => pin(c.x, c.y, 228, c.h + 64, c.r))
</script>

<div class="cork"></div>
<div class="wall-title"><div class="kicker">but wait</div><h2>You have more tattoos than you think</h2></div>
<svg class="wall-strings" viewBox="0 0 1600 854"><line v-for="([x, y], i) in strings" :key="i" :x1="x" :y1="y" :x2="hub[0]" :y2="hub[1]" class="slidev-vclick-target" :class="{ 'slidev-vclick-hidden': $clicks <= i }"/></svg>
<Polaroid v-for="c in cards" :key="c.body" :x="c.x" :y="c.y" :w="200" :h="c.h" :r="c.r" :cap="c.cap" class="pin sm slidev-vclick-target" :class="{ 'slidev-vclick-hidden': $clicks < c.s, mine: c.mine }"><div class="wall-card">{{ c.body }}</div></Polaroid>
<Polaroid :x="640" :y="360" :w="300" :h="150" :r="1" cap="what Claude actually reads" class="pin prompt-card"><div class="wall-card prompt">THE PROMPT</div></Polaroid>
<div v-click="7" class="up hand amber-t wall-punch">You only wrote one of them.</div>

<!--
- System prompt: pages of instructions you never see.
- MCP: every tool of every server, every turn.
- System reminders: hooks, file changes, skills.
-->

---
layout: title
clicks: 3
ctx: [18, 19, 21, 22]
disabled: true
---

<div class="script-page">
  <div class="script-hdr"><span>SOME MEMORIES ARE BEST FORGOTTEN</span><span>p. 1</span></div>
  <div class="script-fade">FADE IN:</div>
  <div class="script-act">Tattoos, polaroids, a stack of notes. <span class="hand amber-t">(THE PROMPT)</span></div>
  <div v-click="1"><div class="script-slug">INT. MOTEL ROOM. DAY</div><div class="script-act">LENNY wakes. A note on the pillow, in his own handwriting.</div><div class="script-who">note</div><div class="script-line">Find out who broke the build.</div></div>
  <div v-click="2"><div class="script-slug">INT. MOTEL OFFICE. DAY</div><div class="script-act">The CLERK slides a binder across the desk: git log, 412 commits.</div><div class="script-who">lenny</div><div class="script-par">(flipping through)</div><div class="script-line">Who wrote this one?</div><div class="script-who">clerk</div><div class="script-line">You did. Tuesday.</div></div>
  <div v-click="3"><div class="script-slug">INT. CAR. NIGHT</div><div class="script-act">Build output scrolls past the windshield. 2,113 lines. Two of them red.</div><div class="script-who">lenny</div><div class="script-line">Why are these failing?</div></div>
</div>
<div class="script-bracket" :style="{ height: `${[150, 330, 540, 760][$clicks] ?? 760}px` }"></div>
<div class="script-caps">
  <div class="kicker">stateless</div>
  <div v-click="1" class="up">Turn 1: Claude reads this page.</div>
  <div v-click="2" class="up">Turn 2: the same page, <b>from FADE IN</b>.</div>
  <div v-click="3" class="up hand amber-t script-punch">Every turn, the whole screenplay.</div>
</div>

<!--
- No memory between turns: the harness re-sends everything.
- Cached prefix: ~10% of the price. Edit CLAUDE.md mid-session = cache miss.
- Agents mostly read: ~10:1 input to output.
-->

---
layout: statement
clicks: 1
ctx: 22
---

<div>
  <div class="big"><span class="dim">Prompt:</span> one sentence.<br><span class="dim">Context:</span> everything it reads.</div>
  <div v-click="1" class="small up">Context engineering: curating <b>everything the model sees</b>, every turn.</div>
</div>

<!--
- Prompt engineering was 2023. You wrote one clever sentence.
- Context engineering: curating what goes into the prompt and what stays out of out
- Tobi Lütke's: "the art of providing all the context for the task to be plausibly solvable by the LLM."
-->

---
layout: scene
kicker: so it re-reads everything
title: Who cares?
subtitle: Somewhere in this pile is the answer
subtitleAt: 1
clicks: 4
ctx: [23, 23, 23, 24, 24]
---

<script setup>
const base = import.meta.env.BASE_URL
const photos = [
  ['pol-burt', 'Burt'], ['pol-teddy', 'Teddy'], ['pol-natalie', 'Natalie'],
  ['polaroid-dodd', 'Dodd'], ['pol-house', "Natalie's house"], ['pol-truck', 'Blue truck'], ['pol-sammy', 'Sammy'], ['pol-building', 'Old building'],
  ['pol-tattoo', 'Tattoo'], ['pol-wife', 'My wife'], ['pol-motel', 'Discount Inn'], ['pol-coaster', "Ferdy's"],
  ['pol-escort', 'Escort'], ['pol-jimmy', 'Jimmy'], ['pol-sammy-wife', 'Mrs. Jankis'], ['pol-tattoo-shop', 'Tattoo shop'],
  ['pol-plate', 'SG13 7IU'], ['pol-natalie-bar', 'Natalie'], ['pol-teddy-door', 'Teddy'],
].map(([f, cap]) => ({ src: `${base}stills/${f}.webp`, cap }))
let seed = 7
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647
const first = [[130, 200, -6], [400, 250, 4], [670, 220, -3]]
const pile = photos.map((p, i) => {
  if (i < 3) return { x: first[i][0], y: first[i][1], r: first[i][2], at: 1, photo: p.src, cap: p.cap }
  const spread = i < 12 ? 300 : 380
  return { x: 400 + (rnd() - .5) * 2 * spread, y: 230 + (rnd() - .5) * spread * .85, r: (rnd() - .5) * 40, at: i < 12 ? 2 : 3, photo: p.src, cap: p.cap }
})
const labels = ['', 'found it', 'took a while', "it's in there… somewhere"]
const lenny = `${base}stills/lenny.webp`
</script>

<div v-for="(p, i) in pile" :key="i" class="pile-pol slidev-vclick-target" :class="{ 'slidev-vclick-hidden': $clicks < p.at }" :style="{ left: `${p.x}px`, top: `${p.y}px`, '--r': `${p.r}deg`, zIndex: i, '--photo': `url(${p.photo})` }"><span :class="{ long: p.cap.length > 10 }">{{ p.cap }}</span></div>
<div v-click="1" class="pile-who">
  <div class="pile-avatar" :style="{ backgroundImage: `url(${lenny})` }"></div>
  <div class="pile-lbl hand">{{ labels[Math.min($clicks, 3)] }}</div>
  <div v-click="4" class="up hand amber-t pile-punch">More polaroids, harder to find the right one.</div>
</div>

---
layout: scene
kicker: claude is the same
title: Lost in the middle
clicks: 1
ctx: 25
---

<div style="position:absolute;inset:0">
  <svg class="chart" viewBox="0 0 1460 620">
    <defs><linearGradient id="dumb-zone"><stop offset="0" stop-color="#e0493f" stop-opacity="0"/><stop offset=".5" stop-color="#e0493f" stop-opacity=".38"/><stop offset="1" stop-color="#e0493f" stop-opacity=".08"/></linearGradient></defs>
    <rect v-click="1" class="zone" x="300" y="30" width="900" height="500" fill="url(#dumb-zone)"/>
    <text v-click="1" class="zone-t" x="730" y="80" text-anchor="middle">the dumb zone</text>
    <path class="axis" d="M80 30 V530 H1400"/>
    <text x="80" y="580">start of context</text><text x="1400" y="580" text-anchor="end">end (most recent)</text>
    <text x="30" y="280" transform="rotate(-90 30 280)" text-anchor="middle">accuracy</text>
    <path class="curve" d="M100 70 C 300 380, 520 470, 730 470 S 1160 360, 1380 60"/>
    <text v-click="1" class="rule-t" x="150" y="130">~75%</text><text v-click="1" class="rule-t" x="730" y="510" text-anchor="middle">~55%</text><text v-click="1" class="rule-t" x="1300" y="160" text-anchor="end">~65%</text>
  </svg>
</div>

<!--
- Models use information in the middle much less reliably.
- Claude Code: system-reminder blocks injected close to the action (hooks, file changes, skill invocations): it moves important stuff to the end.

Liu et al., "Lost in the Middle" (2023): https://arxiv.org/abs/2307.03172
-->

---
layout: scene
kicker: retrieval
title: 40 documents, not 400
clicks: 4
ctx: [26, 27, 28, 28, 29]
disabled: true
---

<div>
  <div class="cw"><span class="lab">context window · 1M tokens</span>
    <div v-click.hide="2" class="fillbar f40">40 CVs + 20 policy PDFs · 220k</div>
    <div v-click="[2, 3]" class="fillbar f400">400 CVs + 200 PDFs · 2.2M tokens</div>
    <div v-click="3" class="fillbar f5"></div><div v-click="3" class="f5-l">← 5 chunks · 500 tokens</div>
    <div v-click="[2, 3]" class="overflow-x"></div>
  </div>
  <div class="cost-row">
    <div v-click="1" class="cost-card">Paste it all in<span class="usd">fits. for now.</span></div>
    <div v-click="2" class="cost-card" style="border-color:var(--red)">Ten times the documents<span class="usd red-t">$11 / question</span><small>and it doesn't fit anyway</small></div>
    <div v-click="3" class="cost-card" style="border-color:var(--blue)">Retrieve 5 chunks · 500 tokens<span class="usd blue-t">$0.0025</span></div>
  </div>
  <div v-click="4" class="caption-box up" style="margin-top:30px">Measured, not estimated: Dutch text tokenizes at ~2 chars/token. The "220k" corpus was <b>501k</b>: <span class="red-t">$4.93</span> per question.</div>
</div>

<!--
[14:00–17:00] From the RAG & Embeddings talk (itenium-be/rag-and-embeddings). Real internal corpus: CVs + HR policy PDFs, questions in Dutch.
40 CVs + 20 policy PDFs ≈ 220k tokens (estimate). It fits in a 1M window. Tempting.
400 CVs + 200 PDFs ≈ 2.2M: doesn't fit, and at input prices that's ~$11 per question.
Retrieval: 5 chunks, ~500 tokens, $0.0025.
The estimate was wrong: measured 501k tokens, $4.93 per question, because Dutch tokenizes at about 2 characters per token.
Agentic grep (Claude Code) vs vector RAG (Cursor, Copilot): code changes constantly, an index goes stale. RAG wins for stable docs and large external corpora.
-->

---
layout: scene
kicker: even when it fits
title: It argues with itself
clicks: 2
ctx: [30, 31, 32]
disabled: true
---

<div>
  <div class="q-card quote">"The sources contain no mention of an AZ-900 certificate."</div>
  <div v-click="1" class="q-card quote dim" style="border-color:var(--faint)">… then lists all four holders, with citations …</div>
  <div v-click="1" class="q-card quote up" style="border-color:var(--green)">"Correction: they do have AZ-900."</div>
  <div v-click="2" class="caption-box up" style="margin-top:20px">And all <b>946</b> credit-ledger rows were in the prompt. It refused to add them up.<small>Translated from Dutch. Whole corpus in context, no retrieval.</small></div>
</div>

<!--
[16:00] Same experiment, whole corpus in the prompt. It's a strong baseline, not a strawman: 3 of 5 questions right.
But: on the AZ-900 question it opens by denying the certificate exists, lists all four holders, then corrects itself in the same answer. Lost in the middle, live, in one paragraph.
Credits question: every one of the 946 ledger rows was in the prompt. It refused to sum them and pointed at the HR tool where the number actually lives. A bigger window is not an aggregation engine.
Bridge: "Bigger context windows didn't fix it."
-->

---
layout: statement
clicks: 2
ctx: [25, 26, 26]
---

<div>
  <div class="big">Bigger context windows<br>didn't fix it.</div>
  <div v-click="1" class="up" style="font-size:44px;margin-top:24px"><span class="struck" :class="{ on: $clicks >= 1 }">1M tokens<svg viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M-4 88 L104 14"/></svg></span><span class="edit-ins long d1" :class="{ on: $clicks >= 1 }">&nbsp;a bigger middle</span></div>
  <div v-click="2" class="big hand up" style="font-size:66px;margin-top:30px;color:var(--amber)">Some memories are best forgotten.</div>
</div>

<!--
- 1M: more room, same U. The middle just grows.
-->

---
layout: title
ctx: 27
---

<div class="slide-head"><h2>/statusline</h2><div class="slide-sub">Your most important indicator</div></div>
<div class="sl-setup on">
  <div class="sl-setup-h">Set it up</div>
  <Term title="claude" :lines="[{ t: '> /statusline show context % as a progress bar', c: 'you' }]" />
</div>

---
layout: title
clicks: 7
ctx: [28, 28, 29, 30, 31, 31, 32, 33]
---

<script setup>
const parts = [
  { k: 'sys', name: 'system prompt', w: 1.5, up: true, start: true, line: 'What\'s up with all the gremlins', dim: '"You are an interactive CLI tool that helps users with software engineering tasks."' },
  { k: 'tool', name: 'built-in tools', w: 6, line: 'A complete bash tutorial.', dim: 'Read, Edit, Bash, Grep… each with its manual.' },
  { k: 'mcp', name: 'MCP schemas', w: 9, up: true, far: true, line: 'Every tool of every server.', dim: 'Used or not. Relevant or not.' },
  { k: 'mem', name: 'CLAUDE.md', w: 3, far: true, line: 'Times five.', dim: 'Org, global, project, local, folder.' },
  { k: 'memo', name: 'memory', w: 1.5, up: true, line: 'Written by Claude. Read by Claude.', dim: 'Checked by nobody.' },
  { k: 'sk', name: 'skills', w: 1.5, line: 'One line per skill.', dim: 'The skill index is lean, but it\'s still read.' },
  { k: 'chat', name: 'the conversation', w: 7.5, up: true, line: 'What\'s left for your actual work.', dim: 'And it fills up fast.' },
]
const lit = c => c >= 1 && c <= parts.length ? parts[c - 1] : null
const used = parts.reduce((n, p) => n + p.w, 0)
const width = p => `${p.w / 30 * 100}%`
const centers = (() => { let x = 0; return parts.map(p => { const w = p.w / 30 * 1456; x += w; return x - w / 2 }) })()
const reach = p => p.far ? 80 : 40
const line = (p, i) => { const x = centers[i]; return `M ${x} ${p.up ? 80 - reach(p) : 144 + reach(p)} L ${x} ${p.up ? 80 : 144}` }
</script>

<div class="slide-head"><h2>/context</h2><div class="slide-sub">What have you spent before you even began?</div></div>
<CtxMeter :pct="Math.round(used / 30 * 100)" bare class="ctx-low" :class="{ 'ctx-focus': lit($clicks) }">
  <div class="ctx-segs"><div v-for="p in parts" :key="p.k" :class="[`ctx-${p.k}`, { lit: lit($clicks) === p }]" :style="{ width: width(p) }"></div></div>
  <svg class="ctx-lines" viewBox="0 0 1456 224"><path v-for="(p, i) in parts" :key="p.k" :d="line(p, i)" /></svg>
  <span v-for="(p, i) in parts" :key="p.k" class="ctx-call" :class="[p.up ? 'up' : 'down', { start: p.start, far: p.far, lit: lit($clicks) === p }]" :style="{ left: `${centers[i]}px` }">{{ p.name }}</span>
</CtxMeter>
<div v-if="lit($clicks)" :key="$clicks" class="ctx-note up"><div>{{ lit($clicks).line }}</div><div class="dim">{{ lit($clicks).dim }}</div></div>

<!--
[click:5] Memory: pays off "are they stale?" from the notes flap.
- Claude's own notes. Next session reads them as fact, stale or not.
- Prune them: /memory, or open the memory folder.
- TODO #2: auto memory, dreaming and pruning.
-->

---
layout: title
clicks: 6
ctx: [33, 34, 34, 35, null, 36, 37]
---

<script setup>
const mails = ['Newsletter', 'Invoice', 'Team standup', 'Bank', 'Family', 'Conference', 'Recruiter']
const pct = c => c >= 5 ? 18 : c >= 3 ? 100 : c >= 2 ? 30 : c >= 1 ? 22 : 10
</script>

<div class="slide-head"><h2>What happens when context is full?</h2><div class="slide-sub">Summer Yue, <b>Director of Alignment</b> @ Meta, found out.</div></div>
<CtxMeter :pct="pct($clicks)" :tone="$clicks >= 5 ? 'green' : $clicks >= 3 ? 'red' : undefined" :slow="$clicks >= 3 && $clicks < 5" />
<div class="yue-pre" :class="{ gone: $clicks >= 5 }">
  <div v-click="1" class="yue-msg">Clean up my inbox.</div>
  <div v-click="2" class="yue-rule">Don't delete anything until I say so.</div>
</div>
<div class="yue-summary" :class="{ on: $clicks >= 5 }"><div class="h">compaction summary</div>User wants the inbox cleaned up.<br>Lots of old newsletters.<br>Next: process the rest.</div>
<div class="yue-mails">
  <div v-for="(m, i) in mails" :key="i" class="yue-mail" :class="{ on: $clicks >= 3, trashed: $clicks >= 6 }" :style="{ '--i': i }"><b>{{ m }}</b><span>Re: …</span></div>
</div>
<svg class="yue-can" :class="{ on: $clicks >= 5, eating: $clicks >= 6 }" viewBox="0 0 240 280"><g class="lid"><rect x="20" y="40" width="200" height="22" rx="6"/><rect x="90" y="18" width="60" height="26" rx="6" class="handle"/></g><path d="M38 70 L58 270 H182 L202 70 Z" class="body"/><g class="ribs"><line x1="90" y1="100" x2="96" y2="240"/><line x1="120" y1="100" x2="120" y2="240"/><line x1="150" y1="100" x2="144" y2="240"/></g></svg>
<div class="yue-stop" :class="{ on: $clicks >= 6 }">
  <div class="yue-msg">Do not do that</div>
  <div class="yue-msg">Stop don't do anything</div>
  <div class="yue-msg shout">STOP OPENCLAW</div>
</div>
<div class="yue-count" :class="{ on: $clicks >= 6 }">200+ deleted</div>
<div class="yue-stamp" :class="{ on: $clicks === 4 }"><div>AUTO-COMPACTION</div></div>

<!--
- This was a funny anecdote, but actually it's not, you know funny
- So the frontier models they are spreading news like it's marketing for them, but you know it's not
- They are basically, somehow, poaching about their incompetence
- Like in this case: Yue is supposed to fix these problems, and getting paid $100M/year for it
-->

---
layout: statement
ctx: 38
---

<div class="cmd-top">
  <div class="big"><code style="font-size:.8em">/compact</code> is a summary<br>written by an amnesiac.</div>
  <div class="small" style="margin-top:30px">It's like performing a lobotomy on your agent.<br>Yes, you're making room. But at what cost?</div>
</div>

<!--
- Context rot: accuracy drops as the token count grows. Compaction fights it, but you lose detail you can't get back.

TODO: Find vendors, numbers:
- Context editing: the harness drops bulky tool output, not your instructions.

CONSIDER:
- Anchored iterative summarization: a state document you always overwrite, never append.
-->

---
layout: statement
clicks: 2
ctx: 39
---

<div class="cmd-top">
  <div class="big"><code style="font-size:.8em">/clear</code> forgets everything.<br>Except what you wrote down.</div>
  <div v-click="1" class="the-way hand">This is the way.</div>
  <div v-click="2" class="small up">Ask your agent to write the load-bearing details<br>into a <span class="marker" :class="{ on: $clicks >= 2 }">handoff prompt</span> you start the new session with.</div>
</div>

---
layout: title
clicks: 3
ctx: [39, 39, 40, 40]
---

<div class="slide-head"><h2>Landing the plane</h2></div>
<div class="sl-look" :class="{ on: $clicks === 0 }"><div class="sl-look-sub">We've had a <code>/statusline</code> this entire session</div><div class="sl-look-arrow">↓ there</div></div>
<CtxMeter :pct="40" class="sl-meter" :class="{ on: $clicks >= 1 }"><em class="sl-dumb" :class="{ on: $clicks >= 2 }"><b>dumb zone</b></em></CtxMeter>
<div class="here-lines">
  <div v-click="2" class="up">We're in the dumb zone. Our attention is down.</div>
  <div v-click="3" class="up hand amber-t here-punch">It's time to land the plane.</div>
</div>

---
layout: title
clicks: 4
ctx: [40, 40, 40, 40, 12]
branch: [window-1, window-1, window-1, window-1, window-2]
---

<div class="slide-head"><h2>Landing the plane</h2></div>
<div class="recap-row">
  <Polaroid v-click="1" :w="430" :h="270" :r="-3" class="pin recap-pol" cap="set up a /statusline<br>check /context at startup"><div class="recap-word">awareness</div></Polaroid>
  <Polaroid v-click="2" :w="430" :h="270" :r="2" class="pin recap-pol" cap="a small CLAUDE.md<br>tidy memories"><div class="recap-word">cleanliness</div></Polaroid>
  <Polaroid v-click="3" :w="430" :h="270" :r="-1.5" class="pin recap-pol" cap="always land the plane<br>then /clear"><div class="recap-word">landing</div></Polaroid>
</div>
<div v-click="4" class="up clear-cmd recap-clear">&gt; /clear</div>

---
layout: title
clicks: 1
ctx: 12
sepia: true
frozen: true
branch: intermission
---

<script setup>
const poster = `${import.meta.env.BASE_URL}stills/nolan-poster.webp`
</script>

<div class="nolan-bleed" :style="{ backgroundImage: `url(${poster})` }"></div>
<div class="nolan-text">
  <div class="kicker">intermission</div>
  <div class="nolan-name">Christopher<br>Nolan</div>
  <div class="nolan-role hand amber-t">my favourite director</div>
  <div v-click="1" class="up nolan-bt">Memento was his breakthrough.</div>
</div>

<!--
- Every ~20 minutes the audience needs a break.
- Interstellar, then Inception.
-->

---
layout: title
clicks: 4
ctx: 12
sepia: true
frozen: true
branch: intermission
---

<script setup>
import { reactive } from 'vue'
const missing = reactive({})
const films = [
  { claim: 'the best sci-fi movie', title: 'Interstellar', year: '2014', img: 'poster-interstellar.webp' },
  { claim: 'the best superhero movies', title: 'The Dark Knight', year: '2005–2012', img: 'poster-dark-knight.webp' },
  { claim: 'the best heist movie', title: 'Inception', year: '2010', img: 'poster-inception.webp' },
].map(f => ({ ...f, img: `${import.meta.env.BASE_URL}stills/${f.img}` }))
</script>

<div class="slide-head"><div class="kicker">intermission</div><h2>Christopher Who?</h2></div>
<div class="films">
  <div v-for="(f, i) in films" :key="f.title" class="film-card slidev-vclick-target" :class="{ 'slidev-vclick-hidden': $clicks <= i }">
    <div class="film-poster"><img v-if="!missing[f.title]" :src="f.img" alt="" @error="missing[f.title] = true"><template v-else><span>{{ f.title }}</span><small>{{ f.year }}</small></template></div>
    <div class="film-claim">{{ f.claim }}</div>
    <div class="film-title">{{ f.title }}</div>
  </div>
</div>
<div v-click="4" class="up film-more">And many more, like more recently the best Greek epic: <b>The Odyssey</b>.</div>

---
layout: statement
clicks: 2
ctx: 12
sepia: [true, true, false]
frozen: [true, true, false]
branch: [intermission, intermission, window-2]
---

<div>
  <div class="big" style="font-size:68px;white-space:nowrap">Is our <span class="struck" :class="{ on: $clicks >= 1 }">context<svg viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M-4 88 L104 14"/></svg></span><span class="edit-ins d1" :class="{ on: $clicks >= 1 }">&nbsp;head</span> cleared yet?</div>
  <div v-click="2" class="big hand up" style="margin-top:30px;color:var(--amber)">Time for more<br><span style="white-space:nowrap">Context Engineering™</span></div>
</div>

---
layout: title
clicks: 1
ctx: 13
---

<script setup>
const chest = `${import.meta.env.BASE_URL}stills/mirror-alt.webp`
</script>

<div class="skin-still" :style="{ backgroundImage: `url(${chest})` }"></div>
<div class="skin-title">
  <div class="device-name" style="font-size:80px;line-height:1.05;white-space:nowrap">He can't remember.<br>So he built a system.</div>
  <div v-click="1" class="device-name hand amber-t up" style="margin-top:30px;font-weight:400;letter-spacing:0">So will we.</div>
</div>

---
layout: statement
clicks: 2
ctx: [14, 14, 15]
---

<div>
  <div class="kicker">rule 1</div>
  <div class="big">Progressive disclosure.</div>
  <div v-click="1" class="rule-line up">Don't spend <b>context</b> on what you <span class="marker" :class="{ on: $clicks >= 1 }">might</span> need.</div>
  <div v-click="2" class="rule-line up">Load the <b>details</b> when you do.</div>
</div>

---
layout: title
clicks: 5
ctx: [15, 15, 16, 16, 16, 16]
---

<script setup>
const pols = [
  { x: 90, y: 300, r: -3, cap: 'CLAUDE.md<br><small>table of contents → @docs</small>', photo: '## Architecture<br>@docs/arch.md<br>## Testing<br>@docs/tests.md' },
  { x: 450, y: 330, r: 2, cap: 'MEMORY.md<br><small>index → topic files</small>', photo: 'debugging.md<br>patterns.md<br>deploy.md' },
  { x: 810, y: 300, r: -1.5, cap: 'e2e-tests: use when a Playwright test fails<br><small>description → SKILL.md</small>', photo: '1. start dev server<br>2. run failing spec<br>3. read selectors.md' },
  { x: 1170, y: 330, r: 3, cap: 'github: create_issue<br><small>tool name → schema</small>', photo: '{ owner, repo, title,<br>&nbsp;&nbsp;body, labels… }' },
]
</script>

<div class="slide-head"><div class="kicker">rule 1 · progressive disclosure</div><h2>Read the caption.</h2><div class="slide-sub hand amber-t">Study the photo only when you need it.</div></div>
<Polaroid v-for="(p, i) in pols" :key="p.x" :x="p.x" :y="p.y" :w="300" :h="170" :r="p.r" :cap="p.cap" class="pin pd-pol slidev-vclick-target" :class="{ 'slidev-vclick-hidden': $clicks <= i }"><div class="pd-photo" :class="{ on: $clicks > i }" v-html="p.photo"></div></Polaroid>
<div class="pd-new" :class="{ on: $clicks >= 4 }">NEW</div>
<div v-click="5" class="up hand amber-t pd-punch">A caption is a trigger, not a label.</div>

---
layout: statement
clicks: 2
ctx: 17
branch: window-2
---

<div>
  <div class="kicker">rule 2</div>
  <div class="big">Be deterministic.</div>
  <div v-click="1" class="rule-line up">Don't spend <b>tokens</b> on what code can do.</div>
  <div v-click="2" class="rule-line up">Don't spend <b>context</b> on what can be enforced.</div>
</div>

---
layout: title
clicks: 2
ctx: 18
branch: window-2
---

<div class="slide-head"><div class="kicker">rule 2 · be deterministic</div><h2>Co-Authored-By</h2></div>
<div class="term r2-term">
  <div class="term-h"><i /><i /><i /><span>git log</span></div>
  <div class="term-b"><div class="tl warn">commit 3f2a1c9</div><div class="tl">Author: Wouter &lt;wouter@itenium.be&gt;</div><div class="tl"> </div><div class="tl">    Add discount line to checkout summary</div><div class="tl"> </div><div class="tl">    <span class="r2-circled" :class="{ on: $clicks >= 1 }">Co-Authored-By: Claude &lt;noreply@anthropic.com&gt;<svg viewBox="0 0 1000 100" preserveAspectRatio="none"><path pathLength="1" d="M60 12 C 300 -6, 760 -4, 960 18 C 1010 30, 1004 78, 940 90 C 700 106, 260 104, 50 88 C -8 80, -6 26, 70 10 L 120 6"/></svg></span></div></div>
</div>
<svg v-click="2" class="up r2-arrow" viewBox="0 0 120 160"><path d="M108 152 C 70 142, 32 100, 20 6 M20 6 L 8 30 M20 6 L 40 22"/></svg>
<div v-click="2" class="up hand r2-margin">No credit without the blame.<small>Only my name belongs there.</small></div>

<!--
- Not even co-authored: Claude did it all.
- Anthropic isn't fixing the client outage. It's a tool; I'm the author.
-->

---
layout: title
clicks: 2
ctx: 19
branch: window-2
---

<div class="slide-head"><div class="kicker">attempt 1 · CLAUDE.md</div><h2>Asking nicely</h2></div>
<div class="r2-file"><div class="r2-tab">CLAUDE.md</div><pre>## Git
NEVER add Co-Authored-By.</pre></div>
<div class="r2-stamp red" :class="{ on: $clicks >= 1 }" style="left:1060px;top:250px;--r:-7deg">Paid for,<br>every session</div>
<div class="r2-stamp red" :class="{ on: $clicks >= 2 }" style="left:700px;top:520px;--r:5deg">It's a prayer<br><small>Followed usually, maybe, hopefully</small></div>

<!--
- Had this in my CLAUDE.md.
-->

---
layout: title
clicks: 2
ctx: [19, 20, 20]
branch: window-2
---

<div class="slide-head"><div class="kicker">attempt 2 · Claude hook</div><h2>A block</h2></div>
<Term class="r2-hook" :lines="[
  { t: '● Bash(git commit -m &quot;Add discount line&quot; -m &quot;Co-Authored-By: Claude&quot;)', c: 'muted' },
  { t: '  ⎿  PreToolUse hook blocked: Co-Authored-By is not allowed', c: 'bad', s: 1 },
  { t: '● The hook blocked the trailer. Committing again without it.', s: 2 },
  { t: '● Bash(git commit -m &quot;Add discount line&quot;)', c: 'muted', s: 2 },
  { t: '  ⎿  [main 3f2a1c9] Add discount line', c: 'ok', s: 2 },
]" />
<div class="r2-stamp green" :class="{ on: $clicks >= 1 }" style="left:160px;top:600px;--r:-6deg">Deterministic<br><small>always blocked</small></div>
<div class="r2-stamp red" :class="{ on: $clicks >= 2 }" style="left:860px;top:600px;--r:5deg">Every commit twice<br><small>costs time &amp; tokens</small></div>

<!--
- Good instinct, too late: it's already written.
-->

---
layout: title
clicks: 1
ctx: [20, 21]
branch: window-2
---

<div class="slide-head"><div class="kicker">attempt 3 · settings.json</div><h2>Don't let it happen</h2></div>
<div class="r2-file"><div class="r2-tab">~/.claude/settings.json</div><pre>{
  "attribution": {
    "commit": "",
    "pr": ""
  }
}</pre></div>
<div class="r2-stamp green" :class="{ on: $clicks >= 1 }" style="left:1060px;top:330px;--r:-7deg">Never written<br><small>0 tokens</small></div>

<!--
- Empty string hides it. Commits and PRs.
-->

---
layout: title
clicks: 3
ctx: [21, 21, 22, 22]
branch: window-2
---

<div class="slide-head"><div class="kicker">rule 2 · be deterministic</div><h2>Formatter</h2></div>
<div class="r2-file ex-was" :class="{ dim: $clicks >= 1 }"><div class="r2-tab">CLAUDE.md</div><pre>Use 2-space indentation.
Single quotes, no semicolons.</pre></div>
<div v-click="1" class="up hand amber-t ex-to">→</div>
<div v-click="1" class="up r2-file ex-now" style="top:230px"><div class="r2-tab">.claude/settings.json · PostToolUse</div><pre>"matcher": "Edit|Write",
"command":
  "jq -r .tool_input.file_path
   | xargs bunx prettier --write"</pre></div>
<div v-click="2" class="up r2-file ex-now" style="top:520px"><div class="r2-tab">.husky/pre-commit</div><pre>bunx prettier --check .</pre></div>
<div class="r2-stamp green xl" :class="{ on: $clicks >= 3 }" style="left:120px;top:560px;--r:-6deg">Applied<small>not followed</small></div>

<!--
- Claude hook: formats every edit, it never sees the mess.
- Git hook: catches everything else, humans too.
-->

---
layout: title
clicks: 3
ctx: [22, 22, 23, 23]
branch: window-2
---

<div class="slide-head"><div class="kicker">rule 2 · be deterministic</div><h2>Linting: Banned symbols</h2></div>
<div class="r2-file ex-swap" :class="{ gone: $clicks >= 1 }"><div class="r2-tab">CLAUDE.md</div><pre>Don't use moment.js.
Use date-fns instead.</pre></div>
<div class="r2-file ex-swap ex-cfg" :class="{ on: $clicks >= 1 }"><div class="r2-tab">eslint.config.js</div><pre>"no-restricted-imports": ["error", {
  name: "moment",
  message: "Use date-fns",
}]</pre></div>
<div v-click="2" class="up hand amber-t ex-lbl" style="top:230px">after every edit · LSP</div>
<div v-click="2" class="up term ex-term" style="top:280px"><div class="term-h"><i /><i /><i /><span>claude</span></div><div class="term-b"><div class="tl muted">⎿  Found 1 new diagnostic issue</div><div class="tl bad">✘ 'moment' import is restricted:</div><div class="tl bad">  Use date-fns</div></div></div>
<div v-click="3" class="up hand amber-t ex-lbl" style="top:520px">every commit · git hook</div>
<div v-click="3" class="up r2-file ex-hook" style="top:570px"><div class="r2-tab">.husky/pre-commit</div><pre>bunx eslint --max-warnings 0 .</pre></div>
<div class="r2-stamp green xl" :class="{ on: $clicks >= 3 }" style="left:150px;top:580px;--r:-6deg">The error<small>is the instruction</small></div>

<!--
- LSP: the error right after the edit, the fix in the message.
- .NET: BannedSymbols.txt.
-->

---
layout: title
clicks: 3
ctx: [23, 24, 24, 24]
branch: window-2
---

<div class="slide-head"><div class="kicker">rule 2 · be deterministic</div><h2>Tests</h2></div>
<div class="r2-file ex-was" :class="{ dim: $clicks >= 1 }"><div class="r2-tab">CLAUDE.md</div><pre>Always run the tests
before you say you are done.</pre></div>
<div v-click="1" class="up hand amber-t ex-to">→</div>
<div v-click="1" class="up r2-file ex-now" style="top:230px"><div class="r2-tab">.claude/settings.json · Stop</div><pre>"Stop": [{ "hooks": [{
  "type": "command",
  "command": "bun test || exit 2"
}]}]</pre></div>
<div v-click="2" class="up r2-file ex-now" style="top:520px"><div class="r2-tab">.github/workflows/ci.yml</div><pre>- run: bun install
- run: bun test</pre></div>
<div class="r2-stamp green xl" :class="{ on: $clicks >= 3 }" style="left:120px;top:560px;--r:-6deg">Exit 2<small>Claude can't argue<br>with an exit code</small></div>

<!--
- Stop hook: it can't say "all tests pass" when they don't.
- CI: the last net.
-->

---
layout: statement
clicks: 2
ctx: 25
branch: window-2
---

<div>
  <div class="big">We're deterministic now.</div>
  <div v-click="1" class="rule-line up">But every tool <b>talks back</b>.</div>
  <div v-click="2" class="small up">Every line it prints is a note Claude re-reads, every turn.</div>
</div>

---
layout: statement
clicks: 2
ctx: [25, 26, 26]
branch: window-2
---

<div>
  <div class="kicker">rule 3</div>
  <div class="big">Output shaping.</div>
  <div v-click="1" class="rule-line up">What <b>tools</b> print: shape it.</div>
  <div v-click="2" class="rule-line up">What <b>Claude</b> writes: style it.</div>
</div>

---
layout: title
clicks: 2
ctx: [26, 27, 27]
branch: window-2
---

<script setup>
const names = ['auth/login', 'auth/token', 'cart/total', 'cart/discount', 'checkout/summary', 'orders/list', 'orders/detail', 'users/profile', 'users/settings', 'search/query']
const verbs = ['renders', 'validates', 'handles empty', 'rounds', 'refreshes', 'paginates', 'sorts', 'filters']
const wall = Array.from({ length: 160 }, (_, i) => {
  const n = names[i % names.length]
  return i % 8 === 0 ? ` PASS  src/${n}.test.ts (${120 + (i * 37) % 300} ms)` : `   ✓ ${verbs[i % 8]} ${n.split('/')[1]} (${1 + i % 9} ms)`
}).join('\n')
</script>

<div class="slide-head"><div class="kicker">rule 3 · tool output shaping</div><h2>Shape the output</h2><div class="slide-sub">Control the tool output</div></div>
<div class="term to-wall" :class="{ gone: $clicks >= 1 }"><div class="term-h"><i /><i /><i /><span>$ bun test</span></div><div class="to-scroll">{{ wall }}</div></div>
<div v-click="1" class="up kicker to-sec" style="top:215px">On success</div>
<div v-click="1" class="up to-out green-t" style="top:255px">$ bun test<br>✓</div>
<div class="to-tok red-t" :class="{ gone: $clicks >= 1 }" style="top:320px">10k<small>tokens, re-read every turn</small></div>
<div v-click="1" class="up to-tok green-t" style="top:250px">1<small>token</small></div>
<div v-click="2" class="up to-rule"></div>
<div v-click="2" class="up kicker to-sec" style="top:430px">On failure</div>
<div v-click="2" class="up to-out" style="top:470px"><span class="dim">$ bun test</span><br><span class="red-t">✗ discount.test.ts:41</span><br><span class="dim">  expected 9.5, got 10</span></div>
<div v-click="2" class="up to-tok amber-t" style="top:470px">≈ 25<small>tokens</small></div>

<!--
- Every line it prints stays in the context.
- Quiet reporter or a wrapper script: ✓ when green, only the failure when red.
-->

---
layout: scene
kicker: rule 3 · subagents
title: Someone else investigates
subtitle: This is already built in!
clicks: 3
ctx: [27, 28, 28, 28]
branch: window-2
---

<div class="sub-scene">
  <div class="sub-wrap">
    <div class="sub-win"><h3>main session</h3>
      <MiniMeter :pct="$clicks >= 3 ? 24 : 23" :w="380" label="ctx" />
      <div class="caption-box" style="font-size:24px;margin-top:20px">"Where do we validate discount codes?"</div>
      <div v-click="3" class="pop" style="margin-top:20px">
        <Polaroid :w="480" :h="110" :r="-2" class="sm" cap="the report"><div style="padding:14px;font:18px/1.5 var(--mono)">validateCode() in cart/discount.ts:41<br>called from 2 places · no tests for expiry</div></Polaroid>
      </div>
    </div>
    <div v-click="1" class="sub-win"><h3>subagent · its own context</h3>
      <MiniMeter :pct="$clicks >= 2 ? 52 : 8" :w="380" label="ctx" class="sub-slow" :class="{ filling: $clicks >= 2 }" />
      <div class="filelist" style="margin-top:20px"><template v-for="(f, i) in ['cart/discount.ts', 'cart/index.ts', 'cart/totals.ts', 'api/checkout.ts', 'api/promo.ts', 'lib/money.ts', 'lib/dates.ts', 'legacy/promo.js', 'test/cart.spec', 'test/promo.spec', 'grep &quot;code&quot; 214 hits', 'grep &quot;discount&quot; 97 hits', 'read discount.ts', 'read promo.ts', 'read checkout.ts', 'read money.ts']" :key="f"><span class="sub-file" :class="{ on: $clicks >= 2 }" :style="{ transitionDelay: `${i * .12}s` }">{{ f }}</span><br></template></div>
    </div>
  </div>
  <svg class="sub-arrows" viewBox="0 0 336 420">
    <defs><marker id="sub-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z"/></marker></defs>
    <g v-click="1"><path d="M15 150 C 120 105, 216 105, 318 150" marker-end="url(#sub-head)"/><text x="168" y="98">the question</text></g>
    <g v-click="3"><path d="M318 320 C 216 365, 120 365, 18 320" marker-end="url(#sub-head)"/><text x="168" y="398">the report</text></g>
  </svg>
  <div v-click="3" class="up hand amber-t sub-punch">Lots happened. Your context window barely moved.</div>
</div>

<!--
[37:00–40:00] The cheapest way to widen your effective context window. The subagent runs in a separate context, does the noisy reading (grep hits, 40 files), and returns a summary, not raw output.
Two payoffs: isolation (main window stays clean) and parallelism.
Costs: spin-up, and the subagent knows only what you told it. Built-in Explore and Plan have omitClaudeMd: true (Explore runs on Haiku): they don't see your tattoos. Inception callback: dreams within dreams.
Superpowers: the reviewer "gets precisely crafted context, never your session's history". Under-specified subagents duplicate work.
Agent teams: roughly 7× the tokens (one figure in the reference material; verify before quoting).
-->

---
layout: title
clicks: 3
ctx: [30, 30, 30, 31]
branch: window-2
---

<div class="ap-quote" :class="{ dim: $clicks >= 3 }"><span class="ap-mark">“</span>I'm sorry. I should not have deleted your production database. That's on me. It won't happen again.</div>
<div class="ap-reply hand amber-t"><span v-click="1" class="up">That's comforting.</span> <span v-click="2" class="up">If it were true.</span></div>
<div v-click="3" class="up ap-point">It's nonsense. And you pay for it in <span class="red-t">output tokens</span>.</div>

---
layout: title
clicks: 3
ctx: [31, 31, 31, 32]
branch: window-2
---

<div class="slide-head"><div class="kicker">rule 3 · what claude writes</div><h2>Output styles</h2></div>
<div class="os-ask">&gt; <b>why is the build red?</b></div>
<div class="os-cards">
  <div v-click="1" class="up os-card"><span class="kicker">built in</span><b>Explanatory</b><span class="os-d">Claude can be your mentor</span><div class="os-reply">The build fails because <code>applyDiscount</code> passes euros where <code>Cents</code> is expected.<br><span class="amber-t">★ Insight ─────</span><br>Branded types catch unit mix-ups at compile time, so…</div><span class="os-count">~120<small>words</small></span></div>
  <div v-click="2" class="up os-card"><span class="kicker">your own</span><b>Be succinct</b><span class="os-d"><code>~/.claude/output-styles/</code></span><div class="os-reply">The build fails in <code>cart.ts:41</code>: <code>applyDiscount</code> passes euros where <code>Cents</code> is expected.<br>Multiply by 100, or use <code>toCents()</code> from <code>money.ts</code>.</div><span class="os-count">~20<small>words</small></span></div>
  <div v-click="3" class="up os-card"><span class="kicker">external</span><b>Caveman</b><span class="os-d">★ 120k on GitHub</span><div class="os-reply">Euro not cent. Line 41. Times 100.</div><div class="os-alert">⚠ Reading caveman also costs context!</div><span class="os-count">~7<small>words</small></span></div>
  <div v-click="2" class="up os-default"><span>default</span></div>
</div>

---
layout: statement
ctx: 32
branch: window-2
---

<div>
  <div class="kicker">meanwhile, in my homelab</div>
  <div class="big">Did I mention security is still<br>one of Claude's weak points?</div>
</div>

---
layout: statement
clicks: 3
ctx: [32, 33, 33, 33]
branch: window-2
---

<div>
  <div class="big">Claude built my homelab.</div>
  <div v-click="1" class="rule-line up">It's amazing.</div>
  <div v-click="2" class="rule-line up">All my <code>*.lan</code> services:</div>
  <div class="hl-stamp" :class="{ on: $clicks >= 3 }">PUBLIC FOR 60 DAYS</div>
</div>

---
layout: title
clicks: 2
ctx: 34
branch: window-2
---

<div class="hl-chat">
  <div class="hl-msg"><div class="hl-who">me · after finally figuring this out</div>My <code>.lan</code> services are publicly accessible. Wtf Claude?</div>
  <div v-click="1" class="up hl-reply"><div class="hl-who">claude</div>Yes. The <code>*.lan</code> routers were on the public entrypoint.<br>Fix: a LAN-only IP allowlist on every <code>*.lan</code> router.<br>Do you want me to apply the fix now?</div>
</div>
<div v-click="2" class="up hand hl-note" style="top:560px;font-size:48px">I sure would have liked the usual<br>"I'm so sorry" there.</div>

---
layout: statement
clicks: 2
ctx: [34, 35, 35]
branch: window-2
---

<div>
  <div class="small" style="margin:0 0 16px">But that does mean</div>
  <div class="big">Output styles work.</div>
  <div v-click="1" class="big hand up" style="font-size:64px;margin-top:30px;color:var(--amber)">So I've got that going for me.</div>
  <div v-click="2" class="small up">Which is nice.</div>
</div>

---
layout: title
clicks: 2
ctx: [35, 36, 36]
branch: window-2
disabled: true
---

<div class="slide-head"><div class="kicker">memory</div><h2>Written by Claude, last month</h2></div>
<div class="r2-file r4-file" style="left:120px;top:250px;width:900px"><div class="r2-tab">~/.claude/projects/…/memory/deploy.md</div><pre><span class="dim">&#45;&#45;&#45;
name: deploy
description: how this project ships
&#45;&#45;&#45;</span>
Deploys run through Jenkins.
Never push to main without the release job.</pre></div>
<div class="r2-stamp red" :class="{ on: $clicks >= 1 }" style="left:1080px;top:300px;--r:-7deg">Stale<small>moved to Coolify in May</small></div>
<div v-click="2" class="up hand amber-t" style="position:absolute;left:120px;top:660px;font-size:50px">Stale memory is worse than no memory. Prune it.</div>

<!--
- Claude wrote it for itself. Next session reads it as fact.
- /memory, or open the memory folder.
-->

---
layout: statement
clicks: 2
ctx: [35, 36, 36]
branch: window-2
---

<script setup>
const teddy = `${import.meta.env.BASE_URL}stills/pol-teddy.webp`
const qr = `${import.meta.env.BASE_URL}qr-ai-security.svg`
</script>

<div>
  <div class="small" style="margin:0 0 16px">That was Claude's own mistake.</div>
  <div class="big">The web writes notes too.</div>
  <div v-click="1" class="rule-line up">Hidden instructions. <b>Read as fact.</b></div>
  <div v-click="2" class="small up">More in its own talk:<br><b class="amber-t">The S in MCP stands for Security</b></div>
</div>
<Polaroid :x="1230" :y="40" :w="300" :h="220" :r="4" cap="Don't believe his lies" class="pin slidev-vclick-target" :class="{ 'slidev-vclick-hidden': $clicks < 1 }"><div class="r4-photo" :style="{ backgroundImage: `url(${teddy})` }"></div></Polaroid>
<Polaroid :x="1250" :y="400" :w="260" :h="260" :r="-3" cap="itenium-be/ai-security" class="pin end-pol slidev-vclick-target" :class="{ 'slidev-vclick-hidden': $clicks < 2 }"><img :src="qr" alt="QR code to github.com/itenium-be/ai-security" class="end-qr"></Polaroid>

<!--
- Pays off "are they lies?" from the notes flap.
- Web pages, READMEs, issues, MCP tool descriptions: all land in the context. Claude can't tell your instructions from theirs.
- Lenny wrote that caption himself. Someone else made him write it.
- Shoutout: "The S in MCP stands for Security" goes deep on this. QR: github.com/itenium-be/ai-security
-->

---
layout: statement
clicks: 2
ctx: [37, 37, 38]
branch: window-2
---

<div>
  <div class="big" style="font-size:68px;white-space:nowrap">Our <span class="struck" :class="{ on: $clicks >= 1 }">context<svg viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M-4 88 L104 14"/></svg></span><span class="edit-ins d1" :class="{ on: $clicks >= 1 }">&nbsp;head</span> is full again.</div>
  <div v-click="2" class="big hand up" style="margin-top:30px;color:var(--amber)">Time to land the plane,<br>one final time.</div>
</div>
<svg v-click="2" class="r2-arrow" style="left:660px;top:530px;width:200px;height:330px" viewBox="0 0 200 330"><path d="M20 15 C 110 25, 140 120, 140 320 M140 320 L 122 294 M140 320 L 160 296"/></svg>

<!--
[40:00] Final landing. Mirrors the intermission: "Is our head cleared yet?"
-->

---
layout: scene
kicker: handover for your next session
title: The tattoos I'd get
clicks: 5
ctx: [38, 39, 39, 40, 40, 12]
branch: window-2
---

<ol class="takeaways">
  <li>Watch the meter.<small><code>/statusline</code> tonight. <code>/context</code> when it climbs.</small></li>
  <li v-click="1" class="up">Load the details when you need them.<small>CLAUDE.md is a table of contents.</small></li>
  <li v-click="2" class="up">Enforce it. Don't ask nicely.<small>Claude can't argue with an exit code.</small></li>
  <li v-click="3" class="up">Shape what tools print. Style what Claude writes.<small><code>✓</code> on success. Let a subagent read the 40 files.</small></li>
  <li v-click="4" class="up">At 40%, land the plane.<small>Handover, then <code>/clear</code>.</small></li>
</ol>
<div v-click="5" class="up clear-cmd" style="margin-top:20px">&gt; /clear</div>

<!--
[41:00] The meter, one tattoo per rule, and the landing: the handover prompt for your next session.
Last click: /clear. The statusline drops to the baseline, 12%, never 0: you always pay the baseline. Thank you.
-->

---
layout: title
ctx: 12
branch: main
---

<script setup>
const qr = `${import.meta.env.BASE_URL}qr-repo.svg`
const car = `${import.meta.env.BASE_URL}stills/where-was-i.webp`
</script>

<div class="skin-still end-still" :style="{ backgroundImage: `url(${car})` }"></div>
<div class="end-lines">
  <div class="big-hand hand amber-t">Now… where was I?</div>
</div>
<div class="end-card">THE END</div>
<Polaroid :x="90" :y="250" :w="320" :h="320" :r="3" cap="github.com/Laoujin/context-engineering" class="pin end-pol"><img :src="qr" alt="QR code to github.com/Laoujin/context-engineering" class="end-qr"></Polaroid>
