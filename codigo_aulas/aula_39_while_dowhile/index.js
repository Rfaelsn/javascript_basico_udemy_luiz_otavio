function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 10;
const max = 20;
let rand = 10;

//testa primeiro depois roda
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

// roda primeiro depois testa
do{
    rand = random(min, max);
    console.log(rand);
}while(rand !== 10);