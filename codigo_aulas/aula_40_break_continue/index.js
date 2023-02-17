const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const numero of numeros) {
    
//     if(numero === 2){
//         continue; // continue pula para a proxima execução
//     }

//     if(numero === 7){
//         console.log('7 encontrado saindo do laço');
//         break; // sai da estrutura de repetição
//     }

//     console.log(numero);
// }

let i=0;
while (i< numeros.length) {
    let numero = numeros[i];

    if(numero === 2){
        //em caso de usar com while ou do while iterar antes do comando continue
        i++;
        continue; // continue pula para a proxima execução
    }

    if(numero === 7){
        console.log('7 encontrado saindo do laço');
        break; // sai da estrutura de repetição
    }

    console.log(numero);
    i++;
}