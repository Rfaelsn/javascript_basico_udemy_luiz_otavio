class DispositivoEletronico{

    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado`);
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado`);
        }
        this.ligado = false;
    }

}

class SmartPhone extends DispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome,tamanhoTela){
        super(nome);
        this.tamanhoTela = tamanhoTela;
    }

    //sobrescrevendo métodos
    ligar(){
        console.log(`ligando o ${this.nome} com método sobrescrito`);
    }
}

const smartPhone1 = new SmartPhone('Xiaomi','azul', 'Mi A2 Lite');
const tablet = new Tablet('Tab S','7 polegadas');

smartPhone1.ligar();
console.log(smartPhone1);

console.log();

console.log(tablet);
tablet.ligar();