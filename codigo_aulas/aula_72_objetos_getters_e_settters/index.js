//getters e setters em objetos

function Produto(nome,preco,estoque){

    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // pode ser visualizada ?
        configurable: false, // pode ser re-configurada por outro object.defineProperty ?
        get: function(){
            return estoque;
        },
        set: function(value){
            if(typeof value !== 'number'){
                throw new TypeError('O valor passado deve ser numérico');
            }
            
            //deve fazer referencia ao valor passado no argumento do construtor(closure)
            //ou criamos uma variavel/constante privada e settamos o valor aqui
            estoque = value;
        }
    });

}

const p1 = new Produto('Arroz', 22, 32);
console.log(p1.estoque);
p1.estoque = 51;
console.log(p1.estoque);

