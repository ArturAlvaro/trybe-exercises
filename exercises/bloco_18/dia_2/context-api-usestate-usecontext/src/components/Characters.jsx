import React, { useEffect, useState } from 'react';

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const endpoint = 'https://rickandmortyapi.com/api/character';
      const { results } = await fetch(endpoint).then((data) => data.json());
      setCharacters(results);
    };
    getCharacters();
  }, []);

  return (
    <section>
      <ul>
        {
          characters.map((data) => <li key={ data }>{ data.name }</li>)
        }
      </ul>
    </section>
  )
}

export default Characters;
