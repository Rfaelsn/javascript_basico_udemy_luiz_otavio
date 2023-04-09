function criaPessoa(nome,sobrenome){
    const pessoaPrototype = {
        falar(){
            console.log(`${nome} está falando`);
        },
        beber(){
            console.log(`${nome} está bebendo`);
        },
        comer(){
            console.log(`${nome} está comendo`);
        }
    };


    return Object.create(pessoaPrototype,{
        nome:{value:nome},
        sobrenome:{value:sobrenome}
    })
}

const pessoa1 = criaPessoa('Rafael','Nascimento');
pessoa1.beber();