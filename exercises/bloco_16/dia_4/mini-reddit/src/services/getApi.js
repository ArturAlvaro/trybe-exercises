const getApi = (sub) => (
  fetch(`https://www.reddit.com/r/${sub}.json`)
    .then((response) => (
      response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getApi;
