/* 
fazemos isso para que nossas variaveis/constantes não de problema com let/const de bibliotecas no escopo golobal 
*/
function meuEscopo(){
    const form = document.querySelector('.form');
    const div_result = document.querySelector('.result_cad');

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        console.log(nome.value,sobrenome.value, peso.value, altura.value);
        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        div_result.innerHTML += `<p>nome: ${nome.value} sobrenome: ${sobrenome.value} 
        peso: ${peso.value} altura ${altura.value}</p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();