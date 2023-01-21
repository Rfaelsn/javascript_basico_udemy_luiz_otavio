//operadores de comparação em JS
/* 
 > maior que 
 >= maior ou igual a  
 < menor que
 <= menor ou igual a
 == igualdade (não devemos utilizar pois só campara valores e não tipo)
 === igualdade estrita (compara valor e tipo)
 != diferença (não devemos utilizar pois só campara valores e não tipo)
 !== diferença estrita (compara valor e tipo)
*/

//ex igualdade comum e estrita
const num1 = 2;
const num2 = '2';

//console.log(num1==num2); 
/* retornará true pois o js converte a string para number mas deixar isso com o js 
não é uma boa pratica */

//então usaremos a igualdade estrita
//console.log(num1===num2); //assim retornará false

//diferença
//console.log(num1!=num2);//retornará falso pois considerá o valor da string como number

//diferença estrita 
console.log(num1!==num2);// retornará true pois considera o tipo e string não é iguala  number