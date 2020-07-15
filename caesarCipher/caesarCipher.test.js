import caesarCipher from './caesarCipher';

test('Cipher text', () => {
  expect(caesarCipher('karthick', 1)).toBe('lbsuijdl');
});

test('Cipher with punctuation', () => {
  expect(caesarCipher('test!', 4)).toBe('xiwx!');
});