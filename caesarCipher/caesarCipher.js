/* eslint-disable no-plusplus */
/* eslint-disable no-mixed-operators */
const caesarCipher = (string, offset) => {
  let offsetlength = offset % 26;
  if (offsetlength < 0) {
    offsetlength += 26;
  }
  let offsetString = '';
  for (let x = 0; x < string.length; x++) {
    let charCode = string.charCodeAt(x);
    const uppercase = charCode < 97;
    if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
      charCode += offsetlength;
      if (uppercase && charCode > 90) {
        charCode -= 26;
      } else if (charCode > 122) {
        charCode -= 26;
      }
    }
    offsetString += String.fromCharCode(charCode);
  }

  return offsetString;
};

export default caesarCipher;