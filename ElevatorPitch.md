# Some Memories Are Best Forgotten

*Context engineering for coding agents*

## One-liner

Your coding agent has amnesia: every turn it rereads everything you gave it, and it forgets the middle. Bigger context windows didn't fix that. What you leave out matters more than what you put in.

## Abstract

Like Leonard in Memento, your coding agent can't make new memories. Every session starts with no idea where it is or what you've been building. So it reads its tattoos (CLAUDE.md, five of them), pulls out polaroids (skills) and trusts notes that may be stale. And before you've typed a word, the system prompt, built-in tools and every MCP schema have already taken a big part of its context.

Bigger context windows didn't fix this. A million tokens just gives you a bigger middle, and the middle is where models lose track. Fill the window anyway and compaction picks what to forget. Ask Meta's Director of Alignment, whose agent deleted 200+ emails after auto-compaction dropped her one rule: "don't delete anything until I say so".

This talk shows what is actually in your agent's context and how to take control of it, with three rules:

- **Progressive disclosure**: CLAUDE.md as a table of contents, with the details loaded only when they're needed
- **Be deterministic**: rules enforced by settings, hooks, linters and exit codes instead of prayers in CLAUDE.md
- **Output shaping**: tool output that says `✓` on success, subagents that read the 40 files for you, and output styles that cut the "I'm so sorry"

A statusline at the bottom of every slide tracks the talk's own context window. When it hits 40%, we land the plane.

## Target audience

Developers who use a coding agent (Claude Code, Cursor, Copilot, Codex…) every day and have watched it ignore an instruction or get worse as a session grows. No ML background needed.

## Key takeaways

- Watch the meter: set up a `/statusline` and check `/context`
- Load details when you need them: CLAUDE.md is a table of contents
- Enforce it, don't ask nicely: Claude can't argue with an exit code
- Shape what tools print and style what Claude writes
- At 40%, land the plane: write a handover and `/clear`, don't let `/compact` choose what to forget
