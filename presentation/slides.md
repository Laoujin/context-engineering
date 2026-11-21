---
theme: ./theme
title: Some Memories Are Best Forgotten
titleTemplate: "%s"
favicon: favicon.png
info: Context engineering for coding agents.
layout: title
ctx: 12
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
ctx: 12
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
-->

---
layout: title
clicks: 1
ctx: 14
---

<Flap still="polaroid.png" focus="0% center" was="Polaroids" was-sub="pulled out when needed" fix="skills" fix-sub="loaded when the caption matches" />

<!--
Polaroids: he can't carry everything on his skin, so he pulls out the right photo when he needs it. The caption tells him who it is.
Click: Polaroids → skills. The caption is the skill's description: it decides when the rest gets loaded.
Progressive disclosure gets its own slide later.
-->

---
layout: title
clicks: 1
ctx: 15
---

<Flap still="note.png" focus="100% center" right was="Notes" was-sub="by him: are they stale?<br>by others: are they lies?" fix="Notes" fix-sub="memories: are they stale?<br>the web: are they lies?" />

<!--
Notes: everything he writes down or gets handed in the moment. Some by himself, some by others. Every one of them reads as fact the next time.
Click: Notes → Claude's notes. Its memory, written by itself: is it stale? The web, written by strangers: is it lying? He can't tell. Neither can Claude.
Sets up poisoning and stale memory in window 2.
-->

---
layout: title
clicks: 2
ctx: 16
---

<script setup>
const mirror = `${import.meta.env.BASE_URL}stills/mirror-solo.png`
</script>

<div class="skin-still" :style="{ backgroundImage: `url(${mirror})` }"></div>
<div class="skin-title">
  <div class="device-name" style="font-size:80px;line-height:1.05;margin-bottom:30px">Every session is a new scene.</div>
  <div class="flap" :class="{ flipped: $clicks >= 1 }">
    <div class="flap-face front"><div class="flap-sub">First thing he does:</div><div class="device-name">read his tattoos.</div></div>
    <div class="flap-face back"><div class="flap-sub">First thing Claude does:</div><div class="device-name hand amber-t"><span class="stamp-host">read CLAUDE.md<span class="stamp" :class="{ on: $clicks >= 2 }">×4</span></span></div></div>
  </div>
</div>
<div class="claudemd-levels" :class="{ on: $clicks >= 2 }">global · project · local · folder</div>

<!--
He wakes up somewhere he doesn't recognise. First thing: check the arm, the mirror, the tattoos.
Click: the board flips. Claude does the same at the start of every session: CLAUDE.md first.
Click: ×4. Global (~/.claude), project (in git), local (just you), and one per folder it works in.
Then: "But that's not all it reads."
-->

---
layout: title
clicks: 7
ctx: [16, 16, 17, 17, 17, 18, 18, 18]
---

<script setup>
const cards = [
  { x: 120, y: 190, r: -5, h: 100, body: 'system prompt', cap: 'never seen it', s: 1 },
  { x: 450, y: 170, r: 3, h: 100, body: 'CLAUDE.md ×4', cap: 'the one you wrote', s: 2, mine: true },
  { x: 930, y: 170, r: -2, h: 100, body: 'MCP tool schemas', cap: 'every tool', s: 3 },
  { x: 1260, y: 190, r: 4, h: 100, body: 'skills index', cap: 'every caption', s: 4 },
  { x: 120, y: 560, r: 3, h: 80, body: 'memory index', cap: 'MEMORY.md', s: 5 },
  { x: 1260, y: 560, r: -4, h: 80, body: 'system reminders', cap: 'near the action', s: 6 },
]
const strings = [[230, 240], [560, 215], [1040, 215], [1370, 240], [230, 610], [1370, 610]]
</script>

<div class="cork"></div>
<div class="wall-title"><div class="kicker">but wait</div><h2>You have more tattoos than you think</h2></div>
<svg class="wall-strings" viewBox="0 0 1600 854"><line v-for="([x, y], i) in strings" :key="i" :x1="x" :y1="y" x2="800" y2="470" class="slidev-vclick-target" :class="{ 'slidev-vclick-hidden': $clicks <= i }"/></svg>
<Polaroid v-for="c in cards" :key="c.body" :x="c.x" :y="c.y" :w="200" :h="c.h" :r="c.r" :cap="c.cap" class="pin sm slidev-vclick-target" :class="{ 'slidev-vclick-hidden': $clicks < c.s, mine: c.mine }"><div class="wall-card">{{ c.body }}</div></Polaroid>
<Polaroid :x="640" :y="360" :w="300" :h="150" :r="1" cap="what Claude actually reads" class="pin prompt-card"><div class="wall-card prompt">THE PROMPT</div></Polaroid>
<div v-click="7" class="up hand amber-t wall-punch">And you only wrote one of them.</div>

<!--
- System prompt: pages of instructions you never see.
- MCP: every tool of every server, every turn.
- System reminders: hooks, file changes, skills.
-->

---
layout: title
clicks: 3
ctx: [18, 19, 20, 21]
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
  <div class="big"><span class="dim">Prompt:</span> one sentence.<br><span class="dim">Context:</span> the whole screenplay.</div>
  <div v-click="1" class="small up">Context engineering: curating <b>everything the model sees</b>, every turn.</div>
</div>

<!--
[7:00] Prompt engineering was 2023. You wrote one clever sentence.
Context engineering: the system prompt, CLAUDE.md, tool schemas, skills index, memory, system reminders, every tool result and every reply. All of it is "the prompt".
Tobi Lütke's definition: "the art of providing all the context for the task to be plausibly solvable by the LLM."
-->

---
layout: scene
kicker: so it re-reads everything
title: Who cares?
clicks: 3
ctx: [22, 23, 24, 25]
---

<script setup>
const base = import.meta.env.BASE_URL
const photos = ['lenny_000905', 'mirror-room', 'lenny_003710', 'polaroid-dodd', 'lenny_004850', 'mirror-alt', 'lenny_014600', 'mirror-reflection'].map(p => `${base}stills/${p}.webp`)
let seed = 7
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647
const pile = Array.from({ length: 40 }, (_, i) => {
  const spread = i < 3 ? 120 : i < 12 ? 300 : 420
  return { x: 400 + (rnd() - .5) * 2 * spread, y: 230 + (rnd() - .5) * spread * .85, r: (rnd() - .5) * 40, at: i < 3 ? 0 : i < 12 ? 1 : 2, photo: photos[i % photos.length] }
})
const hit = [1, 7, -1]
const labels = ['found it', 'took a while', "it's in there… somewhere"]
const lenny = `${base}stills/lenny.webp`
</script>

