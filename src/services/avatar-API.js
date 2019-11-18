export const getAvatarCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(results => results.json())
    .then(characters => {
      characters.map(character => ({
        id: character._id,
        image: character.photoUrl,
        name: character
      }));
    });
};

