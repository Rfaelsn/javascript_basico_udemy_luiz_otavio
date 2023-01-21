//operadores lógicos 
/*
 &&  (And significa 'E' em uma expressão)
 || (Or significa 'OU' em uma expressão )
 ! (negação: nega o valor resultante de uma expressão trocando o valor para o inverso)
*/
//obs; podemos armazenar expressões em constantes (boolean)

// ex expressão &&
// const expressao = true && true && true;
// console.log(expressao);
// se todas forem verdade retorna true se ao menos uma for false retorna false

// ex expressão || 
// const expressao = false || false || false; // se ao menos uma for true a expressão retorna true
// console.log(expressao);
// apenas se todas forem falsas que ira retornar false

//ex  ! (negação)
// const expressao = true && true && true; 
// console.log(!expressao);//deveria retornar true mas negamos então retornará true
// console.log(!!expressao); //podemos negar a negação e também negar a negação da negação (muito raro)

//ex usuario
const usuario = 'Rafael';
const senha = '123456';

const verificarSenha = usuario === 'Rafael' && senha === '123456'; 
// caso as duas cond sejam verdade retorna true
console.log(verificarSenha); 