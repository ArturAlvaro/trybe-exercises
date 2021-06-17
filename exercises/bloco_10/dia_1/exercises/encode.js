const convertLetters = (obj, str) => {
  const stringSplit = str.split('');
  const mappingObj = stringSplit.map((letter) => {
    if (obj[letter]) {
      return obj[letter];
    }
    return letter;
  });
  return mappingObj.join('');
};

function encode(string) {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return convertLetters(map, string);
}

function decode(string) {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return convertLetters(map, string);
}

const funcs = { encode, decode };
module.exports = funcs;
