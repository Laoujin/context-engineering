# Some Memories Are Best Forgotten

*Context engineering for coding agents*

## One-liner

Your coding agent wakes up with amnesia every turn and rereads everything you gave it. Bigger context windows didn't fix that: what you leave out matters more than what you put in.

## Abstract

Lenny, the protagonist in Memento, suffers from anterograde amnesia: he's unable to create new memories.

He's a goldfish, starting each scene thoroughly confused. He's just like your coding agent at the start of every session.

Lenny copes with tattoos, polaroids and notes. Our agent needs a system too. In this talk, we build it.

Context engineering isn't about what you put in. It's about what you leave out. Some memories are best forgotten.


## Boring Claude Abstract

Your coding agent has anterograde amnesia. Every turn it wakes up with no memory and rereads everything you handed it: the system prompt, your CLAUDE.md, every MCP schema, every line of tool output. And it doesn't forget evenly. It forgets the middle.

Bigger context windows didn't fix this. What you leave out matters more than what you put in.

Built around Memento (tattoos that are always loaded, polaroids pulled out only when needed, and notes written by someone else), this talk shows what actually fills your agent's context and how to take control of it: an index instead of a 400-line CLAUDE.md, rules enforced by hooks instead of written down as prayers, tool output that just says ✓, and why you should land the plane instead of letting /compact decide what to forget. With real failures, including the AI safety director whose agent deleted her inbox after compaction dropped her one rule.

A statusline at the bottom of every slide tracks your own context window. Somewhere in the middle, you'll forget something. That's the point.

## Target audience

Developers who use a coding agent (Claude Code, Cursor, Copilot, Codex…) daily and have watched it ignore an instruction or get worse as a session grows. No ML background needed.

## Key takeaways

- See what your agent has spent before you type a word, and cut what it doesn't need
- Keep CLAUDE.md a table of contents: load details on demand, and turn rules into lint rules and hooks
- Paste in dozens of documents, retrieve when you have hundreds
- Shape tool output: ✓ on success, the full output only on failure
- At 40%, land the plane: write a handover and `/clear`, don't let compaction choose what to forget
