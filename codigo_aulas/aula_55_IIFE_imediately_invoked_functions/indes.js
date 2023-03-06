// IIEF imediately inoked function expression
(function(idade, peso, altura){

    const sobrenome = 'Nascimento'
    function criaNome(nome){
        return `${nome} ${sobrenome}`
    }

    function falaNome() {
        console.log(criaNome('Rafael'));
    }

    falaNome();
    console.log(idade, peso, altura);
    
})(21, 68, 1.87);