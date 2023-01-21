const numero = Number(prompt("digite um número"));
const tit_value = document.getElementById("tit_value");
tit_value.innerHTML = numero

const texto_div = document.getElementById("texto");

texto_div.innerHTML = `<p>a raiz quadrada deste número é <strong>${Math.sqrt(numero)}</strong></p>`;
texto_div.innerHTML += `<p>é um número inteiro ? <strong>${Number.isInteger(numero)}</strong></p>`;
texto_div.innerHTML += `<p>o número recebido é um NaN ? <strong>${Number.isNaN(numero)}</strong></p>`;
texto_div.innerHTML += `<p>Número arredondado para baixo: <strong>${Math.floor(numero)}</strong></p>`;
texto_div.innerHTML += `<p>Número arredondado para cima: <strong>${Math.ceil(numero)}</strong></p>`;
texto_div.innerHTML += `<p>Exibindo o número com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`;