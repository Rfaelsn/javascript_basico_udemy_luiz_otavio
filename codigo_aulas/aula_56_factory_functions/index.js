//factory functions
function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome, //chave igual a parâmetro então o valor é recebido de forma auto
        sobrenome,
        altura,
        peso,
        
        fala(assunto){
            //return `${this.nome} está conservanso sobre ${assunto}` // mesmo efeito porém menos performance
            return `${nome} está conversando sobre ${assunto}` // mais performatico pois pega direto do parâmetro(usando closure)
        },

        //getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2); // formata para o uso de duas casas decimais
        }
    };
}

const p1 = criaPessoa('João', 'Silva', 1.75, 80);
const p2 = criaPessoa('Maria', 'Silva', 1.80, 60);

console.log(p1.fala("computação"));
console.log(`o imc de ${p2.nome} é ${p2.imc}`);