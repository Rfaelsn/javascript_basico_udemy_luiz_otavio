function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    }
}

const p1 = criaProduto('Camiseta');
p1.nome = 'sapato';
console.log(p1.nome);
