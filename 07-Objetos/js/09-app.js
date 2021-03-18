// Unir objetos


const monitor = {
	caracteristica: "Monitor de 20 pulgadas",
	color: "Azul",
	precio: 3000,
	disponible: true,
	origen: "japon",

}

const informacion = {
		peso: "1 kilo",
		altura: "500 cm"
}

console.log(monitor,informacion);

//Para unirlos

const resultado = Object.assign(monitor,informacion)

console.log(resultado);

//Otra forma es con un spread 
// Esta es la mas utilizada

const resultado2 = {...monitor, ...informacion}

console.log(resultado2);

