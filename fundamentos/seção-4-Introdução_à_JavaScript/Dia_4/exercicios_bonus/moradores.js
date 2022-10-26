let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

console.log(`O(A) morador(a) do bloco 2 ${moradores.blocoDois[moradores.blocoDois.length - 1].nome} ${moradores.blocoDois[moradores.blocoDois.length - 1].sobrenome} mora no ${moradores.blocoDois[moradores.blocoDois.length - 1].andar}º andar, apartamento ${moradores.blocoDois[moradores.blocoDois.length - 1].apartamento}`);