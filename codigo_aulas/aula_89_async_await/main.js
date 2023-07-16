//promisses:
function rand (min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject(new Error('O valor deve ser uma String'));
            return;
        }

        setTimeout(()=>{
            resolve(msg)
        }, tempo);
    })
}

//promise.all
const promises = [
    esperaAi('Promisse 1', rand(1,5)),
    esperaAi('Promisse 2', rand(1,5)),
    esperaAi('Promisse 3', rand(1,5)),
]

Promise.all(promises)
    .then(valor =>{
        console.log(valor);
    })
    .catch(err =>{
        console.log(err);
})

//promise.race
//sempre retorna o primeiro a ser executado. porém executa todos
//se um deles tiver um erro. só será mostrado o erro caso ele seja o primeiro a ser exibido
const promisesRace = [
    //'valor', // este valor sempre será o mais rapido pois esta resolvido
    esperaAi('Promisse 1', rand(1,5)),
    esperaAi('Promisse 2', rand(1,5)),
    esperaAi('Promisse 3', rand(1,5)),
]

Promise.race(promisesRace)
    .then(valor =>{
        console.log(valor);
    }).catch(e=>{
        console.log(e);
    });

//Promisse.resolve()
//ideal para condições onde a função deve retornar uma promisse:
function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Pagina em cache');
        //return Promise.reject() // irá levar para o .catch do retorno da função
    }else{
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina()
    .then(dadosPagina =>{
        console.log(dadosPagina);
    })
    .catch(e=> console.log(e));