<div v-for="(p, i) in pile" :key="i" class="pile-pol slidev-vclick-target" :class="{ 'slidev-vclick-hidden': $clicks < p.at, hit: hit[Math.min($clicks, 2)] === i }" :style="{ left: `${p.x}px`, top: `${p.y}px`, '--r': `${p.r}deg`, zIndex: i, '--photo': `url(${p.photo})` }"></div>
<div class="pile-who">
  <div class="pile-avatar" :style="{ backgroundImage: `url(${lenny})` }"></div>
  <div class="pile-lbl hand">{{ labels[Math.min($clicks, 2)] }}</div>
  <div v-click="3" class="up hand amber-t pile-punch">More polaroids, harder to find the right one.</div>
</div>

---
layout: scene
kicker: claude is the same
title: Lost in the middle
clicks: 1
ctx: [27, 29]
---

<div style="position:absolute;inset:0">
  <svg class="chart" viewBox="0 0 1460 620">
    <defs><linearGradient id="dumb-zone"><stop offset="0" stop-color="#e0493f" stop-opacity="0"/><stop offset=".5" stop-color="#e0493f" stop-opacity=".38"/><stop offset="1" stop-color="#e0493f" stop-opacity=".08"/></linearGradient></defs>
    <rect v-click="1" class="zone" x="300" y="30" width="900" height="500" fill="url(#dumb-zone)"/>
    <text v-click="1" class="zone-t" x="730" y="80" text-anchor="middle">the dumb zone</text>
    <path class="axis" d="M80 30 V530 H1400"/>
    <text x="80" y="580">start of context</text><text x="1400" y="580" text-anchor="end">end (most recent)</text>
    <text x="30" y="280" transform="rotate(-90 30 280)" text-anchor="middle">how reliably it's used</text>
    <path class="curve" d="M100 70 C 300 380, 520 470, 730 470 S 1160 360, 1380 60"/>
    <text v-click="1" class="rule-t" x="150" y="130">~75%</text><text v-click="1" class="rule-t" x="730" y="510" text-anchor="middle">~55%</text><text v-click="1" class="rule-t" x="1300" y="160" text-anchor="end">~65%</text>
  </svg>
</div>

