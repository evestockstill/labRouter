import React from 'react';
import styles from './Details.css';
import { useCharacters } from '../../hooks/characters';

const Details = (props) => {
  const id = props.match.params.id;
  const { characters } = useCharacters();

  const character = characters.find(character => character.id === id);

  return (
    <section className={styles.details}>
      <h2>Details Page</h2>
      {}
    </section>
  );
};
export default Details;
