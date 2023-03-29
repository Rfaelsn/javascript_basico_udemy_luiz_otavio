//retorne as pessoas que tem nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo o nome termina com a

const pessoas = [
    {nome:'Luiz', idade:61},
    {nome:'Maria', idade:23},
    {nome:'Eduardo', idade:55},
    {nome:'Letícia', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:47},
];

//pessoas que tem nome com 5 letras ou mais
const pessoasNomeGrande = pessoas.filter(pessoa => pessoa.nome.length >= 5);

//pessoas com mais de 50 anos
const pessoasMaiores50 = pessoas.filter(pessoa => pessoa.idade > 50);

//pessoas cujo o nome termina com a
const pessoasNomeFinalA = pessoas.filter(pessoa => {
    return pessoa.nome.toLowerCase().endsWith('a');
});

console.log(pessoasNomeGrande);
console.log(pessoasMaiores50);
console.log(pessoasNomeFinalA);
