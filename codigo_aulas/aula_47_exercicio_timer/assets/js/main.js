//fução para fugir do escopo global
function relogio(){

    // const btnIniciar = document.querySelector('.btn-iniciar');
    // const btnParar = document.querySelector('.btn-parar');
    // const btnZerar = document.querySelector('.btn-zerar');
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    //função que formata a hora a partir do contador de segundos
    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-br',{
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    //inicia o timer do relogio
    function iniciaRelogio(){
        timer = setInterval(() =>{
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        },1000)
    }
    
    //detecta o click e executa a função de acordo com o elemento
    document.addEventListener('click', function(e){
        //target detecta automaticamente o elemento clicado
        const elemento = e.target;
        
        //classList acessa as classes css do elemento e o contais verifica se certa classe está na lista
        if(elemento.classList.contains('btn-iniciar')){
    
            //zera o timer para não acumular mais de um timer se clicarmos varias vezes em iniciar
            clearInterval(timer);
            relogio.classList.remove('pausado');
            iniciaRelogio();
    
        }else if(elemento.classList.contains('btn-parar')){
            relogio.classList.add('pausado');
            clearInterval(timer); 
    
        }else{
            clearInterval(timer);
            relogio.classList.remove('pausado');
            segundos = 0;
            relogio.innerHTML = '00:00:00';
        }
    });
    
    /* btnIniciar.addEventListener('click',function(e) {
        clearInterval(timer);
        relogio.classList.remove('pausado');
        iniciaRelogio();
    });
    
    btnParar.addEventListener('click',function(e) {
        relogio.classList.add('pausado');
        clearInterval(timer);    
    });
    
    btnZerar.addEventListener('click',function(e) {
        clearInterval(timer);
        relogio.classList.remove('pausado');
        segundos = 0;
        relogio.innerHTML = '00:00:00';
    }); */

}

relogio();
