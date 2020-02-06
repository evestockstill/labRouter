import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Character from './Character';
import { useCharacters } from '../../hooks/characters';
// bring in link for details? make a hook for useDetails?

const Characters = () => {
  const { characters = [], setCharacter } = useCharacters();

  return (
    <ul>
      {characters.map(character => (
        <li key={character.name}>
          <Link to={'/details/' + character.id}>
            <Character character={character} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Characters;
