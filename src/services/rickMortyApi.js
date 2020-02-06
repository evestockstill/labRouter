// const randomNum = Math.floor(Math.random() * 493) + 1;

/*
  {
    info: {
      count: "{totalCount}",
      pages: "{numberPages}",
      next: "{https://....}"
    },
    results: [
      {
        name: "{characterName}"
      }
    ]
  }
*/

export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(({ results }) => results);
};

// export const getCharactersInfo = () => {
//   return fetch('https://rickandmortyapi.com/api/character/').then(
//     res => res.json
//   );
// };
