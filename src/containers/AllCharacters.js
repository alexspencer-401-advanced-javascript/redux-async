import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Characters from '../components/character/Characters';
import { getCharacterPromise } from '../actions/characterActions';
import { getCharacters, getCharactersLoading } from '../selectors/charactersSelectors';

function AllCharacters({ characters, loading, fetchCharacters }) {

  useEffect(() => {
    fetchCharacters();
  }, []);

  if(loading) return <h1>Loading characters...</h1>;

  return (
    <Characters characters={characters} />
  );
}

AllCharacters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchCharacters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCharacters() {
    dispatch(getCharacterPromise());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
