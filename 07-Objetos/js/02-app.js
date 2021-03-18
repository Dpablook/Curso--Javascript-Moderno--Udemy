//Acceder a los valores de un objeto

let monitor = {
	caracteristica: "Monitor de 20 pulgadas",
	color: "Azul",
	precio: 3000,
	disponible: true
}

//Sintaxis de punto
// para poder acceder a una de las propiedades

console.log(monitor.disponible);

//otra forma es con:

console.log(monitor['color']);