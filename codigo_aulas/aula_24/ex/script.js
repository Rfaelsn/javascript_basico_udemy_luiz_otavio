//Avaliação de Curto-Circcuito 
/* 
 &&(usado quando queremos retornar o valor(conteudo) falso na avaliação de curto-circuito)
 || usado quando queremos retornar o valor(conteudo) true na avaliação de curto-circuito) ;

 js tem respostas boolean para qualquer elemento porém tem uma lista de componentes que retornam false
 chamamos de falsy
 false,
 0,
 "" '' `` //string vazia
 null/undefined
 NaN
*/
// ex curto-circuito usando &&
// function oi (){
//     return 'oi';
// }

// const vaiExecutar = true;

// console.log(vaiExecutar && oi());

//ex com || (ou)
function oi (){
    return 'oi';
}

const vaiExecutar = NaN;

console.log(vaiExecutar || oi());
