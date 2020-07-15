import capitalize from './capitalize';

test('should capitalize the first letter of a string', () => {
  expect(capitalize('karthick')).toBe('Karthick');
});
