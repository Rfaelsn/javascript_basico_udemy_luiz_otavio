function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => (`${this.nome} ${this.sobrenome}`); //prioridade proto
}

Pessoa.prototype.nomeCompleto = () => (`${this.nome} ${this.sobrenome}`);

pessoa1 = new Pessoa('Rafael', 'Silva');    
console.dir(pessoa1);