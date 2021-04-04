//Ventajas de las funciones son reutilizables

function sumar(){
	console.log(10 + 5)
}

sumar();

//Existe una segunda forma:
//se llama funcion expresion


const sumar2 = function(){
	console.log(20 + 5)
}

sumar2();

//cual es la diferencia?:
//en el hosting de js (cuando se cargan el codigo en dos vueltas) 
//la primero forma funciona correctamente

//Algunas funciones que existen en javascript
// js cuenta con 4000 funciones ya predeterminadas
// estas se conocen como librerias

//ej:

/*
alert();
prompt();
*/

//diferencia entre funciones y metodos?
//Las funciones se definen fuera de las clases. 
//Los métodos se definen dentro de y son parte de las clases.

//Que es un parametro por default:
// si no se agrega un valor al parametro si le puede poner uno por defecto

function llamar(nombre, apellido="desconocido"){
	console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}`)
}
llamar("pablo");

//Como se encadenan las funciones?
//Se pueden meter una adentro de otra


// se pueden agragar funciones dentro de los objetos

const reproduccion = {
	reproducir: function(){
		console.log(`Estoy reproduciendo...`)
	}
}

reproduccion.reproducir();

//Que son los Arrow function?
//Son otra forma de declarar funciones
//
//

//forma normal:
const aprendiendo = function(){
	console.log(`aprendiendo las arrow function`)
}
aprendiendo();
//arrow function:
const aprendiendo2 = () =>{console.log(`seguimos aprendiendo las arrow function`)}
aprendiendo2()

//Los parametros y argumentos dentro de los arrow function
const aprendiendo3 = (tecnologia) =>{console.log(`seguimos aprendiendo ${tecnologia}`)}
aprendiendo3("javascript");





