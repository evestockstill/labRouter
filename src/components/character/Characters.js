import React from 'react';
// import PropTypes from 'prop-types';
import Character from './Character';
import { useCharacters } from '../../hooks/characters';
// bring in link for details? make a hook for useDetails?

const Characters = () => {
  const characters = useCharacters();
  const displayCharacters = characters.map(character => {
    <li key={character.name}>
      <Character {...character} />
    </li>;
  });
  return <ul>{displayCharacters}</ul>;
};
export default Characters;
