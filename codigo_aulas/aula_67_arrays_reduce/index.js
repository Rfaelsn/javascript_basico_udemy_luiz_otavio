//reduce 
//some todos os numeros
//some apenas os números pares
const numeros = [5, 50 , 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//somando todos os números
const total = numeros.reduce((acumulador, valor, indice, array)=>{
    
    return acumulador += valor;
}, 0); //argumento para inicio do acumulador (opcional)

//forma mais simples
// const total = numeros.reduce( (acumulador, valor) => acumulador += valor);

console.log(total);

//somando todos os números pares
const totalPares = numeros.reduce((acumulador, valor)=>{
    if (valor % 2 === 0) {
        acumulador += valor;
    }
    return acumulador;
}, 0);

console.log(totalPares);