import { isMultiple } from './utils'

describe('isMultiple', () => {
  it('returns "s" when value is 0', () => {
    expect(isMultiple(0)).toBe('s')
  })

  it('returns "s" when value is greater than 1', () => {
    expect(isMultiple(2)).toBe('s')
    expect(isMultiple(5)).toBe('s')
    expect(isMultiple(100)).toBe('s')
  })

  it('returns empty string when value is 1', () => {
    expect(isMultiple(1)).toBe('')
  })

  it('returns empty string when value is between 0 and 1', () => {
    expect(isMultiple(0.5)).toBe('')
  })

  it('returns "s" when value is negative', () => {
    expect(isMultiple(-1)).toBe('s')
    expect(isMultiple(-5)).toBe('s')
  })
})
