import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image, name }) => {

  return (
    <li>
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
