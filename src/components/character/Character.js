import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ character }) => {
  const { image, name } = character;
  return (
    <section className={styles.container}>
      <figure>
        <img src={image} />
        <figcaption className={styles.name}>{name}</figcaption>
      </figure>
    </section>
  );
};

Character.propTypes = {
  character: PropTypes.objectOf({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default Character;
