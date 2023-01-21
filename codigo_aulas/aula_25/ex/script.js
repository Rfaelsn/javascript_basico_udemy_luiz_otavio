/* 
bom dia 0 - 11
boa tarde 12 - 17
boa noite 18 - 23
*/

const hora = 50;

if(hora === 50){
    console.log('oi');
}

if (hora >= 0 && hora <= 11.59 ) {
    console.log('olá bom dia');
}else if(hora >=12 && hora<=17.59){
    console.log('olá boa tarde');
}else if(hora >=18 && hora<=23.59){
    console.log('olá boa noite');
}else{
    console.log('deu ruim');
}