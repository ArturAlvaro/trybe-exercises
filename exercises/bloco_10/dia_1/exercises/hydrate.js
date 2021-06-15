const hydrate = (string) => {
  const stringSplit = string.split('');
  const strReduce = stringSplit.reduce((water, character) => {
    let checkInt = parseInt(character);
    let checkChar = isNaN(checkInt) === false;
    if (checkChar) {
      return water + checkInt;
    }
    return water;
  }, 0);

  const cups = strReduce === 1 ? 'copo' : 'copos';
  return `${strReduce} ${cups} de água`;
};

module.exports = hydrate;
