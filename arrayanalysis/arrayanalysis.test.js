import arrayAnalysis from './arrayanalysis';

test('should minimum, maximum, length, and average', () => {
  expect(arrayAnalysis([1, 2, 3])).toEqual({
    min: 1,
    max: 3,
    average: 2,
    length: 3,
  });
});
