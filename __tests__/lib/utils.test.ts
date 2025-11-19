import { cn } from '@/lib/utils'

// describe() agrupa tests relacionados
// Sintaxis: describe('nombre del grupo', () => { ... })
describe('cn utility function', () => {
  // it() o test() define un test individual
  // Sintaxis: it('descripción del test', () => { ... })
  it('should merge class names correctly', () => {
    const result = cn('foo', 'bar')
    expect(result).toContain('foo')
    expect(result).toContain('bar')
  })

  it('should handle conditional classes', () => {
    const isActive = true
    const result = cn('base', isActive && 'active', 'always')
    expect(result).toContain('base')
    expect(result).toContain('active')
    expect(result).toContain('always')
  })

  it('should handle undefined and null values', () => {
    const result = cn('foo', undefined, null, 'bar')
    expect(result).toContain('foo')
    expect(result).toContain('bar')
  })

  // Puedes anidar describe() para más organización
  describe('Tailwind class merging', () => {
    it('should merge conflicting Tailwind classes', () => {
      // twMerge debería resolver conflictos (ej: p-2 y p-4)
      const result = cn('p-2', 'p-4')
      // El resultado debería contener solo una clase de padding
      expect(result).toBeTruthy()
    })
  })
})

// Ejemplo de cómo usar describe con beforeEach/afterEach
describe('Test lifecycle hooks', () => {
  let counter: number

  // beforeEach() se ejecuta antes de cada test
  beforeEach(() => {
    counter = 0
  })

  // afterEach() se ejecuta después de cada test
  afterEach(() => {
    // Cleanup si es necesario
  })

  it('should reset counter before each test', () => {
    expect(counter).toBe(0)
    counter++
    expect(counter).toBe(1)
  })

  it('should reset counter again', () => {
    // counter debería ser 0 de nuevo gracias a beforeEach
    expect(counter).toBe(0)
  })
})





