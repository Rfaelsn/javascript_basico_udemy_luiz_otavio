//ternarios em js

const pontuacaoUsuario = 1000;

const nivelUsusario = pontuacaoUsuario >= 1000 ? 'usuário Vip' : 'usuário Normal';

//definindo valor padrão com o 'ou' '||'
const corUsuario = null;

const corPadrao = corUsuario || 'pink';

console.log(nivelUsusario,corPadrao);
