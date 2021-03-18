//agregar, eliminar y remplazar

const producto = "Lavarropa de 500 dolares";

console.log(producto);

//para remplazar una palabra por otra
console.log(producto.replace("dolares", "euros"));

//para cortar una cadena de texto
//corta del 0 posicion al 10 posicion

console.log(producto.slice(0, 10));

//aca corta solo del 5 para adelante
console.log(producto.slice(5));

//alternativa a slice
console.log(producto.substring(2,11));