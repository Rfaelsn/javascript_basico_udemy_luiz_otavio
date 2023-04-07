// pai da herança: produto
// herdeiros: caneca e camiseta

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (valor) {
    this.preco -= valor;
}

Produto.prototype.aumento = function (valor) {
    this.preco += valor;
}

function Caneca(nome,preco, material) {
    Produto.call(this, nome, preco);
    this.material = material;
}

//garantimos que os métodos e atributos venham na herança
//atrib protto é um objeto aqui substituimos pelo onjeto da classe Produto
Caneca.prototype = Object.create(Produto.prototype);

//setamos o construtor como do construtor Caneca
Caneca.prototype.constructor = Caneca;

Caneca.prototype.aumento = function (percentual) {
    this.preco += this.preco * (percentual / 100);
}

function Camiseta(nome,preco,cor,estoque){
    Produto.call(this, nome, preco);
    this.cor = cor;

    Object.defineProperty(this, 'estoque',{
        configurable: false,
        enumerable: true,

        get: function(){
            return estoque;
        },

        set: function(valor){
            if(typeof valor !== 'number'){
                return;
            }
            estoque = valor;
        }
    });
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const p1 = new Produto('Caneta', 1);

const camiseta = new Camiseta('Camiseta JS', 20, 'Azul', 100);
//usando setter
camiseta.estoque = 110;

//usando método de aumento do produto
camiseta.aumento(10);

const caneca1 = new Caneca('Caneca JS', 80, 'Porcelana');
caneca1.aumento(25);

console.log(p1);
console.log(caneca1);
console.log(camiseta);
//usando getter
console.log(camiseta.estoque);
