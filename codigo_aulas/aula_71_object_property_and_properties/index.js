//constructor function
//object.defineProperty

function Produto(nome,preco,estoque){

    Object.defineProperties(this,{
        nome:{
            enumerable: true, // pode ser visualizada ?
            value: nome, // define valor da propriedade
            writable: false, // o seu valor pode ser alterado ?
            configurable: false // pode ser re-configurada por outro object.defineProperty ?
        },
        preco: {
            enumerable: true, // pode ser visualizada ?
            value: preco, // define valor da propriedade
            writable: false, // o seu valor pode ser alterado ?
            configurable: false // pode ser re-configurada por outro object.defineProperty ?
        }
    });
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // pode ser visualizada ?
        value: estoque, // define valor da propriedade podendo ser qualquer valor inclusive função
        writable: false, // o seu valor pode ser alterado ?
        configurable: false // pode ser re-configurada por outro object.defineProperty ?
    });

    //não irá sobrescrever o define property anterior pois o configurable está false
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true, // pode ser visualizada ?
    //     value: estoque, // define valor da propriedade podendo ser qualquer valor inclusive função
    //     writable: false, // o seu valor pode ser alterado ?
    //     configurable: false // pode ser re-configurada por outro object.defineProperty ?
    // });
}

const p1 = new Produto('Arroz', 22, 32);
// delete p1.estoque;
// p1.estoque = 22;
p1.estoque = 22; // não altera com writable false
console.log(p1);

//retornando um array com as chaves de um objeto
const chaves = Object.keys(p1);
console.log(chaves);