<!--
[17:00–19:00] Liu et al., "Lost in the Middle" (2023): https://arxiv.org/abs/2307.03172
Models use information at the start and the end of the context well; the middle, much less reliably. Context windows grew; the U didn't go away.
Rule 37 of your 80-rule CLAUDE.md sits right in that trough after a few turns.
Claude Code's answer: <system-reminder> blocks injected close to the action (hooks, file changes, skill invocations): it moves important stuff to the end.
Numbers (from Giorgio Galassi's FrontMania talk notes; verify source): an instruction is followed ~75% at the start, ~55% in the middle, ~65% at the end.
Meta moment: "This slide is in the middle of your window. Statistically, you'll forget it." The statusline just crossed ~33%. Then: intermission.
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
ctx: 30
---

<div>
  <div class="big">Bigger context windows<br>didn't fix it.</div>
  <div v-click="1" class="up" style="font-size:44px;margin-top:24px"><span class="struck" :class="{ on: $clicks >= 1 }">1M tokens<svg viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M-4 88 L104 14"/></svg></span><span class="edit-ins d1" :class="{ on: $clicks >= 1 }">&nbsp;~400k</span></div>
  <div v-click="2" class="big hand up" style="font-size:66px;margin-top:30px;color:var(--amber)">What you leave out matters more<br>than what you put in.</div>
</div>

<!--
- 1M window, dumb zone from ~40%: ~400k usable.
-->

---
layout: title
clicks: 3
ctx: 30
---

<div class="slide-head"><h2>/statusline</h2><div class="slide-sub">Your most important indicator</div></div>
<div class="sl-look" :class="{ on: $clicks === 1 }"><div class="sl-look-sub">We've had one the entire talk</div><div class="sl-look-arrow">↓ here</div></div>
<div class="sl-setup" :class="{ on: $clicks === 0 }">
  <div class="sl-setup-h">Set it up</div>
  <Term title="claude" :lines="[{ t: '> /statusline show context % as a progress bar', c: 'you' }]" />
</div>
<CtxMeter :pct="30" bare class="sl-meter" :class="{ on: $clicks >= 2 }"><em class="sl-dumb" :class="{ on: $clicks >= 3 }"><b>dumb zone</b></em></CtxMeter>
---
layout: title
clicks: 4
ctx: [31, 32, 32, 33, 33]
---

<script setup>
const parts = [
  { k: 'sys', name: 'system prompt', w: 1.5, up: true, start: true },
  { k: 'tool', name: 'built-in tools', w: 6 },
  { k: 'mcp', name: 'MCP schemas', w: 9, small: 0.6, cut: 1, up: true, far: true },
  { k: 'mem', name: 'CLAUDE.md', w: 3, small: 0.8, cut: 2, far: true },
  { k: 'memo', name: 'memory', w: 1.5, small: 0.5, cut: 3, up: true },
  { k: 'sk', name: 'skills', w: 1.5 },
  { k: 'chat', name: 'the conversation', w: 7.5, up: true },
]
const size = (p, c) => p.cut && c >= p.cut ? p.small : p.w
const used = c => parts.reduce((n, p) => n + size(p, c), 0)
const width = (p, c) => `${size(p, c) / 30 * 100}%`
const centers = c => { let x = 0; return parts.map(p => { const w = size(p, c) / 30 * 1456; x += w; return x - w / 2 }) }
const reach = p => p.far ? 80 : 40
const line = (p, i, c) => { const x = centers(c)[i]; return `path('M ${x} ${p.up ? 80 - reach(p) : 144 + reach(p)} L ${x} ${p.up ? 80 : 144}')` }
</script>

<div class="slide-head"><h2>/context</h2></div>
<CtxMeter :pct="Math.round(used($clicks) / 30 * 100)" bare>
  <div class="ctx-segs"><div v-for="p in parts" :key="p.k" :class="`ctx-${p.k}`" :style="{ width: width(p, $clicks) }"></div></div>
  <svg class="ctx-lines" viewBox="0 0 1456 224"><path v-for="(p, i) in parts" :key="p.k" :style="{ d: line(p, i, $clicks) }" /></svg>
  <span v-for="(p, i) in parts" :key="p.k" class="ctx-call" :class="[p.up ? 'up' : 'down', { start: p.start, far: p.far }]" :style="{ left: `${centers($clicks)[i]}px` }">{{ p.name }}</span>
</CtxMeter>
<div class="ctx-tips">
  <div v-click="1" class="ctx-tip">Install only the MCPs you need.<br><span class="dim">Consider a CLI instead.</span></div>
  <div v-click="2" class="ctx-tip"><code>/init</code> is your enemy. Keep CLAUDE.md lean.<br><span class="dim">Be deterministic instead.</span></div>
  <div v-click="3" class="ctx-tip">Clean up memories periodically.<br><span class="dim">Memories go stale.</span></div>
  <div v-click="4" class="ctx-tip">The skills index is lean.<br><span class="dim">It still eats tokens.</span></div>
</div>

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
<div class="yue-count" :class="{ on: $clicks >= 6 }">200+ deleted</div>
<div class="yue-stamp" :class="{ on: $clicks === 4 }"><div>AUTO-COMPACTION</div></div>

---
layout: statement
ctx: 39
---

<div>
  <div class="big"><code style="font-size:.8em">/compact</code> is a summary<br>written by an amnesiac.</div>
</div>

<!--
[27:00] Avoid /compact (lossy) and auto-compaction. You don't choose what it keeps.
Context rot: accuracy drops as the token count grows. Compaction fights it, but you lose detail you can't get back.
Anchored iterative summarization (Giorgio Galassi): a state document you always overwrite, never append. That's "land the plane" with a name.
Context editing (harness-level clearing of old tool results) is the gentler cousin: it drops bulky tool output, not your instructions. Vendor benchmark claims around it are not on the slide on purpose.
-->

---
layout: scene
kicker: eviction policy
title: Land the plane
clicks: 4
ctx: [40, 40, 40, 12, 12]
branch: [window-1, window-1, window-1, window-2, window-2]
---

<div class="row" style="gap:70px;align-items:center;height:100%">
  <Polaroid v-click="1" :w="560" :h="420" :r="-2" class="pin drop" cap="Write the caption before it fades.">
    <div class="handoff"><h4>HANDOFF.md · window 1</h4>Keep these 3 things:<br><br>1. /context: you pay ~12% before<br>&nbsp;&nbsp;&nbsp;you type. Cut what you don't use.<br>2. CLAUDE.md = table of contents.<br>&nbsp;&nbsp;&nbsp;Rules → lint rules and hooks.<br>3. Load-bearing rules never live<br>&nbsp;&nbsp;&nbsp;only in chat.</div>
  </Polaroid>
  <div class="col caption-box" style="width:640px">
    <div>At <span class="red-t">40%</span>: stop adding. Start landing.</div>
    <div v-click="1" class="up">Write the handover. For you, three things from the first half. For an agent: goal, decisions, state, next step, gotchas.</div>
    <div v-click="2" class="up clear-cmd">&gt; /clear</div>
    <div v-click="3" class="up">New session. Reads the note. <span class="green-t">12%</span>, and it knows exactly what it needs.</div>
    <div v-click="4" class="up dim">Polaroid, not tattoo: the note lives in a file, not in the next session's CLAUDE.md.</div>
  </div>
</div>

<!--
[28:00–29:00] The meter hits 40%. Land the plane: the handover slide = three things to keep from the first half. Then /clear: the meter resets on stage to the baseline (~12%), never 0: you always pay the baseline. Eviction acted out.
For an agent: ask for a handover (HANDOFF.md, or a handoff prompt), /clear, start fresh, point it at the note. Real example: rag-and-embeddings/notes/HANDOFF.md.
Tension worth a laugh: Claude Code's own system prompt tells it "you don't need to wrap up early or hand off mid-task".
Interstellar callback: you get to push a few books through the shelf. Choose them.
Watch the statusline: 40% → 12%. That's window 2. The audience just got a fresh context too.
Variants: /rewind, /branch or /fork for side quests; /btw for a quick aside that doesn't pollute the main thread (verify which exist in your version).
-->

---
layout: section
n: intermission
title: My favourite director
subtitle: a short break from remembering things
ctx: 12
sepia: true
frozen: true
branch: intermission
---

<!--
[19:00–22:00] Intermission right after the landing: every ~20 minutes the audience needs a distraction, and the fresh window starts after it.
The deck goes sepia (projector) and the statusline freezes: ⏸ intermission.
Order: Christopher Nolan, the blockbusters → Interstellar, the best film ever → Inception → back to Memento for the recap.
No stills, no posters: just the idea of each film. Keep each reel to ~30 seconds.
-->

---
layout: scene
clicks: 1
ctx: 12
sepia: true
frozen: true
branch: intermission
---

<script setup>
const shelves = [0, 1, 2, 3].flatMap(r => Array.from({ length: 11 }, (_, i) => {
  const jitter = (i * 7 + r * 13) % 22
  return { x: 52 + i * 38, y: 120 + r * 110 - 70 - jitter, w: 26 + (i * 3) % 9, h: 70 + jitter, fill: ['#6b5d4c', '#9a8a74', '#4f453a', '#b3a58f'][(i + r) % 4] }
}))
</script>

<div class="reel">
  <svg viewBox="0 0 520 520" width="520" height="520"><rect width="520" height="520" fill="#14110e"/>
    <line v-for="r in 4" :key="r" x1="40" x2="480" :y1="10 + r * 110" :y2="10 + r * 110" stroke="#8a7d6c" stroke-width="6"/>
    <rect v-for="(b, i) in shelves" :key="i" :x="b.x" :y="b.y" :width="b.w" :height="b.h" :fill="b.fill"/>
    <rect v-click="1" class="pop" x="242" y="232" width="30" height="88" fill="#f1e9dc"/>
  </svg>
  <div class="caption-box"><div class="film">a bookshelf, across time</div>
    <div class="maps">A message pushed through to whoever comes next.</div>
    <div v-click="1" class="up" style="margin-top:20px">= the <b>handover note</b> to your next session. Your future agent can't ask you questions.</div>
  </div>
</div>

<!--
Interstellar, the best film ever. Cooper sends a message through the bookshelf to Murph, across a gap he can't cross himself. Someone on the other side of time can only push a few books, a few ticks of a watch, to the one who comes after.
That's a handover file: HANDOFF.md. The next session has no idea what happened in this one. You get to push a few books through. Choose them well.
Callback to "land the plane".
-->

---
layout: scene
clicks: 2
ctx: 12
sepia: true
frozen: true
branch: intermission
---

<div class="reel">
  <svg viewBox="0 0 520 520" width="520" height="520"><rect width="520" height="520" fill="#14110e"/>
    <rect x="40" y="40" width="440" height="440" fill="none" stroke="#c9bca8" stroke-width="5" rx="8"/><text x="56" y="72" fill="#c9bca8" font-size="20" font-family="monospace">session</text>
    <g v-click="2">
      <rect x="90" y="90" width="340" height="340" fill="none" stroke="#c9bca8" stroke-width="4" rx="8"/><text x="106" y="122" fill="#c9bca8" font-size="20" font-family="monospace">subagent</text>
      <rect x="140" y="140" width="240" height="240" fill="none" stroke="#c9bca8" stroke-width="3" rx="8"/><text x="156" y="172" fill="#c9bca8" font-size="20" font-family="monospace">sub-subagent</text>
      <rect x="190" y="190" width="140" height="140" fill="none" stroke="#c9bca8" stroke-width="2" rx="8"/><text x="206" y="222" fill="#c9bca8" font-size="20" font-family="monospace">…</text>
    </g>
    <circle v-click="1" class="pop" cx="260" cy="270" r="16" fill="#f1e9dc"/>
  </svg>
  <div class="caption-box"><div class="film">an idea, planted</div>
    <div v-click="1" class="maps">The agent thinks it was its own idea.</div>
    <div v-click="1" class="up" style="margin-top:14px">= <b>prompt injection</b>: an instruction hidden in a README, a web page, a tool description.</div>
    <div v-click="2" class="up" style="margin-top:14px">Dreams within dreams = <b>subagents within subagents</b>. Each level knows less about the top.</div>
  </div>
</div>

<!--
Inception. Two mappings:
1. The planted idea: the most resilient parasite is an idea the host believes is its own. Prompt injection is exactly that: an instruction in a fetched page, a dependency README, an MCP tool description, a memory file. The agent can't tell it apart from yours.
2. Nested dreams = nested subagents. Each level runs in its own context and knows only what the level above told it. That's a feature (isolation) and a risk (they don't know your rules: built-in subagents may not load CLAUDE.md, verify for your version).
-->

