export type PerClick<T> = T | T[]

export function pick<T>(value: PerClick<T> | undefined, clicks: number): T | undefined {
  if (!Array.isArray(value))
    return value
  return value[Math.min(clicks, value.length - 1)]
}

export function ctxColor(pct: number): 'green' | 'amber' | 'red' {
  if (pct > 40)
    return 'red'
  return pct >= 30 ? 'amber' : 'green'
}
