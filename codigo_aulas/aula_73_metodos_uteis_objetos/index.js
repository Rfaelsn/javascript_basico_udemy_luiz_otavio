//utilitarios
/* 
    Object.keys(objeto); //retorna array com as chaves do objeto
    Object.freeze(objeto); //não permite mais alterar o objeto

    //define e configura uma propriedade
    Object.defineProperty(objeto,'nomePropriedade'{objetoConfig}); 

    //define e configura varias propriedades
    Object.defineProperties(objeto);

    //retorna o objeto de configuração usado na propriedade passada
    Object.getOwnPropertyDescriptor(objeto,'nomePropriedade');

    //retorna array com os valores do objeto
    Object.values(objeto); 

    //retorna um array com um conjunto de [chave, valor]
    Object.entries(objeto);
*/

//copiando um objeto
const produto = {nome:'Caneca',preco:20,cor:'Amarela'}
//apenas copiando
//const novoProduto = {...produto};
//const novoProduto = Object.assign({},produto, {material:'porcelana'});
// const novoProduto2 = {nome:produto.nome, preco:produto.preco};

//copiando e criando uma nova propriedade
const novoProduto = {
    ...produto,
    material:'porcelana'
};

console.log(produto);
console.log(novoProduto);
console.log(Object.getOwnPropertyDescriptor(novoProduto, 'material'));

//  atrib via desestruturação    //retorna array com conjunto de chave e valor
for (const [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}

