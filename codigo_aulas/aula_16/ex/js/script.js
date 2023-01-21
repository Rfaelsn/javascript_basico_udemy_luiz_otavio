const valor = Number(prompt('digite um número'));
const valorTitulo = document.getElementById('valor_recebido'); 
const valorRaizQuad = document.getElementById('sqrt');
const valorTitVerific = document.getElementById('valor_receb_verific');
const verificInteiro = document.getElementById('verific_inteiro');
const verifcNan = document.getElementById('verific_NaN');
const arredondBaixo = document.getElementById('arredond_baixo');
const arredondCima = document.getElementById('arredond_cima');
const num_casa_deci = document.getElementById('num_casa_deci');

//operações
//h1//
valorTitulo.innerHTML = valor;
//div raiz quadrada
valorRaizQuad.innerHTML = Math.sqrt(valor);
//div que verifica se é inteiro
valorTitVerific.innerHTML = valor;
verificInteiro.innerHTML = Number.isInteger(valor);
//div que verifica  se é NaN
verifcNan.innerHTML = Number.isNaN(valor);
// div que arredonda valor para baixo
arredondBaixo.innerHTML =  Math.floor(valor);
//div que arredona valor para cima 
arredondCima.innerHTML = Math.ceil(valor);
//div que mostra valor com duas casas decimais
num_casa_deci.innerHTML = valor.toFixed(2);