import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ image, name }) => {

  return (
    <li className={styles.Character}>
      <img src={image} />
      <p>{name}</p>
    </li>
  );
};

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Character;
