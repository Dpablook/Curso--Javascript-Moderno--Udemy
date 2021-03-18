
//Agregar mas propiedades al objeto

let monitor = {
	caracteristica: "Monitor de 20 pulgadas",
	color: "Azul",
	precio: 3000,
	disponible: true
}

//agregar

monitor.origen = "japon";

//eliminar

delete monitor.color;


console.log(monitor);