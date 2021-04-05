//Los Json son formatos para intercambio de datos y un subconjunto de objetos
//Es muy similar a un objeto


var miObjeto = {
	nombre: "Pablo",
	appellido: "Ramirez",
}

//esto convierte un objeto a una cadena de texto JSON
console.log(JSON.stringify(miObjeto))

//cual es su importacia? es el intercambio de datos mas usados 
//por ejemplo para intercambiar datos del front al backend
//por ejemplo las api usan json
//