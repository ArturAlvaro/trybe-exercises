const techs = ['React', 'Jest', 'HTML', 'CSS', 'Javascript'];

const techList = (arrTech, name) => {
  if (arrTech.length === 0) return 'Vazio!';
  const techList = arrTech.sort().map((tech) => ({ tech: tech, name }));
  return techList;
};

module.exports = techList;
