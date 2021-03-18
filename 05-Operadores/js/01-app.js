//Operadores
//


//De comparacion

let numero1 = 10;
let numero2 = 20;

resultado = numero1 < numero2;
console.log(resultado);

resultado = numero1 > numero2;
console.log(resultado);

resultado = numero1 == numero1;
console.log(resultado);

resultado = numero1 === numero1; //Comparador estrictor se fija en el tipo de dato
console.log(resultado);

let numero3 = "30"
let numero4 = 30
resultado = numero4 != numero3;
console.log(resultado);
resultado = numero4 !== numero3;//Estricto
console.log(resultado);

//Null y Undefined

//Null:
//Undefined: la variable esta definida pero esta vacia

let numeroIndefinido;
console.log(numeroIndefinido);

let numeroNull = null;
console.log(numeroNull);

//Este es un error de js que da como iguales a algo que no lo es:
console.log(numeroIndefinido == numeroNull)
console.log(numeroIndefinido === numeroNull);

