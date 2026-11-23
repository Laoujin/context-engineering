# Some Memories Are Best Forgotten

*Context engineering for coding agents*

## One-liner

Your coding agent has amnesia: every turn it rereads everything you gave it, and it forgets the middle. Bigger context windows didn't fix that. What you leave out matters more than what you put in.

## Abstract

Lenny, the protagonist in Memento, suffers from anterograde amnesia: he's unable to create new memories.

He's a goldfish, starting each scene thoroughly confused. He's just like your coding agent at the start of every session.

Lenny created a system for coping with his condition and that's exactly what we will be doing during this session.

Context engineering isn't about what you put in. It's about what you leave out. Some memories are best forgotten.

## Target audience

Developers who use a coding agent (Claude Code, Cursor, Copilot, Codex…) every day and have watched it ignore an instruction or get worse as a session grows. No ML background needed.

## Key takeaways

- Watch the meter: set up a `/statusline` and check `/context`
- Load details when you need them: CLAUDE.md is a table of contents
- Enforce it, don't ask nicely: Claude can't argue with an exit code
- Shape what tools print and style what Claude writes
- At 40%, land the plane: write a handover and `/clear`, don't let `/compact` choose what to forget
