function teste(){
    //o this nesse contexto é o objeto node
    // console.log(this);
}

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentaVolume(){

        if(this.volume >= 100){
            return;
        }

        this.volume += 2;
    }

    baixarVolume(){
        
        if(this.volume <= 0){
            return;
        }

        this.volume -= 2;
    }

    //exemplo de método estatico
    static soma(x,y){
        //this é referente a propria classe
        console.log(this);
        return (x+y);
    }
}

const controle = new ControleRemoto('LG');
//chamada método estático.
console.log(ControleRemoto.soma(5,5));