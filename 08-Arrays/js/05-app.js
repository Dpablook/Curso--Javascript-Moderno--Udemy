
//Otra forma de agregar al carrito es con el spread operator:

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
console.table(meses);

const meses2 = ["Julio", "Agosto", "Septiembre"];
console.table(meses2);

let meses3 = [];

let resultado;

resultado = [...meses3,meses,meses2];
console.table(resultado);