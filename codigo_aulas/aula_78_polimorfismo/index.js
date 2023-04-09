function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente`);
        this.consultaSaldo();
        return;
    }

    if(valor < 0){
        console.log(`valor de saque inválido`);
        this.consultaSaldo();
        return;
    }

    this.saldo -= valor;
    console.log(`saque de ${valor}R$ Realizado com sucesso.`);
    this.consultaSaldo();
}

Conta.prototype.depositar = function(valor){
    if(valor < 0){
        console.log(`valor de depósito inválido`);
        this.consultaSaldo();
        return;
    }

    this.saldo += valor;
    console.log(`depósito de ${valor}R$ Realizado com sucesso.`);
    this.consultaSaldo();
}

Conta.prototype.consultaSaldo = function(){
    console.log(
      `Agência/conta: ${this.agencia}/${this.conta} ` +
      `Saldo atual: ${this.saldo.toFixed(2)} R$`
    );
}

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

//definição do prototype e construtor correto
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo+this.limite)){
        console.log(`Saldo insuficiente`);
        this.consultaSaldo();
        return;
    }

    this.saldo -= valor;
    console.log(`saque de ${valor}R$ Realizado com sucesso.`);
    this.consultaSaldo();

}

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaCorrente1 = new ContaCorrente(11,22,100,100);
//saque acima do saldo. conta retira do limite e cliente fica com saldo negativo.
contaCorrente1.sacar(200);

console.log();

const contaPoupanca1 = new ContaPoupanca(11,21,100);
contaPoupanca1.sacar(200); // avisa saldo insuficiente pois poupanca n tem limite.
