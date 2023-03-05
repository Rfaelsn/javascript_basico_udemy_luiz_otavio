function timeRamdon(min = 1000, max = 3000){
    const tempoMs = Math.random() * (max - min) + min; 
    return Math.floor(tempoMs);
}

function f1(callBack){
    setTimeout(() =>{
        console.log('f1');
        if(callBack) callBack();
    }, timeRamdon());
}

function f2(callBack){
    setTimeout(() =>{
        console.log('f2');
        if(callBack) callBack();
    }, timeRamdon());
}

function f3(callBack){
    setTimeout(() =>{
        console.log('f3');
        if(callBack) callBack();
    }, timeRamdon());
}

//forma mais legível
f1(f1CallBack);

function f1CallBack(){
    f2(f2CallBack);
}

function f2CallBack(){
    f3(f3CallBack);
}

function f3CallBack(){
    console.log('olá mundo');
}


// forma menos legível
// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('olá mundo');
//         })
//     })
// });




