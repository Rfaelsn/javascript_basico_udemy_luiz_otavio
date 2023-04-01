function criaPessoa(nome,sobrenome,idade){
    //variaveis/constantes privadas
    const id = 2;

    //variaveis/constantes publicas
    return{
        nome,
        sobrenome, 
        idade,
        //pode ser feito sem get porém não poderemos acessar via ponto ('.')
        get nomeCompleto(){
            return (`${this.nome} ${this.sobrenome}`)
        }
    }
}

const p1 = criaPessoa('Rafael','Nascimento',21);

console.log(p1.id);
console.log(p1.nomeCompleto);