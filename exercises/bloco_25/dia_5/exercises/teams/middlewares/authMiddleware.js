const regex = /^[A-Z]{1,3}$/;

const validName = (req, res, next) => {
  const { name } = req.body;
  if(!name) {
    return res.status(400).json({ message: 'invalid name' });
  };
  
  if (name.length < 5) {
    return res.status(400).json({ message: 'name must have 5 characters' });
  };

  next();
};

const validInitials = (req, res, next) => {
  const { initials } = req.body;

  if(!initials) {
    return res.status(400).json({ message: 'invalid initials' });
  };

  if (!regex.test(initials)) {
    return res.status(400).json({ message: 'initials must have maximum 3 upper case characters' });
  };

  next();
};

const validCountry = (req, res, next) => {
  const { country } = req.body;

  if(!country) {
    return res.status(400).json({ message: 'invalid country' });
  };

  if (country.length < 3) {
    return res.status(400).json({ message: 'country must have at least 3 characters' });
  };

  next();
};

module.exports = { validName, validInitials, validCountry };
