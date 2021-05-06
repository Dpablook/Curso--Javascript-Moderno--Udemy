const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo

//.some
meses.forEach(mes => {
	if (mes == "Enero"){
	console.log(mes)
	}
});

const resultado = meses.includes("Diciembre");
console.log(resultado)

//En un arreglo de objetos se utiliza -some

const existe = carrito.some(producto => {
	return producto.nombre === "Celular"
})

console.log(existe); //Se comprueba si ese elemento esta en el arreglo

//.findindex

meses.forEach( (mes, index) => {
	if (mes == "Abril"){
		console.log(`Encotrado en el indice ${index}`)
	}
})

//Encontrar el elemento en el Arreglo
const indice = meses.findIndex(mes => mes === "Abril");
console.log(indice)

// Metodo .reduce
// toma una cantidad de datos y los une para entregar un resultado

let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total);

//con reduce

let resultado2 = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado2);


//Metodo Filter
//es como un filtro

let resultado3 = carrito.filter(producto => producto.precio > 400 );

console.log(resultado3); //Crea un nuevo arreglo con la condicion que se le pasa

// todos los precios que tenga menos de 600

let resultado4 = carrito.filter(producto => producto.precio < 600 );
console.log(resultado4);

// Todos menos los audifionos

let resultado5 = carrito.filter(producto => producto.nombre !== "Audifonos" );
console.log(resultado5);


// Metodo .find
// retona un elemento que cumpla la condicion

const resultado6 = carrito.find(producto => producto.nombre == "Tablet");
console.log(resultado6);


// Metodo .every 
//
//

const resultado7 = carrito.every(producto => producto.precio < 1000);
console.log(resultado7);


//Metodo .concat
// sirve para unir arreglos

const meses2 = ["Enero", "Febrero"];
const meses3 = ["Mayo", "Junio"];
const meses4 = ["julio", "Abril"];

let resultado8 = meses2.concat(meses3, meses4);
console.log(resultado8);

//Otra forma:
//con el spread operator

let resultado9 = [...meses2, ...meses3];
console.log(resultado9);

