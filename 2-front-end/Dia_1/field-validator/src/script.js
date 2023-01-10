import { 
  isEmail,
  isURL,
  isDate,
  isHexColor,
  isTaxID,
} from 'validate';

const url = (str) => isURL(str);

const email = (str) => isEmail(str);

const data = (str) => isDate(str, { format: 'DD/MM/YYYY', delimeiters: ['/', '-'] });

const hex = (str) => isHexColor(str);

const cpf = (str) => isTaxID(str, 'pt-BR');

const input = document.querySelector('input');
const select = document.querySelector('select');
const verifyBtn = document.querySelector('button');
