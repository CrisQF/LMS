// Ejemplo de cómo usar describe() para tests de utilidades

describe('Utility Functions', () => {
  // beforeEach() se ejecuta antes de cada test en este describe
  beforeEach(() => {
    // Setup común para todos los tests
  })

  // afterEach() se ejecuta después de cada test
  afterEach(() => {
    // Cleanup después de cada test
  })

  describe('String utilities', () => {
    it('should capitalize first letter', () => {
      const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
      expect(capitalize('hello')).toBe('Hello')
      expect(capitalize('world')).toBe('World')
    })

    it('should trim whitespace', () => {
      expect('  hello  '.trim()).toBe('hello')
    })
  })

  describe('Number utilities', () => {
    it('should add numbers', () => {
      expect(1 + 1).toBe(2)
    })

    it('should multiply numbers', () => {
      expect(2 * 3).toBe(6)
    })
  })
})

// describe.skip() - salta todos los tests en este bloque
describe.skip('Skipped Tests', () => {
  it('will not run', () => {
    expect(true).toBe(false) // Este test no se ejecutará
  })
})

// describe.only() - ejecuta solo estos tests (útil para debugging)
// describe.only('Only These Tests', () => {
//   it('will run exclusively', () => {
//     expect(true).toBe(true)
//   })
// })