---
layout: scene
kicker: the one about memory
title: The recap
clicks: 4
ctx: 12
sepia: [true, true, true, true, false]
frozen: [true, true, true, true, false]
branch: [intermission, intermission, intermission, intermission, window-2]
---

<script setup>
const rows = [
  ['No new memories after each scene', 'stateless turns', 0],
  ['Tattoos', 'CLAUDE.md: always loaded', 0],
  ['Polaroids with captions', 'memory, skills: loaded on demand', 1],
  ['A wall covered in polaroids', "400 docs: you can't find anything", 1],
  ['Notes written by someone else', 'context poisoning, prompt injection', 2],
  ['The caution tale he tells everyone', 'the deleted inbox', 2],
  ['Write the caption before it fades', 'land the plane', 3],
]
</script>

<table class="cheat"><tbody>
  <tr v-for="[film, agent, at] in rows" :key="film" class="slidev-vclick-target" :class="{ 'slidev-vclick-hidden': $clicks < at }"><td>{{ film }}</td><td>→</td><td>{{ agent }}</td></tr>
</tbody></table>

<!--
Memento. Full mapping. Don't read the table, let them read it; comment on 2–3 rows.
Last click: colour comes back, statusline unfreezes. Window 2 starts at 12%.
-->

---
layout: scene
kicker: CLAUDE.md
title: 'Tattoos: always loaded, every turn'
clicks: 4
ctx: [12, 12, 13, 13, 13]
branch: window-2
---

<script setup>
const rules = ['prefer const', 'no default exports', 'use our logger', 'dates in UTC', 'kebab-case files', 'no lodash', 'explain your plan', 'max 80 cols', 'be concise', 'tests next to code', 'no any', 'IMPORTANT!!']
</script>

<div class="row" style="gap:60px">
  <div class="skin">
    <div class="tat big cut" :class="{ faded: $clicks === 3, gone: $clicks >= 4 }">use pnpm, not npm</div>
    <div v-click="1" class="tat cut" :class="{ faded: $clicks === 3, gone: $clicks >= 4 }">ALWAYS RUN THE TESTS</div>
    <div v-click="1" class="tat cut" :class="{ faded: $clicks === 3, gone: $clicks >= 4 }">NEVER COMMIT .ENV</div>
    <div v-click="1" class="tat cut" :class="{ faded: $clicks === 3, gone: $clicks >= 4 }">DON'T ADD CO-AUTHORED-BY</div>
    <div v-click="2" class="tat many" :class="{ gone: $clicks >= 4 }"><template v-for="i in 76" :key="i">{{ i + 4 }}. {{ rules[(i - 1) % 12] }}<br></template></div>
    <div v-click="4" class="tat big" style="position:absolute;left:60px;top:60px;color:#1f2a3a">See @docs/architecture.md<br>See @docs/testing.md<br>Build: <span style="font-family:var(--mono);font-size:30px">just check</span></div>
  </div>
  <div class="col caption-box" style="width:600px">
    <div>Every line is paid for on <b>every turn</b> of <b>every session</b>.</div>
    <div v-click="2" class="up">Then the list grows. <span class="red-t">80 rules.</span> Who reads rule 37?</div>
    <div v-click="3" class="up">Don't tattoo what the code already says. If the code is ambiguous, <b>fix the code</b>.</div>
    <div v-click="4" class="up">Keep it a <b>table of contents</b>, ≈ 100 lines. Point at polaroids.</div>
  </div>
</div>

<!--
[10:00] Tattoos = CLAUDE.md. Org, user (~/.claude/CLAUDE.md), project, CLAUDE.local.md, subfolder. All loaded, always.
The Co-Authored-By story: my global CLAUDE.md said "don't add Co-Authored-By". Paid on every turn of every session, and it still tried. Claude suggested a PreToolUse hook: then it would try, fail, retry: even more tokens. The real fix was a setting: "attribution": { "commit": "", "pr": "" } in ~/.claude/settings.json.
Rule: if Claude makes the same mistake twice, it's a candidate. If it's inferable from the code, it's not.
HTML comments in CLAUDE.md are stripped before injection. .claude/rules with "paths" frontmatter load conditionally.
MEMORY.md: only the first 200 lines / 25k get injected (verify against current docs).
ETH Zurich 2026: bloated AGENTS.md files measurably hurt. Addy Osmani: "Stop running /init." paddo.dev: "Your AGENTS.md is a liability".
The cheapest context is the context that never gets generated.
-->

