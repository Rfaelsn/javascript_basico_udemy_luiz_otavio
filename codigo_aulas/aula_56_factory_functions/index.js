//factory functions
function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome, //chave igual a parâmetro então o valor é recebido de forma auto
        sobrenome,
        altura,
        peso,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();//retira do começo do array e retorna o valor

            // insere os valores do array em apenas um valor string separado pelo argumento passado
            this.sobrenome = valor.join(' ');
        },
        
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
//usando set e get, as funções se comportam como atributos
p1.nomeCompleto = 'Rafael Silva do Nascimento';
console.log(p1.nomeCompleto);
console.log(`o imc de ${p2.nome} é ${p2.imc}`);