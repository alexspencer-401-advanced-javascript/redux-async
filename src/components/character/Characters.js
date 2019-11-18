import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';
import styles from './Characters.css'

const Characters = ({ characters }) => {
  const characterElements = characters.map((character, i) => {
    return (
      <li key={i}>
        <Character {...character} ></Character>
      </li>
    );
  });

  return (
    <ul className={styles.Characters}>
      {characterElements}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired  
  })).isRequired
};

export default Characters;
