import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Character.css';
// import PropTypes from 'prop-types';
import Character from './Character';
import { useCharacters } from '../../hooks/characters';

const Characters = () => {
  const { characters = [], setCharacter } = useCharacters();

  // return (
  //   <ul>
  //     {characters.map(character => (
  //       <li key={character.name}>
  //         <Link to={'/details/' + character.id}>
  //           <Character character={character} />
  //         </Link>
  //       </li>
  //     ))}
  //   </ul>
  // );
};
export default Characters;
