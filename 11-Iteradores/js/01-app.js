//Iteradores:


//For
/*
for (valor; condicion; incremento) {
	codigo;
}
*/

//Ejercicio de FizzBuzz

// multiplos de 2 = fizz
// multiplos de 3 = buzz
// de ambos = fizzbuzz
/*
for ( var i=1; i <= 100; i++) {
	if (i%15 === 0) {
		console.log(`el numero ${i} es FizzBuzz`);
	}
	else if (i%3 === 0) {
		console.log(`el numero ${i} es Buzz`);
	}
	else if(i%2 === 0){
		console.log(`el numero ${i} es Fizz`);
	}
} 
*/

//While

let i = 0;

while(i < 10){
	console.log(`El numero es ${i}`)
	i++
}

//Do while


do{
	console.log(`El numero es ${i}`)
	i++
}while(i < 15);



// meotodo .forEach y .map
// .forEach recorre todo el array
// .map => es igual al forEach pero la diferencia es que crea un nuevo arreglo


const pendiente = ["comer", "dormir", "jugar"];

pendiente.forEach((pendiente)=>{
	console.log(`Lo pendiente es ${pendiente}`);
})

//For of y For in
//For of es para los array (de vuelve los valores)
//For in es para los objetos (de vuelve los indices)


for(i of pendiente){
	console.log(i);
}
for(i in pendiente){
	console.log(i);
}


