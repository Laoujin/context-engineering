import { describe, expect, test } from 'bun:test'
import { ctxColor, pick } from './statusline'

describe('pick', () => {
  test('a scalar applies to every click', () => {
    expect(pick(34, 0)).toBe(34)
    expect(pick(34, 5)).toBe(34)
  })

  test('an array is indexed by click', () => {
    expect(pick([40, 40, 40, 12], 3)).toBe(12)
  })

  test('clicks past the array end keep the last value', () => {
    expect(pick([14, 17], 4)).toBe(17)
  })

  test('null is a value: the meter goes blank after /compact', () => {
    expect(pick([39, null, 39], 1)).toBeNull()
  })

  test('missing stays undefined so the meter keeps its last reading', () => {
    expect(pick(undefined, 2)).toBeUndefined()
  })
})

describe('ctxColor', () => {
  test.each([
    [12, 'green'],
    [29, 'green'],
    [30, 'amber'],
    [40, 'amber'],
    [41, 'red'],
  ])('%i%% is %s', (pct, color) => {
    expect(ctxColor(pct)).toBe(color)
  })
})
