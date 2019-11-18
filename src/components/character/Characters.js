import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

const Characters = ({ characters }) => {
  const characterElements = characters.map((character, i) => {
    return (
      <li key={i}>
        <Character {...character} ></Character>
      </li>
    );
  });

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Characters;
