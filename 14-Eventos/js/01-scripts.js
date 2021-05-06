//Eventos
//
//
//
//

console.log(1);
document.addEventListener('DOMContentLoaded', () => {
	console.log(2); //Este aparece ultimo por que el evento DOM se ejecuta cuando se termina de cargar el DOM
})
console.log(3);

// Evento Mouse 
// 
// 

const nav = document.querySelector('.navegacion');
nav.addEventListener("click", () => {
	console.log("hola navegacion");
})



// Evento Input 



// Evento Submit en formularios



// Evento Scroll 

window.addEventListener('scroll', () =>  {
	console.log("Scroll");
})


//para saber donde empezar:

const premium = document.querySelector('.premium');
const ubicacion = premium.getBoundingClientRect(); //esto nos va a dar los datos que nececitamos

console.log(ubicacion);

if (ubicacion.top < 100){
	console.log("visible");
}
else{
	console.log("aun no");
}


// Evento Bubbling 
// es cuando de un elemento se dan varios eventos
// como se evia esto:
// .stopPropagation()
// se puede con otra forma llamada delagation (buscar)
// 
