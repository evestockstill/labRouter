import { useState, useEffect } from 'react';
import { getCharacters } from '../services/rickMortyApi';

const defaultCharacter = {
  image: '',
  name: ''
};

export const useCharacters = () => {
  const [characters, setCharacters] = useState([defaultCharacter]);
  const [currCharacter, setCurrCharacter] = useState(defaultCharacter);

  const getCharacterData = () =>
    getCharacters().then(res => setCharacters(res));

  const setCharacterFromID = id => {
    const foundCharacter = characters.find(character => character.id === id);
    setCurrCharacter(foundCharacter);
  };

  getCharacterData();

  return {
    characters,
    character: currCharacter,
    setCharacter: setCharacterFromID
  };
};

//   const [val, setVal] = useState('');

//   useEffect(() => {
//     handleCharacterChange();
//   }, []);

//   const handleCharacterChange = () => {
//     getCharactersByStatus(val)
//       .then(setCharacters(characters));
//   };
//   const handleValChange = (val) => {
//     setVal(val);
//   };
//   return { characters, handleValChange, handleCharacterChange, val };
// };
