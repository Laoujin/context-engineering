import type { Browser, Page } from 'playwright-chromium'
import { afterAll, beforeAll, describe, expect, test } from 'bun:test'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { chromium } from 'playwright-chromium'

const SLIDES = 39
const out = mkdtempSync(join(tmpdir(), 'memento-'))
let server: ReturnType<typeof Bun.serve>
let browser: Browser
let page: Page
const errors: string[] = []

beforeAll(async () => {
  const build = Bun.spawnSync(['bunx', 'slidev', 'build', '--out', out], { cwd: join(import.meta.dir, '..') })
  if (build.exitCode !== 0)
    throw new Error(build.stderr.toString())

  server = Bun.serve({
    port: 0,
    async fetch(req) {
      const file = Bun.file(join(out, new URL(req.url).pathname))
      return new Response(await file.exists() ? file : Bun.file(join(out, 'index.html')))
    },
  })
  browser = await chromium.launch()
  page = await browser.newPage({ viewport: { width: 1600, height: 900 } })
  // Slidev asks for a screen wake lock, which headless Chromium always denies.
  const record = (msg: string) => msg.includes('Wake Lock') || errors.push(msg)
  page.on('pageerror', e => record(e.message))
  page.on('console', m => m.type() === 'error' && record(m.text()))
}, 120_000)

afterAll(async () => {
  await browser?.close()
  server?.stop()
  rmSync(out, { recursive: true, force: true })
})

async function goto(slide: number, clicks = 0) {
  await page.goto(`${server.url}${slide}?clicks=${clicks}`)
  await page.waitForSelector('.statusline')
}

const pct = () => page.locator('.statusline .sl-ctx b')

describe('deck', () => {
  test('steps through every click of every slide without errors', async () => {
    await goto(1)
    for (let i = 0; i < 400 && !page.url().includes(`/${SLIDES}`); i++) {
      await page.keyboard.press('ArrowRight')
      await page.waitForTimeout(30)
    }
    expect(page.url()).toContain(`/${SLIDES}`)
    expect(errors.join("\n")).toBe("")
  }, 120_000)

  test('the cold open starts at 40% and rewinds to 12%', async () => {
    await goto(1)
    await page.waitForFunction(() => document.querySelector('.statusline .sl-ctx b')?.textContent === '40%')
    await goto(1, 3)
    await page.waitForFunction(() => document.querySelector('.statusline .sl-ctx b')?.textContent === '12%')
  })

  test('compaction blanks the meter', async () => {
    await goto(26, 3)
    expect(await pct().textContent()).toBe('—')
  })

  test('the intermission goes sepia and freezes the statusline', async () => {
    await goto(16)
    expect(await page.locator('.memento.sepia:visible').count()).toBe(1)
    expect(await page.locator('.statusline.frozen:visible').count()).toBe(1)
    await goto(21, 4)
    expect(await page.locator('.memento.sepia:visible').count()).toBe(0)
  })

  test('the output style switches to caveman', async () => {
    await goto(31, 1)
    expect(await page.locator('.sl-style').textContent()).toBe('✎ caveman')
  })
})
