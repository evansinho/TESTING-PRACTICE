const capitalize = (string) => {
  const arrayString = string.split('');
  arrayString[0] = arrayString[0].toUpperCase();
  return arrayString.join('');
};

export default capitalize;