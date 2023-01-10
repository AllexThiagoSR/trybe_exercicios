import {
  isEmail,
  isURL,
  isDate,
  isHexColor,
  isTaxID,
} from 'validator';

const verifies = {
  url: (str) => isURL(str),
  email: (str) => isEmail(str),
  data: (str) => isDate(str, { format: 'DD/MM/YYYY', delimeiters: ['/', '-'] }),
  hex: (str) => isHexColor(str),
  cpf: (str) => isTaxID(str, 'pt-BR'),
};

const input = document.querySelector('input');
const select = document.querySelector('select');
const verifyBtn = document.querySelector('button');
const h2 = document.querySelector('h2');

verifyBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const textToVerify = input.value;
  const veriType = select.value;
  h2.innerText = `A validação retornou ${verifies[veriType](textToVerify)}`;
});
