const nome= 'Luiz'//String
const nome1= "Luiz"//String
const nome2= `Luiz`/*String. aqui podemos fazer a técnica de templates String que é o texto junto com variaveis que são delimitadas por "${}"*/
const num1= 10;//Tipo Number
const num2=10.5;//Também tipo Number
let nomeAluno; //tipo undefined não aponta para local nenhum na memória.
const sobrenomeAluno= null; // tipo null não aponta para local nenhum na memória. porém é feito propositalmente para indicar que esta variavel deve ter valor nulo diferente do undefined que simplesmente não foi preechido, em caso de precisar de valor nulo use  este método.
const aprovado= true; //tipo boolean tem 2 valores possiveis true ou false e geralmente é usado para alterar fluxos no nosso algoritmo.

//mostrando o tipo de cada variavel por console.log
//para colocar o tipo e o valor basta usar a função typeof mais a variavel colocar virgula e a variavel novamente conforme abaixo.
console.log(typeof nome, nome);
console.log(typeof nome1, nome1);
console.log(typeof nome2, nome2);
console.log(typeof num1, num1);
console.log(typeof num2, num2);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);
