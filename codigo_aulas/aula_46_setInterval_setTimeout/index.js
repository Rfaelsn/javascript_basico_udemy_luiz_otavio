function mostraHora() {
    const data = new Date();

    return data.toLocaleTimeString('pt-br',{
        hour12: false
    })
}

// define o que vai ser executado e em quanto tempo
//podemos armazenar em constantes
const intervaloExec = setInterval( function(){
    console.log(mostraHora());
}, 1000);

//define o tempo para a execução de uma operação uma unica vez
setTimeout(function(){
    // para a execução definida pela função setInterval
    clearInterval(intervaloExec);
}, 3000);

setTimeout(function(){
    console.log('olá mundo');
}, 5000);


