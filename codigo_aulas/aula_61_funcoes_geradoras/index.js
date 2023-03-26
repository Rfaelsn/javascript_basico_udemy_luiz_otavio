//funções geradoras
//exemplo 1:
function* geradora1(){
    yield 'valor 1';

    yield 'valor 2';
}

/* const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next()); */

//exemplo 2: gerador infinito
function* geradora2(){
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

/* const g2 = geradora2();
console.log(g2.next());
console.log(g2.next()); */

//exemplo3 geradora que usa outra geradora
function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

/* const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
} */

//exemplo 4: execução em ordem e return;
function* geradora5(){
    yield function(){
        console.log('vim da yield1');
    }

    return function() {
        console.log('vim do return');
    }

    yield function(){
        console.log('vim da yield2');
    }
}

const g5 = geradora5();
const funcao1 = g5.next().value;
const funcaoReturn = g5.next().value;
const funcao3 = g5.next().value;

funcao1();
funcaoReturn();
funcao3(); //não será executada
