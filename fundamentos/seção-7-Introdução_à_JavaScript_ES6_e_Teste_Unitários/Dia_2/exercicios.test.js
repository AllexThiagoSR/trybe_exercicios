const {myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./exercicios.js');

describe('Testes da função exercicio 1', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const array = [1, 2, 3, 4];
    const numberToRemove = 3;

    expect(myRemove(array, numberToRemove)).not.toContain(numberToRemove);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const array = [1, 2, 3, 4];
    const numberToRemove = 3;

    expect(myRemove(array, numberToRemove)).not.toEqual(array);
  });
});

describe('Testes da função do exercício 2', () => {
  it('Teste: Se for passado um número divisível por 5 e por 3 retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Teste: Se for passado um valor divisível apenas por 3 retorna "fizz"', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });

  it('Teste: Se for passado um valor divisível apenas por 5 o retorno é "buzz"', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  it('Teste: Se for passado um valor que não é divisível por 3 e nem por 5 retorna o próprio número', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });

  it('Teste: Se for passado um valor não númerico retorna false', () =>{
    expect(myFizzBuzz('aa')).toBe(false);
  });
});

describe('Testes de encode função do exercício 3', () => {
  const letters = ['a', 'e',  'i', 'o', 'u'];
  const numbers = [1, 2, 3, 4 ,5];
  const phrase = 'A trybe e da hora e estou aprendendo bastante, indo para o futuro';

  it('Teste: Se existe a função encode', () => {
    expect(typeof encode).toBe('function');
  });

  for (let index = 0; index < letters.length; index += 1) {
    it(`Teste: Se a vogal "${letters[index]}" é convertida para ${numbers[index]}`, () => {
      const regexNum = new RegExp(`${numbers[index]}`, 'g');
      const regexLet = new RegExp(`${letters[index]}`, 'g')
      const numMatches = encode(phrase).match(regexNum);
      const vowelMatches = phrase.match(regexLet);

      expect(numMatches.length).toBe(vowelMatches.length);
    });
  }

  it('Teste: Se as demais letras não são substituidas', () => {
    expect(encode(phrase)).toBe('A tryb2 2 d1 h4r1 2 2st45 1pr2nd2nd4 b1st1nt2, 3nd4 p1r1 4 f5t5r4');
  });

  it('Teste: Se a string retornada tem o mesmo tamanho da string passada como parâmetro', () => {
    expect(encode(phrase).length).toBe(phrase.length);
  });
});

describe('Tetes da função decode do exercicio 3', () => {
  const letters = ['a', 'e',  'i', 'o', 'u'];
  const numbers = [1, 2, 3, 4 ,5];
  const phrase = 'A tryb2 2 d1 h4r1 2 2st45 1pr2nd2nd4 b1st1nt2, 3nd4 p1r1 4 f5t5r4 é 10';

  it('Teste: Se existe a função decode', () => {
    expect(typeof decode).toBe('function');
  });

  for (let index = 0; index < letters.length; index += 1) {
    it(`Teste: Se o número "${numbers[index]}" é convertido para "${letters[index]}"`, () => {
      const regexNum = new RegExp(`${numbers[index]}`, 'g');
      const regexLet = new RegExp(`${letters[index]}`, 'g')
      const numMatches = phrase.match(regexNum);
      const vowelMatches = decode(phrase).match(regexLet);

      expect(numMatches.length).toBe(vowelMatches.length);
    });
  }

  it('Teste: Se os demais números não são substituidos', () => {
    expect(decode(phrase)).toBe('A trybe e da hora e estou aprendendo bastante, indo para o futuro é a0');
  });

  it('Teste: Se a string retornada tem o mesmo tamanho da string passada como parâmetro', () => {
    expect(decode(phrase).length).toBe(phrase.length);
  });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    expect(() => {hydrate('');}).toThrow('Informações inválidas');
    expect(() => {hydrate();}).toThrow('As informações sobre os drinks consumidos devem estar em uma string');
  });
});
