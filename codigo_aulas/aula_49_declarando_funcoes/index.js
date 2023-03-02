// usando a palavra reservada funcion ocorre hoisting
falaOi();


function falaOi(){
    console.log('Oi');
}


//funções são first çlass opbject (objetos de primeira classe)
//function expression
const souUmDado = function (){
    console.log('Sou um dado');
};

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);

const funcaoArrow = () =>{
    console.log('sou uma arrow function');
};

funcaoArrow();

// ex funções que recebem funções
// setInterval(funcaoArrow,1000);

//função em objetos
const obj = {
    falar(){
        console.log('Oi');
    }
};

obj.falar();
