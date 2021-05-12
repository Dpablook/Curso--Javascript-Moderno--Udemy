//Fechas

const diaHoy = new Date();

let valor = diaHoy; //las fechas son del tipo objeto



//lo importante son los metodos que hay en la fecha

valor1 = diaHoy.getFullYear();
valor2 = diaHoy.getMonth();
valor3= diaHoy.getMinutes();
valor4 = diaHoy.getHours();
valor5 = diaHoy.getTime();
valor6 = diaHoy.getFullYear();

console.log(valor);
console.log(valor1);
console.log(valor2);
console.log(valor3);
console.log(valor4);
console.log(valor5);
console.log(valor6);


//una libreria para trabajar con fechas es https://momentjs.com/
//revisar mejor mas tarde

moment.locale('es');
console.log(moment().format('LLLL'));