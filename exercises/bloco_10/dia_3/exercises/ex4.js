const uppercase = (str) => {
  return str.toUpperCase();
};

const firstLetter = (str) => {
  return str.split('')[0];
};

const concatStr = (str1, str2) => {
  return str1.concat(str2);
};

module.exports = { uppercase, firstLetter, concatStr };
