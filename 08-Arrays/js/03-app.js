//Para Recorrer un arreglo es necesario:

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
console.table(meses);


// Primero es necesario saber cuanto mide el arreglo:

console.log(meses.length);

//Luego un iterador o bucle

for (var i = 0; i <= meses.length - 1; i++) {
	console.log(meses[i]);
}


