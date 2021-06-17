const apiDog = async (url) => {
  const API_URL = 'https://dog.ceo/api/breeds/list/all';
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) =>
      response.ok ? Promise.resolve(data) : Promise.reject(data),
    );
};

module.exports = { apiDog };
