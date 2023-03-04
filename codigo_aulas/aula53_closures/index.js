function retornaFuncao(nome){
    return function(){ // possui o dominio de 3 escopos, o seu da func pai e global
        return nome; // closure, escopo local 'fechado' depois de adquirir oq precisa do escopo lexico de dominio
    }
}


const funcao = retornaFuncao('Rafael');
const funcao2 = retornaFuncao('João');

console.dir(funcao); // com closure determinado co valor 'Rafael'
console.dir(funcao2);

console.log(funcao(), funcao2());
