//2º forma(recomendada)//
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full', 
    timeStyle: 'short'
}
h1.innerHTML = data.toLocaleString('pt-BR', opcoes);

//ou
// h1.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "medium" }).format(new Date())

//ou
// h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});


//3º forma//
// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function zeroAEsquerda(num){
//     return num < 10 ? `0${num}` : num;
// }

// function definirDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto = [
//         'Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-feira','Sexta-Feira','Sabado'
//     ];
//     return diaSemanaTexto[diaSemana];
// }

// function definirMesTexto(mes) {
//     let nomeMes = [
//         'Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','agosto','Setembro','Outubro',
//         'Novembro','Dezembro'
//     ];
//     return nomeMes[mes];
// }

// function gerarDataFormatada(data) {
//     const dataSemana = data.getDay();
//     const mes = data.getMonth();

//     const nomeDia = definirDiaSemanaTexto(dataSemana);
//     const nomeMes = definirMesTexto(mes);

//     return(
//         `${nomeDia}, ${zeroAEsquerda(data.getDate())}`+
//         ` de ${nomeMes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
//     );
// }

// console.log(gerarDataFormatada(data));

// h1.innerHTML = gerarDataFormatada(data);




//1º forma//
// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function zeroAEsquerda(num){
//     return num < 10 ? `0${num}` : num;
// }

// function definirDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;

//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo';    
//             return diaSemanaTexto;
    
//         case 1:
//             diaSemanaTexto = 'Segunda-Feira';    
//             return diaSemanaTexto;
    
//         case 2:
//             diaSemanaTexto = 'Terça-Feira';    
//             return diaSemanaTexto;
    
//         case 3:
//             diaSemanaTexto = 'Quarta-Feira';    
//             return diaSemanaTexto;
    
//         case 4:
//             diaSemanaTexto = 'Quinta-Feira';    
//             return diaSemanaTexto;
    
//         case 5:
//             diaSemanaTexto = 'Sexta-Feira';    
//             return diaSemanaTexto;
    
//         case 6:
//             diaSemanaTexto = 'Sábado';    
//             return diaSemanaTexto;
    
//         default:
//             diaSemanaTexto = 'dia Inválido';
//             return diaSemanaTexto;
//     }
// }

// function definirMesTexto(mes) {
//     let nomeMes;

//     switch (mes) {
//         case 0:
//             nomeMes = 'Janeiro';    
//             return nomeMes;
    
//         case 1:
//             nomeMes = 'Fevereiro';    
//             return nomeMes;
    
//         case 2:
//             nomeMes = 'Março';    
//             return nomeMes;
    
//         case 3:
//             nomeMes = 'Abril';    
//             return nomeMes;
    
//         case 4:
//             nomeMes = 'Maio';    
//             return nomeMes;
    
//         case 5:
//             nomeMes = 'Junho';    
//             return nomeMes;
    
//         case 6:
//             nomeMes = 'Julho';    
//             return nomeMes;

//         case 7:
//             nomeMes = 'Agosto';    
//             return nomeMes;

//         case 8:
//             nomeMes = 'Setembro';    
//             return nomeMes;

//         case 9:
//             nomeMes = 'Outubro';    
//             return nomeMes;

//         case 10:
//             nomeMes = 'Novembro';    
//             return nomeMes;

//         case 11:
//             nomeMes = 'Dezembro';    
//             return nomeMes;

    
//         default:
//             nomeMes = 'mês Inválido';
//             return nomeMes;
//     }


// }

// function gerarDataFormatada(data) {
//     const dataSemana = data.getDay();
//     const mes = data.getMonth();

//     const nomeDia = definirDiaSemanaTexto(dataSemana);
//     const nomeMes = definirMesTexto(mes);

//     return(
//         `${nomeDia}, ${zeroAEsquerda(data.getDate())}`+
//         ` de ${nomeMes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
//     );
// }

// console.log(gerarDataFormatada(data));

// h1.innerHTML = gerarDataFormatada(data);
