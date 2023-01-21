let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
//resultado:
// solução 1
    /*let aux;
    aux = varA;
    varA = varB;
    varB = varC;
    varC = aux;*/
// solução 2:
[varA, varB, varC] = [varB, varC, varA]; //forma mais atual de resolvver sem criar uma nova variavel.

console.log(varA, varB, varC);

