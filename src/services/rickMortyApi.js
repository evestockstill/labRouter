// const randomNum = Math.floor(Math.random() * 493) + 1;

export const getCharacters = () => {
  fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json)
    .then(([{ name, image }]) => ({
      name: name,
      img: image
    }));
};

export const getCharactersInfo = () => {
  fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json);
};
