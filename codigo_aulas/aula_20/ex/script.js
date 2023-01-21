/* 
    Tipos primitivos(imutáveis): String, number, boolean, undefined, null(bigint, symbol) - valores copiados 
    quando atribuidos

    Referência (mutável): array, object function - passados por referência (quando atribuidos a nova constante/variavel apenas irá apontar para o mesmo espaço de memória)
*/

//ex primitivos
/* let a = 'Rafael';
let b =  a;
a = 'barry';

console.log(a,b); */

//ex referência
/* editando n2 também edita n 
const n=[1,2,3];
const n2 = n;

n2.pop();

console.log(n2,n2); */

//caso não seja necessario este comportamento podemos usar spratch da seguinte forma
/* const n=[1,2,3];
const n2 = [...n];

n2.pop();

console.log(n2,n); */

//ex referência com objeto
/* const pessoa = {
    nome:'Rafael',
    sobrenome:'Nascimento'
}

const pessoa2 = pessoa;
pessoa2.nome = 'jubiscreuza';

console.log(pessoa,pessoa2); */

//fazendo a cópia em vez de ref com spratch
const pessoa = {
    nome:'Rafael',
    sobrenome:'Nascimento'
}

const pessoa2 = {...pessoa};
pessoa2.nome = 'jubiscreuza';

console.log(pessoa,pessoa2);