//El Object constructor



//Esto se llama object literal
const monitor = {
	caracteristica: "Monitor de 20 pulgadas",
	color: "Azul",
	precio: 3000,
	disponible: true,
	origen: "japon",
}

// y de esta forma object constructor
// Se constuye una funcion constructora de objetos y lo reutilizamos
// 

function producto(color,precio,origen){
	this.color = color;
	this.precio = precio;
	this.origen = origen;
}

const monitor2 = new producto("rojo", 4000, "Alemania");
console.log(monitor2);

const monitor3 = new producto("verde", 7000, "Canada");
console.log(monitor3);
