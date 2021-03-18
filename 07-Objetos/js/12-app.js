// Metodos para objetos
// Object.keys: Sirve para obtener las llaves del objeto
// color, precio, origen,etc.
// Object.values: Devuelve los valores de las llaves
// Object.entries: Retorna todo lo que esta en las llaves: nombre y valor


const monitor = {
	caracteristica: "Monitor de 20 pulgadas",
	color: "Azul",
	precio: 3000,
	disponible: true,
	origen: "japon",
}

console.log(Object.keys(monitor));
console.log(Object.values(monitor));
console.log(Object.entries(monitor));