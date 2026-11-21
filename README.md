# Some Memories Are Best Forgotten

Context engineering for coding agents. 45-minute talk.

Source, decisions and open questions: [itenium-be/Bootcamp-AI-Presentation#7](https://github.com/itenium-be/Bootcamp-AI-Presentation/issues/7)

## Run

```bash
cd presentation
bun install
bun run dev      # http://localhost:3030 · presenter: /presenter
bun run build
bun run export   # pptx
```

URL option: `?mono=window2` makes the second context window black and white.

## Theme

`presentation/theme` is the local "memento" theme: darkroom background, polaroids, terminals and the context statusline.

Per-slide frontmatter drives the statusline and filters. A value is either a scalar or an array indexed by click:

| Key           | Effect                                                    |
|---------------|-----------------------------------------------------------|
| `ctx`         | context %; `null` blanks the meter                        |
| `branch`      | `window-2` turns black and white with `?mono=window2`     |
| `sepia`, `bw` | film filter on the slide                                  |
| `frozen`      | greys out the statusline                                  |

Layouts: `title`, `scene` (`kicker` + `title`), `statement`, `section` (`n`, `title`, `subtitle`).
Components: `Polaroid`, `Term`, `MiniMeter`.
