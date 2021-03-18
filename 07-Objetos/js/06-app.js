//Extraer y agregar a variable objeto dentro del objeto
let monitor = {
	caracteristica: "Monitor de 20 pulgadas",
	color: "Azul",
	precio: 3000,
	disponible: true,
	origen: "japon",
	informacion: {
		peso: "1 kilo",
		altura: "500 cm"
	}
}

let {origen,informacion, informacion:{peso}} = monitor

console.log(origen, informacion, peso);