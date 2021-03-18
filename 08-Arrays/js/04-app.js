// Como modificar un arreglo


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
console.table(meses);

//Pregunta de entrevista: cuando un const se puede modificar? en un arreglo o un objeto

//una forma es con:

meses[6] = "Julio";

console.table(meses);

//Otro metodo para agregar al final:

meses.push("Agosto");
console.table(meses);

//Otro metodo para agregar al principio:

meses.unshift("Diciembre");
console.table(meses);