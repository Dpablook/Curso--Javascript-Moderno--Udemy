//como cortar espacios en blanco
const producto = "            Computadora           ";

console.log(producto);

//Eliminar del inicio


//ERROR NO FUNCIONAN
/*console.log(producto.trimStart());

console.log(producto.trimEnd());

console.log(producto.trimStart().trimEnd());
*/

// de esta forma si funciono pero elimina de los dos lados
// esta es la forma mas vieja :(

console.log(producto.trim());

