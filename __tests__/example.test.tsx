import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// describe() agrupa tests relacionados
// Es útil para organizar tus tests en bloques lógicos
describe('Example Test Suite', () => {
  // it() o test() define un test individual
  it('should pass a basic assertion', () => {
    expect(true).toBe(true)
  })

  it('should perform math operations', () => {
    expect(2 + 2).toBe(4)
    expect(5 * 3).toBe(15)
  })

  // Puedes anidar describe() para más organización
  describe('Nested Test Group', () => {
    it('should handle strings', () => {
      expect('hello').toBe('hello')
      expect('world'.toUpperCase()).toBe('WORLD')
    })
  })
})

// Puedes tener múltiples describe() blocks
describe('Another Test Suite', () => {
  it('should test arrays', () => {
    const arr = [1, 2, 3]
    expect(arr).toHaveLength(3)
    expect(arr).toContain(2)
  })
})

