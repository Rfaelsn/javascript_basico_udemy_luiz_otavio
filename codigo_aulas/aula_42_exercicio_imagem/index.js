const paisagem = (altura,largura) => largura > altura;
    // não é necessário usar ternario pois é uma operação booleana
    // return largura > altura ? true : false;


console.log(`Paisagem: ${paisagem(320,640)}`);