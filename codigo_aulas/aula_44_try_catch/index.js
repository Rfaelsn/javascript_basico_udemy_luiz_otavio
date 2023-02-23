function soma(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error("x e y precisam ser numéricos");
    }
    return (x+y);
}

console.log(soma(2,3));
try {
    console.log(soma('2',1));
} catch (e) {
    console.log(e);
}