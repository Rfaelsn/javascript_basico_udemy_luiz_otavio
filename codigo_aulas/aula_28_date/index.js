// a função construtora new Date() aceita o parâmetro sem segundos. que são somados com o horário de partida unix

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0); se passarmos 0 pega a data inicial unix
// const data = new Date(); // dessa forma pega a data atual

// const data = new Date(2023,3); aceita em ordem  ano,mes,dia,hora,min,sec,ms

//Date.now() tras o intervalo desde a data inicial unix até hj em ms e não precisa de objeto criado.
// const data = new Date(1674328343433); aceita ms para inicializar data
const data = new Date('2023-04-18 18:30:59.100'); // mais usual
console.log(`dia:  ${data.getDate()}`);
console.log(`mes:  ${data.getMonth()+1}`); // em js o mês começa do 0 até 11
console.log(`ano:  ${data.getFullYear()}`);
console.log(`hora:  ${data.getHours()}`);
console.log(`min:  ${data.getMinutes()}`);
console.log(`seg:  ${data.getSeconds()}`);
console.log(`ms:  ${data.getMilliseconds()}`);
console.log(`dia da semana:  ${data.getDay()}`); // pega o dia da semana 0 é domingo e 6 é sabado
console.log(data);