---
layout: scene
kicker: progressive disclosure
title: 'Polaroids: pulled out when needed'
clicks: 3
ctx: [14, 14, 15, 15]
branch: window-2
---

<div>
  <div class="tiers">
    <div class="tier"><span class="n">1</span><span><b>Caption</b>: name + description<br><small>every skill, every turn</small></span><span class="cost">~100 tokens / skill</span></div>
    <div v-click="1" class="tier up"><span class="n">2</span><span><b>The photo</b>: SKILL.md body<br><small>only when the task matches</small></span><span class="cost">~2–5k, once</span></div>
    <div v-click="2" class="tier up"><span class="n">3</span><span><b>The file behind it</b>: references, scripts<br><small>only when the skill reads them</small></span><span class="cost">pay per page</span></div>
    <div v-click="3" class="caption-box up" style="margin-top:10px">A description is a <b>trigger</b>, not a label. Same shape for CLAUDE.md (table of contents) and MEMORY.md (index + topic files).</div>
  </div>
  <div class="shoebox">
    <Polaroid :x="0" :y="30" :w="220" :h="150" :r="-8" class="sm" cap="db-migrations" />
    <Polaroid :x="270" :y="0" :w="220" :h="150" :r="5" class="sm" cap="release-notes" />
    <Polaroid :x="40" :y="260" :w="220" :h="150" :r="3" class="sm" cap="pdf-forms" />
    <Polaroid :x="290" :y="240" :w="220" :h="150" :r="-4" class="sm" cap="e2e-tests">
      <div v-click="1" style="padding:12px;font:13px/1.4 var(--mono);color:#cfc3b2">---<br>name: e2e-tests<br>description: Run and fix<br>&nbsp;&nbsp;Playwright tests<br>---<br>1. start the dev server…</div>
    </Polaroid>
    <div v-click="2" class="note-card abs up" style="left:250px;top:470px;--r:3deg;font-size:20px">references/<br>selectors.md · flaky.md</div>
  </div>
</div>

<!--
[11:00–14:00] Progressive disclosure: the Thoughtworks Radar picked it up in Vol 34.
Only the frontmatter (name + description) of each skill is in every context: ~100 tokens per skill. That's the caption on the polaroid.
The body loads when the description matches the task. References/scripts load only when the skill reads them.
So the description is the most important line you write: it's the only thing the agent sees when deciding.
Same shape three times: CLAUDE.md as a table of contents (≈100 lines), MEMORY.md as an index + topic files, skills (description = trigger, body on invocation). Also .claude/rules with paths: frontmatter.
"A description is a trigger, not a label": "Database utilities" vs "Use when… Not for writes." (Extending Your Agent, slides 684-711).
Possible demo: Extending-Your-Agent/plugin-tutorial/skills/git-recipes: a thin SKILL.md routes to one of three reference files. "Load a reference file only when its situation applies: that restraint is the point."
Closer to the action = more reliable.
Industry: Thoughtworks Radar Vol 34 (progressive context disclosure, new); GitHub Spec Kit teams hit "instruction bloat" and fixed it by extracting guidance into skills.
Reusable material: Bootcamp deck "Progressive Context Disclosure" slide.
-->

---
layout: scene
kicker: guardrails
title: These, and other prayers
clicks: 4
ctx: [16, 16, 17, 17, 17]
branch: window-2
---

<script setup>
const stones = [
  ['🎃', 'Prompt', ['"Check for type errors"', 'It said it did'], -4],
  ['💀', 'CLAUDE.md', ['"Always run the tests"', 'Reasoned out of it, just this once'], 3],
  ['👻', 'Lost in\nthe middle', ['Rule 37 of 80', 'Weighed against everything else'], -2.5],
  ['🦇', 'Styleguide', ['FOLLOW EXACTLY!!', 'DO NOT MAKE ANY MISTAKES!!'], 4.5],
]
</script>

<div class="yard storm">
  <div v-for="([sig, ttl, lines, tilt], i) in stones" :key="ttl" class="stone slidev-vclick-target" :class="{ 'slidev-vclick-hidden': $clicks <= i }" :style="{ '--tilt': `${tilt}deg` }">
    <div class="sig">{{ sig }}</div><div class="ttl">{{ ttl }}</div><div v-for="l in lines" :key="l" class="ln">{{ l }}</div>
  </div>
</div>

<!--
[22:00–25:00] Ported from the Guardrails & Backpressure deck (itenium-be/git-worktrees, Graveyard).
Every instruction in context is a prayer: a prompt, a CLAUDE.md line, rule 37, a styleguide in caps. The model weighs them against everything else and sometimes reasons its way out, "just this once".
Shouting (IMPORTANT!!, CAPS) doesn't fix lost-in-the-middle; it spends tokens.
Memento beat: a note says "don't answer the phone". He answers anyway. Then: a locked door.
"Instructions are suggestions, backpressure is a wall." "Anything that must happen every time cannot live in a prompt."
-->

---
layout: scene
kicker: backpressure
title: The model can't argue with an exit code
clicks: 4
ctx: [17, 18, 18, 18, 18]
branch: window-2
---

<script setup>
const stones = [
  ['🎃', 'Prompt', '"Check for type errors"', 'LSP', ['Squigglies, injected', 'right into the context']],
  ['💀', 'CLAUDE.md', '"Always run the tests"', 'Hooks', ['Claude hooks · git hooks · CI', 'exit 2 = blocked']],
  ['👻', 'Lost in\nthe middle', 'Rule 37 of 80', 'Linters', ['Rule 37 is a lint rule', 'in context only when broken']],
  ['🦇', 'Styleguide', 'FOLLOW EXACTLY!!', 'Formatter', ['Not followed: applied', 'prettier · dotnet format']],
]
</script>

<div class="yard">
  <div v-for="([sig, ttl, line, cure, cureLines], i) in stones" :key="ttl" class="stone" :class="{ cured: $clicks > i }">
    <div class="face-a"><div class="sig">{{ sig }}</div><div class="ttl">{{ ttl }}</div><div class="ln">{{ line }}</div></div>
    <div class="face-b"><div class="sig">🕯️</div><div class="ttl">{{ cure }}</div><div v-for="l in cureLines" :key="l" class="ln">{{ l }}</div></div>
  </div>
</div>

