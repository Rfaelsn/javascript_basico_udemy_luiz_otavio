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
        }

        setTimeout(()=>{
            resolve(msg)
        }, tempo);
    })
}

esperaAi('Conexão com BD', rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando Dados do BD', rand(1,3));
    }).then(resposta => {
        console.log(resposta);
        return esperaAi(123, rand(1,3));
    }).then(resposta => {
        console.log(resposta);
        return esperaAi('Exibindo Dados na tela', rand(1,3));
    })
    .catch((err) => {
        console.log(`ERRO: ${err}`);
    });