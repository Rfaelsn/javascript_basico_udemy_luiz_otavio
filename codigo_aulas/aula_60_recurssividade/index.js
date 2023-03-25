function recursiva(inicio){
    console.log(inicio);
    if(inicio >= 10){
        return;
    }
    inicio++;
    recursiva(inicio);
}

recursiva(0);