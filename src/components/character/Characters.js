import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Character.css';
import Character from './Character';
import { useCharacters } from '../../hooks/characters';

const Characters = () => {
  const characters = useCharacters();

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Link to={`/character/${characters.id}`}>
        <Character {... character} />
      </Link>
    </li>
  ));
  return (
    <ul className={styles.list}>
      {characterElements}
    </ul>
  );
};
export default Characters;
