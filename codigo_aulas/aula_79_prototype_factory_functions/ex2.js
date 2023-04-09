
const falar = {
    falar(){
        console.log(`${this.nome} está falando`);
    }   
}

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}
const comer = {
    comer(){
        console.log(`${this.nome} está comendo`);
    }   
}

const pessoaPrototype = {...falar, ...beber, ...comer};
//ou const pessoaPrototype = Object.assign({}, falar, beber, comer);

function criaPessoa(nome,sobrenome){
    return Object.create(pessoaPrototype,{
        nome:{value:nome},
        sobrenome:{value:sobrenome}
    })
}

const pessoa2 = criaPessoa('Rafael','Nascimento');
pessoa2.beber();