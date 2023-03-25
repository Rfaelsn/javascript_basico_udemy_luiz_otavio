//constructor functions

function Pessoa(nome, sobrenome){
    //atributos/metodos privados(nao podem ser acessados via ".")
    const id = 1;
    const metodoInterno = () => {
        console.log('método interno');
    };

    //atributos/metodos publicos
    this.nome = nome;
    this.sobrenome= sobrenome;
    this.metodo = () => {
        console.log(`sou um método de ${this.nome}`);
    }
}

const p1 = new Pessoa('Rafael', 'Sobrenome');
console.log(p1.nome);
p1.metodo();