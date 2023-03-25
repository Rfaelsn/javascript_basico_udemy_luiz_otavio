//exercício usando factory function
function criaCalculadora(){
    return{
        display: document.querySelector('.input-calc'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        realizaConta(){
            let conta = this.display.value;
            try {
                conta = eval(conta);
                
                if(!conta){
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;

            } catch (error) {
                alert('Erro ao realizar o calculo');
                return;
            }
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        pressionaEnter(){
            this.display.addEventListener('keydown', (e) => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        cliqueBotoes(){
            //this = calculadora
            document.addEventListener('click', (e) => {
                const elemento = e.target;

                if(elemento.classList.contains('btn-num')){
                    this.btnDisplay(elemento.innerText);
                }

                if(elemento.classList.contains('btn-clear')){
                    this.clearDisplay(elemento);
                }

                if(elemento.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if (elemento.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            })
        },

        //adiciona valores ao display 
        btnDisplay(valor){
            this.display.value += valor;
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();

//clique botoes sem arrow function:
// cliqueBotoes(){
//     //this = calculadora
//     document.addEventListener('click', function(e){
//         const elemento = e.target;

//         if(elemento.classList.contains('btn-num')){
//             this.btnDisplay(elemento.innerText);
//         }
//     }.bind(this))
// },