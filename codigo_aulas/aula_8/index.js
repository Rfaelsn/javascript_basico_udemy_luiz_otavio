/*atividade que troca trechos de texto por valores dass variavaveis
variaveis/constantes:nome,sobrenome,idade,peso,altura data de nascimento e imc 
*/
const nome='Rafael Silva';
const sobrenome='Do Nascimento';
const idade= 21;
const peso= 71;
const alturaEmM= 1.85;
let indiceDeMassaCorporal; //peso / altura*altura
let anoDeNascimento;
indiceDeMassaCorporal=peso/(alturaEmM*alturaEmM);
anoDeNascimento=2022-idade;
/*formar uma frase como a de exemplo com variaveis e constantes:
Luiz otavio miranda tem 30 anos , pesa 84kg tem 1.80 metros de altura e seu IMC é de 25.23423 luiz otávio nasceu em 1980  */
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${alturaEmM} metros de altura e seu IMC é de ${indiceDeMassaCorporal}`);
console.log(`${nome} nasceu em ${anoDeNascimento}.`);