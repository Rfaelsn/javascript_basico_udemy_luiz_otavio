function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instância de DATE');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleString('pt-BR',{
        hour:'2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('2001-04-18 12:58:12');
    const hora = retornaHora(data);
    console.log(retornaHora());
    console.log(hora);
    console.log(retornaHora(2));
}catch(e){
    console.log(e);
}finally{
    console.log("Sempre serei executado");
}