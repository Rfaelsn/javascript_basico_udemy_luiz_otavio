//capturar evento de submit do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit',function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    //caso passe uma string retorna um NaN (NaN == false)
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //mesma coisa de peso == false
    if (!peso) {
        setResultado('Peso inválido !', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida !', false);
        return;
    }

    const imc = getImc(peso,altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`
    setResultado(msg, true);
});

// Menos do que 18,5
// Entre 18,5 e 24,9
// Entre 25 e 29,9
// Entre 30 e 34,9
// Entre 35 e 39,9
// Mais do que 40

function getNivelImc (imc) {
    const nivelImc = ['Abaixo do Peso','Peso Normal','Sobrepeso','Obesidade Grau 1','Obesidade Grau 2','Obesidade Grau 3'];

    if (imc >= 39.9) {
        return nivelImc[5];
    }

    if (imc >= 34.9) {
        return nivelImc[4];
    }

    if (imc >= 29.9) {
        return nivelImc[3];
    }

    if (imc >= 24.9) {
        return nivelImc[2];
    }

    if (imc >= 18.5) {
        return nivelImc[1];
    }

    if (imc < 18.5) {
        return nivelImc[0];
    }

}

function getImc(peso, altura) {
    const imc = peso / altura **2;
    return imc.toFixed(2);
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    //adiciona uma classe ao elemento
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

function criaP(){
    //cria um elemento html
    const p = document.createElement('p');
    return p;
}