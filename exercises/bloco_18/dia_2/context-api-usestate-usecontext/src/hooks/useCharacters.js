// import { useEffect, useState } from 'react';

// const useCharacters = () => {
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     const getCharacters = async () => {
//       const endpoint = 'https://rickandmortyapi.com/api/character';
//       const results = await fetch(endpoint);
//       const dataJson = await results.json();
//       const data = await dataJson.results;
//       setCharacters(data);
//     };
//     getCharacters();
//   }, []);

//   return [characters];
// }

// export default useCharacters;
