//exercício usando constructor function
function Calculadora(){
    this.display = document.querySelector('.input-calc')

    this.inicia = () =>{
        this.cliqueBotoes();
        this.pressionaEnter();
    }

    this.realizaConta = () =>{
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
    }

    this.clearDisplay = () => {
        this.display.value = '';
    }

    this.apagaUm = () =>{
        this.display.value = this.display.value.slice(0, -1);
    }

    this.pressionaEnter = () =>{
        this.display.addEventListener('keypress', (e) => {
            if(e.keyCode === 13){
                this.realizaConta();
            }
        })
    }

    this.cliqueBotoes = () => {
        //this = calculadora
        document.addEventListener('click', (e) => {
            const elemento = e.target;

            if(elemento.classList.contains('btn-num')){
                this.btnDisplay(elemento.innerText);
            }

            if(elemento.classList.contains('btn-clear')){
                this.clearDisplay();
            }

            if(elemento.classList.contains('btn-del')){
                this.apagaUm();
            }

            if (elemento.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        })
    }

    //adiciona valores ao display 
    this.btnDisplay = (valor) =>{
        this.display.value += valor;
        this.display.focus();
    }
    
}

const calculadora = new Calculadora();
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