//Destructing de object
// extraer del objeto y crear una variable

let monitor = {
	caracteristica: "Monitor de 20 pulgadas",
	color: "Azul",
	precio: 3000,
	disponible: true,
	origen: "japon"
}

//Creamos una variable y le agregamos una caracteristica del objeto

let {color} = monitor;
let {origen} = monitor;
let {precio,disponible} = monitor;

console.log(color,origen,precio,disponible);
