import React from 'react';
import PropTypes from 'prop-types';
import styles from './Details.css';
import { useCharacter } from '../../hooks/characters';

const Details = ({ match }) => {
  const character = useCharacter(match.params.id);

  const episodeLinks = character.episode.map(url => (
    <a key={url} href={url}>
      {' '}
      Episode {url.split('/').slice(-1)[0]}
    </a>
  ));
  return (
    <>
      <section className={styles.details}>
        <h1 className={styles.name}>{character.name}</h1>
        <img src={character.image} className={styles.detimg} />
        <p>{character.status}</p>
        <p>{character.species}</p>
      </section>
      <section className={styles.episodes}>{episodeLinks}</section>
    </>
  );
};
Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
export default Details;
