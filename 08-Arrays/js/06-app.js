//Eliminar elementos con splice


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
console.table(meses);

// Para eliminar al final del arreglo:

meses.pop();
console.table(meses);

// Para eliminar al incio del arreglo:

meses.shift();
console.table(meses);

//para eliminar con splice:
// este toma dos parametros el primero la posicion y segundo la cantidad de elementos

meses.splice(0,1);
console.table(meses);