const fs = require('fs').promises;

const getCharacters = async (path) => JSON.parse(await fs.readFile(path));

const showAllSimpsons = async () => {
  try {
    const data = await getCharacters('./simpsons.json');
    data.forEach(({ id, name }) => {
      console.log(`${id} - ${name}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

const findSimpsonbyId = async (id) => {
  const data = await getCharacters('./simpsons.json');
  return new Promise((resolve, reject) => {
    const founcCharacter = data.find((character) => id === parseInt(character.id));
    if (!founcCharacter) reject(new Error('id não encontrado'));
    resolve(founcCharacter);
  });
};

const removeCharacterById = async (...ids) => {
  const data = await getCharacters('./simpsons.json');
  const filteredData = data.filter(({ id }) => !ids.includes(id));
  await fs.writeFile('./simpsons.json', JSON.stringify(filteredData));
};

const writeFileWithSimpsonFamily = async () => {
  const data = await getCharacters('./simpsons.json');
  const onlyFamily = data.filter(({ id }) => 1 <= id && id <= 4);
  fs.writeFile('./simpsonFamily.json', JSON.stringify(onlyFamily));
};

const addNewCharacterAtFamily = async (id) => {
  const data = await getCharacters('./simpsons.json');
  const family = await getCharacters('./simpsonFamily.json');
  const newCharacter = data.find((character) => id === parseInt(character.id));
  fs.writeFile('./simpsonFamily.json', JSON.stringify([...family, newCharacter]));
};

const replaceCharacter = async (firstId, secondId) => {
  const data = await getCharacters('./simpsons.json');
  const family = await getCharacters('./simpsonFamily.json');
  const newCharacter = data.find((character) => secondId === parseInt(character.id));
  const newFamily = family
    .map((character) => parseInt(character.id) === firstId ? newCharacter : character);
  console.log(newFamily);
  fs.writeFile('./simpsonFamily.json', JSON.stringify(newFamily));
}

// showAllSimpsons();
// findSimpsonbyId(110)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));
// removeCharacterById(6, 10);
// writeFileWithSimpsonFamily();
// addNewCharacterAtFamily(8);
replaceCharacter(8, 5);
