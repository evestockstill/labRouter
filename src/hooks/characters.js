import { useState, useEffect } from 'react';
import { getCharacters, getCharacter } from '../services/rickMortyApi';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(setCharacters);
  });
  return characters;
};

export const useCharacter = id => {
  const [character, setCharacter] = useState({
    episode: []
  });
  useEffect(() => {
    getCharacter(id).then(setCharacter);
  });

  return character;
};
