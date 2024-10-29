const { calcularMedia } = require('./media'); // Função a ser implementada

describe('calcularMedia', () => {
  test('deve calcular a média correta de três notas', () => {
    expect(calcularMedia([5, 10, 15])).toBe(10);
  });

  test('deve retornar 0 quando todas as notas são zero', () => {
    expect(calcularMedia([0, 0, 0])).toBe(0);
  });

  test('deve calcular a média correta com notas máximas', () => {
    expect(calcularMedia([100, 100, 100])).toBe(100);
  });

  test('deve calcular a média correta com notas decimais', () => {
    expect(calcularMedia([4.5, 5.5, 6.5])).toBe(5.5);
  });
});
