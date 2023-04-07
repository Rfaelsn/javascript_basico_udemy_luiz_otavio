//exemplo usando herança via prototype com objetos criados via função construtora.
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

//definindo metodos via prototype para economizar recursos
Produto.prototype.desconto = function (percentual) {
    this.preco -= this.preco * (percentual / 100);
}

Produto.prototype.aumento = function (percentual) {
    this.preco += this.preco * (percentual / 100);
}

const p1 = new Produto('Caneta', 100);

p1.desconto(80);
console.log(p1);

//tornando um obj literal em um objeto da classe Produto
//para a transformação de um objeto literal para o tipo da função construtora
//as chaves do objeto deve ser igual, assim podemos fazer essa definição via prototype
const p2 = {
    nome: 'Caneta',
    preco: 120
}

//passamos o prototype da função construtora.
Object.setPrototypeOf(p2, Produto.prototype);

p2.desconto(80); // agora pode executar metodos de Produto()

console.log(p2);

//criando objeto e setando prototype

//pode receber como argumento um objeto de configuração de chaves do objeto criado.
const p3 = Object.create(Produto.prototype,{
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
});

p3.aumento(10);

console.log(p3);


