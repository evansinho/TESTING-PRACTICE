const arrayAnalysis = (array) => {
  let min = array[0];
  let max = array[0];

  const { length } = array;

  let sum = 0;

  array.forEach((el) => {
    if (el < min) min = el;
    if (el > max) max = el;
    sum += el;
  });

  return {
    min, max, average: sum / length, length,
  };
};

export default arrayAnalysis;