<!--
[24:00] The resurrection: each prayer becomes a deterministic guardrail.
LSP: diagnostics injected into context right after an edit. Hooks: PreToolUse/PostToolUse, git hooks, CI: the agent cannot proceed. Linters: rule 37 becomes a lint rule; it enters the context only when it's broken (zero cost otherwise!). Formatter: not followed, applied.
Context angle: every rule you move from CLAUDE.md into a hook or a linter is a tattoo removed. It costs zero tokens until it fires.
A guardrail that only warns is documentation.
-->

---
layout: scene
kicker: tattoo vs locked door
title: Instructions are requests. Hooks are locks.
clicks: 2
ctx: 19
branch: window-2
---

<script setup>
const lines = [
  '// .claude/settings.json',
  '"hooks": { "PreToolUse": [{',
  '  "matcher": "Bash",',
  '  "hooks": [{ "type": "command",',
  '    "command": "guard-push.sh" }]',
  '}]}',
  { t: '', s: 1 },
  { t: '$ git push origin main', c: 'you', s: 1 },
  { t: '✗ blocked by PreToolUse hook (exit 2)', c: 'bad', s: 1 },
  { t: '  "main is protected: open a PR"', c: 'muted', s: 1 },
]
</script>

<div class="row" style="gap:60px">
  <div class="col" style="width:660px">
    <Polaroid :w="600" :h="200" :r="-2" cap="a tattoo: &quot;please don't&quot;">
      <div class="skin" style="width:600px;height:200px;border-radius:0;padding:40px"><div class="tat">NEVER RUN rm -rf</div><div class="tat">NEVER PUSH TO MAIN</div></div>
    </Polaroid>
  </div>
  <div class="col" style="width:700px">
    <Term title="a locked door" :lines="lines" />
    <div v-click="2" class="caption-box up">0 tokens until it fires. Then exactly one line, at the <b>end</b> of the context.</div>
  </div>
</div>

<!--
[25:00] Instruction (tattoo) vs hook (locked door). The model can reason around an instruction; it can't reason around exit code 2.
And the context bonus: the hook's message lands at the END of the context (recency), exactly when it's relevant.
Out of scope tonight: the full hooks arsenal. See the Extending Your Agent talk (itenium-be/Extending-Your-Agent).
-->

---
layout: scene
kicker: tool-output shaping
title: Every tool result is a note you'll re-read forever
clicks: 3
ctx: [20, 23, 23, 22]
branch: window-2
---

<script setup>
const raw = [
  '$ npm test',
  { t: ' PASS  src/auth/login.test.ts (212 ms)', c: 'muted' },
  { t: ' PASS  src/auth/token.test.ts', c: 'muted' },
  { t: '   ✓ issues token (3 ms)', c: 'muted' },
  { t: '   ✓ refreshes token (2 ms)', c: 'muted' },
  { t: ' … 4,213 more lines …', c: 'warn', s: 1 },
  { t: ' FAIL  src/cart/discount.test.ts', c: 'bad', s: 1 },
  { t: 'Tests: 2 failed, 312 passed', c: 'muted', s: 1 },
]
const shaped = [
  { t: '$ npm test', c: 'muted' },
  { t: '✓', c: 'ok' },
  { t: '', s: 3 },
  { t: '$ npm test', c: 'muted', s: 3 },
  { t: '✗ discount.test.ts:41', c: 'bad', s: 3 },
  { t: '  expected 9.5, got 10', c: 'muted', s: 3 },
  { t: '  at applyDiscount (discount.ts:17)', c: 'muted', s: 3 },
]
</script>

<div class="row" style="gap:50px">
  <div class="col" style="width:700px">
    <Term title="raw: ≈ 38k tokens" :lines="raw" />
  </div>
  <div class="col" style="width:640px">
    <Term v-click="2" title="shaped by a PostToolUse hook" :lines="shaped" />
    <div v-click="2" class="caption-box up"><b>✓</b> on success. <span v-click="3">The full output only on failure.</span></div>
  </div>
</div>

