import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ image, name }) => {
  return (
    <section className={styles.Container}>
      <section className={styles.container}>
        <figure>
          <img src={image} />
          <figcaption className={styles.name}>{name}</figcaption>
        </figure>
      </section>
    </section>
  );
};

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Character;
