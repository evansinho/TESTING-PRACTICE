import calculator from './calculator';

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 2 - 1 to equal 1', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test('divides 4 / 2 to equal 2', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('multiplies 1 * 2 to equal 2', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
