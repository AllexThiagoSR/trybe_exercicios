const piece = 'PEAO';
let move = '';

switch(piece.toLowerCase()){
  case 'peao':
    move = '1 unidade para frente(2 ou 1 se for a primeira vez que esse peão vai se mover)'
    break;
  case 'bispo':
    move = 'diagonais'
    break;
  case 'cavalo':
    move = 'movimento em L'
    break;
  case 'torre':
    move = 'horizontal e vertical'
    break;
  case 'rainha':
    move = 'qualquer direção'
    break
  case 'rei':
    move = '1 unidade para qualquer direção'
    break
  default:
    move = 'não é uma peça de xadrez'
}

console.log(move);