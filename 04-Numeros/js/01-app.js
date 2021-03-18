//Creacion de numeros:


const num1 = 10;
const num2 = 20;
const num3 = 20.1;
const num4 = -20;
console.table(num1,num2,num3,num4);

//Realizar operaciones con numeros

//suma

resultadosuma = num1 + num2;
console.log(resultadosuma);

//resta

resultadoResta = num1 - num2;
console.log(resultadoResta);

//multiplicacion

resultadoMulti = num1 * num2;
console.log(resultadoMulti);

//division

resultadoDiv = num1 / num2;
console.log(resultadoDiv);

//modulo
resultadoModulo = num1 % num2;
console.log(resultadoModulo);

//Objeto Math
// es un objeto con formulas matematicas

//PI
let resultadoPI = Math.PI;
console.log(resultadoPI); 

//Redondear
let resultadoRedondear = Math.round(2.3);
console.log(resultadoRedondear); 

//Raiz cuadrada
let resultadoRaiz = Math.sqrt(144);
console.log(resultadoRaiz); 

//Potencia
let resultadoPotencia = Math.pow(2,4);
console.log(resultadoPotencia); 

//Saber el minimo
let resultadoMin= Math.min(17,4,4,10,2,8);
console.log(resultadoMin); 

//Saber el minimo
let resultadoMax= Math.max(17,4,4,10,2,8);
console.log(resultadoMax); 

//Aleatorio
let resultadoRandom= Math.random();
console.log(resultadoRandom); 
//este tiene un problema que no da numeros enteros
//solucion:
let resultadoRandom2= Math.floor( Math.random() * 20);
console.log(resultadoRandom2); 
//este da del 0 al 30 con un redondeo


//Como se ejecutan las operaciones:
// En que orden:
// 1- *
// 2- /
// 3- +
// 4- -

//Incrementos y decrementos

let puntaje = 5;
console.log(puntaje);
puntaje++ //Primero llama a puntaje y luego lo suma
console.log(puntaje);
++puntaje //Lo suma desde el principio y luego lo llama
console.log(puntaje);
puntaje += 1 //
console.log(puntaje);

//Convertir String a numeros:

const numero1 = "10";
const numero2 = "10.2";
const numero3 = "uno";
const numero4 = 10;

console.log(numero1,numero2,numero3,numero4);
console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero2));
console.log(Number.isInteger(numero3));
console.log(Number.isInteger(numero4));