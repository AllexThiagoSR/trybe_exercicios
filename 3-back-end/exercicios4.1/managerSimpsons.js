const { rejects } = require('assert');

const fs = require('fs').promises;

const getSimpsons = async () => JSON.parse(await fs.readFile('./simpsons.json'));

const showAllSimpsons = async () => {
  try {
    const data = await getSimpsons();
    data.forEach(({ id, name }) => {
      console.log(`${id} - ${name}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

const findSimpsonbyId = async (id) => {
  try {
    const data = await getSimpsons();
    return new Promise((resolve, reject) => {
      const founcCharacter = data.find((character) => id === parseInt(character.id));
      if (!founcCharacter) reject(new Error('id não encontrado'));
      resolve(founcCharacter);
    });
  } catch (error) {
    console.log(error.message);
  }
};

showAllSimpsons();
findSimpsonbyId(110)
  .then((data) => console.log(data))
  .catch();
