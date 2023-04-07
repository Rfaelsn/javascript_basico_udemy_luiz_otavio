const objA = {
    chaveA: 'valorA'
};

const objB = {
    chaveB: 'valorB'
};

const objC = {
    chaveC: 'valorC'
};

//define o objB como prototype de A 
Object.setPrototypeOf(objA, objB);
Object.setPrototypeOf(objB, objC);

console.dir(objA);