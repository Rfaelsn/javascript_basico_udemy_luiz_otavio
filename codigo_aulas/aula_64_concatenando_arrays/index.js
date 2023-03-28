const a1 = [1,2,3,4];
const a2 = [5,6,7,8];
//const a3 = a1.concat(a2);

//spread operator (...)
const a3 = [...a1, ...a2, ...[9,10,11],'Rafael'];

console.log(a3);