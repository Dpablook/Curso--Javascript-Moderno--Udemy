//Ejemplo de como utilizar la palabra this
//la palabra this marca los valores que estan dentro del objeto
//


const monitor = {
	caracteristica: "Monitor de 20 pulgadas",
	color: "Azul",
	precio: 3000,
	disponible: true,
	origen: "japon",
	informacion: function(){
		console.log(`Mostrar el color ${this.color} y el precio ${this.precio}`)
	}
}

monitor.informacion();


