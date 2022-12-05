const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const authorBornIn1947 = (books) => {
  const authorFound = books.find((book) => book.author.birthYear === 1947).author.name;
  return authorFound;
}


const smallerName = (books) => {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) nameBook = book.name;
  });
  return nameBook;
}

const getNamedBook = (books) => books.find((book) => book.name.length === 26);

const everyoneWasBornOnSecXX = (books) => books.every((book) => {
  const yearOfBirth = book.author.birthYear;
  return yearOfBirth > 1900 && yearOfBirth <= 2000;
});

const someBookWasReleaseOnThe80s = (books) => books.some((book) => {
  const releaseYear = book.releaseYear;
  return releaseYear < 1990 && releaseYear >= 1980;
});

function authorUnique(books) {
  let anyBirthYearEqual;
  books.forEach((book) => {
    anyBirthYearEqual = books.some((book1) => {
      const sameBirthYear = (book.author.birthYear === book1.author.birthYear);
      const sameName = book.author.name !== book1.author.name;
      return sameBirthYear && sameName;
    });
  });
  return !anyBirthYearEqual;
}

// console.log(authorBornIn1947(books));
// console.log(smallerName(books));
// console.log(getNamedBook(books));
// console.log(everyoneWasBornOnSecXX(books));
// console.log(someBookWasReleaseOnThe80s(books));
// console.log(authorUnique(books));
// Desenvolver os teste para essas funções
