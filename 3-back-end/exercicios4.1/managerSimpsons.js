const { rejects } = require('assert');
const { error } = require('console');

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
  const data = await getSimpsons();
  return new Promise((resolve, reject) => {
    const founcCharacter = data.find((character) => id === parseInt(character.id));
    if (!founcCharacter) reject(new Error('id não encontrado'));
    resolve(founcCharacter);
  });
};

const removeCharacterById = async (...ids) => {
  const data = await getSimpsons();
  const filteredData = data.filter(({ id }) => !ids.includes(id));
  await fs.writeFile('./simpsons.json', JSON.stringify(filteredData));
};

const writeFileWithSimpsonFamily = async () => {
  const data = await getSimpsons();
  const onlyFamily = data.filter(({ id }) => 1 <= id <= 4);
  fs.writeFile('./simpsonFamily.json', JSON.stringify(onlyFamily));
};

showAllSimpsons();
findSimpsonbyId(110)
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
removeCharacterById(6, 10);
writeFileWithSimpsonFamily();
