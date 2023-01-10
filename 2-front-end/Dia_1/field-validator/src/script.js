import {
  isEmail,
  isURL,
  isDate,
  isHexColor,
  isTaxID,
} from 'validator';
import './style.css';

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
  const textToVeri = input.value;
  const veriType = select.value;
  const strType = select.selectedOptions[0].innerText;
  h2
    .innerText = `A validação retornou ${verifies[veriType](textToVeri)} para ${strType}`;
});
