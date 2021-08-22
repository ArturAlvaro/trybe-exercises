import React, { useContext, useEffect, useState } from 'react';
import Characters from '../components/Characters';
import MyContext from '../provider/Context';

function UserPage() {
  const { user } = useContext(MyContext);
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
    <main>
      <section className="page-char-section">
        <h1 className="welcome-text">
          { `Seja bem-vindo, ${user}` }
        </h1>
        <section className="char-big-section">
          <Characters characters={ characters } />
        </section>
      </section>
    </main>
  )
}

export default UserPage;
