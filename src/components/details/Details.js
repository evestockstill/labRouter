import React from 'react';
import styles from './Details.css';
import { useCharacters } from '../../hooks/characters';


// 

const Details = ({ match }) => {
  const character = useCharacters(match.params.id);
  const { characters } = useCharacters();

  const character = characters.find(character => character.id === id);

  return (
    <section className={styles.details}>
      {/* <h1>character.name</h1>
      <img src={characters.image} />
      <p>{character.status}</p>
      <p>{character.origin}</p> */}


      {}
    </section>
  );
};
export default Details;