<!--
[29:00–32:00] Tool-output shaping. Every tool result is appended to the context and re-read on every following turn (with caching, but still: it sits in the window and pushes rules into the middle).
A 4,000-line test run: ~38k tokens (illustrative). Shaped: 60 tokens, and the signal is at the end.
Rule: ✓ on success, the full output only on failure. A PostToolUse hook that returns only errors (example: Extending-Your-Agent/plugin-tutorial/hooks/validate-json.sh feeds errors back with exit 2).
Other tactics: quiet/dot reporters, --silent, grep/tail, CLIs with --json + jq. Context editing is tool-output shaping done by the harness.
Retrieval ladder: glob → grep → read only when needed.
Paddo: agent-browser context efficiency (https://paddo.dev/blog/agent-browser-context-efficiency/).
-->

---
layout: scene
kicker: output styles
title: 'Blunt notes: facts only'
clicks: 5
ctx: [23, 26, 26, 27, 27, 28]
branch: window-2
---

<script setup>
const verbose = [
  { t: "● Great question! I'll start by carefully", c: 'muted' },
  { t: '  examining the authentication module to', c: 'muted' },
  { t: '  understand how tokens are currently', c: 'muted' },
  { t: '  handled. Let me explain my approach…', c: 'muted' },
]
const caveman = [{ t: '● Token expiry off by one. Fix in token.ts:88.', c: 'ok' }]
const homelab = [
  { t: "✗ That's on me, I should have checked that…", c: 'muted' },
  { t: '● *.lan was publicly reachable for 60 days.', c: 'warn' },
  { t: '  Fix: Traefik entrypoint restricted to LAN.', c: 'ok' },
]
</script>

<div class="row" style="gap:60px;align-items:flex-start">
  <div class="col" style="width:640px">
    <Term title="default" :lines="verbose" />
    <Term v-click="1" title="caveman" :lines="caveman" />
    <Term v-click="4" title="homelab · custom output style" :lines="homelab" />
  </div>
  <div class="col caption-box" style="width:680px">
    <div v-click="1" class="up">Caveman loads: the meter <b>jumps</b>. Its instructions are a tattoo too.</div>
    <div v-click="2" class="up">Then every reply is shorter: it climbs <b>slower</b>.</div>
    <div v-click="3" class="up">Pays off only if the session saves more than the style costs. <span class="dim">Same trade for every skill, CLAUDE.md line, MCP schema.</span></div>
    <div v-click="5" class="up">No apology filler. Just the fact, and the fix. <span class="dim">What comes back is what goes in next turn.</span></div>
  </div>
</div>

<!--
[31:00] Output styles are context engineering. Lenny's notes: short, blunt, facts only.
Caveman duality: it saves tokens on every reply, but its instructions are loaded first and stay there every turn. Statusline goes UP when caveman loads, then climbs more slowly. Callback to "Spent before you type". TODO: measure load cost vs savings on own setup; the meter values here are illustrative.
Homelab .lan (output-style angle only; the full story opens the separate homelab talk, don't spoil it): Claude set up the homelab and exposed the .lan services publicly. Because of the custom output style there was no "That's on me, I should have checked that." It stated it plainly: exposed for N days, here is the fix. Apology filler is wasted tokens and hides the facts.
DECIDE: 30 days (issue) vs 60 days (homelab notes); slide says 60. TODO: real screenshot of the reply + the output style file; the text on the slide is a reconstruction.
Also open: the "Bash-explained" output style: why it exists.
"Don't be a meat proxy": anyone can get the AI answer with their own context, system prompt and output style.
-->

---
layout: scene
kicker: feedback loop
title: Output is the next turn's input
clicks: 4
ctx: [29, 30, 31, 32, 33]
branch: window-2
---

<div class="loop">
  <svg viewBox="0 0 1460 600"><path class="arc" d="M430 150 C 700 30, 800 30, 1020 150"/><path v-click="1" class="arc hot" d="M1020 380 C 800 520, 700 520, 430 380"/>
    <text x="725" y="60" text-anchor="middle" fill="#a99c8a" font-size="24">context in</text>
    <text v-click="1" x="725" y="540" text-anchor="middle" fill="#e0493f" font-size="24">its own output, appended</text></svg>
  <div class="abs" style="left:60px;top:170px;width:360px"><Polaroid :w="320" :h="180" :r="-3" cap="what it reads"><div style="padding:22px;font:24px var(--mono)">the context</div></Polaroid></div>
  <div class="abs" style="left:1040px;top:170px;width:360px"><Polaroid :w="320" :h="180" :r="3" cap="what it writes"><div style="padding:22px;font:24px var(--mono)">the model</div></Polaroid></div>
  <div class="abs caption-box stack" style="left:470px;top:190px;width:520px;text-align:center">
    <div v-click="[1, 2]">Its plan, its apologies, its 600-line diff: all re-read next turn.</div>
    <div v-click="[2, 3]">Its <b>memory notes</b>: next session reads them as fact.<small>notes written by someone else, who was wrong</small></div>
    <div v-click="[3, 4]">A fetched page / tool description: <span class="red-t">a planted idea</span>.<small>it can't tell your instruction from theirs</small></div>
    <div v-click="4"><b>Stale memory is worse than no memory.</b><small><code>/memory</code>: inspect and prune</small></div>
  </div>
</div>

<!--
[32:00–37:00] The loop: whatever the agent writes becomes what it reads. A wrong guess in turn 3 is "evidence" in turn 10.
Auto-memory (~/.claude/projects/<proj>/memory/): the agent writes notes for its future self. Next session reads them as fact. Notes written by someone else, who might have been wrong: that's the film's twist.
Poisoning: anything that enters context can carry instructions: web pages, issues, dependency READMEs, MCP tool descriptions, memory files. Lethal trifecta (Simon Willison): private data + untrusted content + a way to send data out.
Memory products (Mem0, Zep/Graphiti, Letta…): you probably don't need one. Every memory you load costs tokens every turn, and invalidation (knowing a fact is no longer true) is the hard part.
Prune: /memory. Delete what's stale. Memory lifecycle (Giorgio Galassi): write, read by index (never everything), update/supersede (or it comes back in three months), forget.
NCSC: indirect prompt injection is not fixable with prompts or model tuning: it's a system-level vulnerability from blending trusted and untrusted input in one window.
-->

---
layout: statement
clicks: 1
ctx: 34
branch: window-2
---

<div>
  <div class="big hand">Every note in your context<br>was written by someone.</div>
  <div v-click="1" class="small up">Do you know who? Do you know <b>when</b>?</div>
</div>

<!--
[35:00] Pause here. CLAUDE.md written by a teammate a year ago. Memory written by the agent last week. A README written by a stranger. A tool description written by an MCP vendor. All of it has the same authority in the context window.
-->

---
layout: scene
kicker: subagents
title: Someone else investigates
clicks: 4
ctx: [35, 35, 35, 36, 36]
branch: window-2
---

<div>
  <div class="sub-wrap">
    <div class="sub-win"><h3>main session</h3>
      <MiniMeter :pct="$clicks >= 4 ? 36 : 35" :w="380" label="ctx" />
      <div class="caption-box" style="font-size:24px;margin-top:20px">"Where do we validate discount codes?"</div>
      <div v-click="4" class="pop" style="margin-top:20px">
        <Polaroid :w="480" :h="110" :r="-2" class="sm" cap="the report"><div style="padding:14px;font:18px/1.5 var(--mono)">validateCode() in cart/discount.ts:41<br>called from 2 places · no tests for expiry</div></Polaroid>
      </div>
    </div>
    <div v-click="1" class="sub-win"><h3>subagent · its own window</h3>
      <MiniMeter :pct="$clicks >= 3 ? 52 : $clicks >= 2 ? 35 : 8" :w="380" label="ctx" />
      <div v-click="2" class="filelist" style="margin-top:20px"><template v-for="f in ['cart/discount.ts', 'cart/index.ts', 'cart/totals.ts', 'api/checkout.ts', 'api/promo.ts', 'lib/money.ts', 'lib/dates.ts', 'legacy/promo.js', 'test/cart.spec', 'test/promo.spec', 'grep &quot;code&quot; 214 hits', 'grep &quot;discount&quot; 97 hits', 'read discount.ts', 'read promo.ts', 'read checkout.ts', 'read money.ts']" :key="f">{{ f }}<br></template></div>
    </div>
  </div>
  <div v-click="4" class="caption-box up" style="margin-top:26px">It reads 40 files. You get one polaroid. Your window barely moves.</div>
</div>

<!--
[37:00–40:00] The cheapest way to widen your effective context window. The subagent runs in a separate context, does the noisy reading (grep hits, 40 files), and returns a summary, not raw output.
Two payoffs: isolation (main window stays clean) and parallelism.
Costs: spin-up, and the subagent knows only what you told it. Built-in Explore and Plan have omitClaudeMd: true (Explore runs on Haiku): they don't see your tattoos. Inception callback: dreams within dreams.
Superpowers: the reviewer "gets precisely crafted context, never your session's history". Under-specified subagents duplicate work.
Agent teams: roughly 7× the tokens (one figure in the reference material; verify before quoting).
-->

---
layout: scene
kicker: final landing
title: The wall
clicks: 3
ctx: [37, 38, 38, 39]
branch: window-2
---

<script setup>
const cards = [
  { x: 40, y: 60, h: 120, r: -4, s: 0, body: '/context', cap: 'spent before you type' },
  { x: 90, y: 300, h: 120, r: 3, s: 0, body: 'CLAUDE.md = ToC', cap: 'tattoo less' },
  { x: 30, y: 500, h: 70, r: -2, s: 0, body: '40, not 400', cap: 'retrieve' },
  { x: 560, y: 70, h: 120, r: 2, s: 1, body: 'rule 37 of 80', cap: 'lost in the middle' },
  { x: 540, y: 300, h: 120, r: -3, s: 1, body: 'exit 2', cap: 'locks, not prayers' },
  { x: 590, y: 500, h: 70, r: 4, s: 1, body: '/compact', cap: 'forgot the rule' },
  { x: 1060, y: 60, h: 120, r: 3, s: 2, body: '2 failed, 312 passed', cap: 'shape the output' },
  { x: 1090, y: 300, h: 120, r: -2, s: 2, body: 'who wrote this?', cap: 'output = next input' },
  { x: 1040, y: 500, h: 70, r: 2, s: 2, body: 'HANDOFF.md', cap: 'land at 40%' },
]
</script>

<div class="wall">
  <svg v-click="3" class="strings" viewBox="0 0 1456 680"><line x1="230" y1="200" x2="720" y2="320"/><line x1="720" y1="320" x2="1220" y2="200"/><line x1="230" y1="200" x2="1220" y2="200"/></svg>
  <div class="col-h" style="left:60px">goes in</div><div class="col-h" style="left:560px">rots</div><div class="col-h" style="left:1060px">comes out</div>
  <Polaroid v-for="c in cards" :key="c.body" :x="c.x" :y="c.y" :w="330" :h="c.h" :r="c.r" class="pin sm slidev-vclick-target" :class="{ 'slidev-vclick-hidden': $clicks < c.s }" :cap="c.cap">
    <div :style="{ padding: c.h > 100 ? '16px' : '10px 16px', font: `${c.h > 100 ? 22 : 20}px var(--mono)` }">{{ c.body }}</div>
  </Polaroid>
</div>

<!--
[40:00] Final landing. Walk the wall left to right: what goes in, what rots, what comes out. One sentence per polaroid, max.
Red string: it's all one problem. The window is a budget, and attention is not uniform.
-->

---
layout: scene
kicker: handover for your next session
title: The tattoos I'd get
clicks: 4
ctx: [39, 39, 40, 40, 40]
branch: window-2
---

<ol class="takeaways">
  <li>Run <code>/context</code> before your next session.<small>Unload what you don't need.</small></li>
  <li v-click="1" class="up">Keep CLAUDE.md a table of contents.<small>Turn rules into lint rules and hooks.</small></li>
  <li v-click="2" class="up">Retrieve when you hit hundreds of docs, not dozens.<small>40 fits. 400 costs $11 a question.</small></li>
  <li v-click="3" class="up">Shape tool output.<small><code>✓</code> on success, full output only on failure.</small></li>
  <li v-click="4" class="up">At 40%, land the plane.<small>Handover, then <code>/clear</code>.</small></li>
</ol>

<!--
[41:00] The five takeaways, framed as the handover prompt for your next session: "the tattoos I'd get". Cooper's bookshelf: the few books you push through to the one who comes next.
Statusline is at 40%. We're landing this talk too.
-->

---
layout: statement
clicks: 2
ctx: [40, 40, 12]
branch: window-2
---

<div>
  <div class="big" style="font-size:64px">You'll forget the middle of this talk.<br><span class="dim">You'll remember the last five things I said.</span></div>
  <div v-click="1" class="big hand up" style="font-size:72px;margin-top:40px;color:var(--amber)">What you leave out matters more<br>than what you put in.</div>
  <div v-click="2" class="small up">&gt; /clear</div>
</div>

<!--
[43:00] "You'll remember the last five things I say. Recency bias, same as the model." That's why the takeaways and the headline are here, last.
Last click: /clear. The statusline drops to the baseline, 12%, never 0: you always pay the baseline. Thank you.
-->

---
layout: section
n: questions
title: What do you remember?
subtitle: 'slides, sources and the statusline script: see the last slide'
ctx: 12
branch: main
---

<!--
[43:00–45:00] Q&A.
Likely questions: "Does a 1M window change this?" (the 40-vs-400 slide: no, cost and the U-curve). "Should I use a memory product?" (probably not; CLAUDE.md + MEMORY.md + good handovers first). "Cursor/Copilot?" (same principles; they use RAG for code retrieval).
-->

---
layout: scene
kicker: about this deck
title: Sources & credits
ctx: 12
branch: main
---

<div class="about">
  <h3>this talk</h3><ul>
    <li>Source &amp; open questions: <a href="https://github.com/itenium-be/Bootcamp-AI-Presentation/issues/7">itenium-be/Bootcamp-AI-Presentation#7</a></li>
    <li>Built on: AI Bootcamp deck (context engineering), Guardrails &amp; Backpressure (itenium-be/git-worktrees), RAG &amp; Embeddings, Extending Your Agent</li>
  </ul>
  <h3>reading</h3><ul>
    <li><a href="https://code.claude.com/docs/en/statusline">Claude Code statusline docs</a></li>
    <li><a href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents">Anthropic: Effective context engineering for AI agents</a></li>
    <li><a href="https://arxiv.org/abs/2307.03172">Liu et al.: Lost in the Middle (2023)</a></li>
    <li><a href="https://platform.claude.com/docs/en/build-with-claude/prompt-caching">Prompt caching</a></li>
    <li><a href="https://simonwillison.net/2026/Feb/23/summer-yue">Simon Willison on the deleted inbox</a></li>
    <li><a href="https://addyosmani.com/blog/agents-md/">Addy Osmani: AGENTS.md</a> · <a href="https://paddo.dev/blog/your-agents-md-is-a-liability/">paddo.dev: your AGENTS.md is a liability</a></li>
  </ul>
  <h3>art</h3><ul><li>Stills: <i>Memento</i> (2000), Christopher Nolan. All other artwork is hand-made SVG/CSS.</li></ul>
</div>

<!--
Hidden-ish last slide (after Q&A). Source of the talk idea, open questions and message map: https://github.com/itenium-be/Bootcamp-AI-Presentation/issues/7
Append ?model=Name to the URL to change the model name in the statusline.
-->
