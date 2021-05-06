//Que es el DOM?
//DOM es una abreviatura de Document Objet Model.
//El DOM es la estructura de objetos que genera el navegador cuando se carga un documento 
//y se puede alterar mediante Javascript para cambiar dinámicamente los contenidos y aspecto de la página.
//
//es decir son todos los elemento de la pagina web donde se puede intereactuar con js
//
//


//con document se selecion todo
//es la referencia principal

// let elemento = document;
// console.log(elemento);

// let elemento = document.images;
// console.log(elemento);


// getElementsByClassName('')
// cada vez se usa menos
// selecciona elemento por sus clases

let elemento = document.getElementsByClassName('hero');
console.log(elemento);
//Problema las clases se pueden repetir
//usar lo mismo de siempre (o usar un id y listo)


// getElementById('')
// para seleccionar un id (los id son unicos por supuesto)
// 

let elemento2 = document.getElementById('footer');
console.log(elemento2);

// querySelector()
// actual similar a get elementbyid pero puede retornar clases (y mas de una)
// todoslos selectores de css funcionan
// si hay muchas clases iguales solo trae el primero

let elemento3 = document.querySelector('.card'); //recordar que lleva punto es como un selector de css (cambia para el id)
console.log(elemento3)

// querySelectorAll()
// la diferrencia con el anterior es que retorna todos los elemento del selector y no soslo el primero como el acnterior
//
//

let elemento4 = document.querySelectorAll('.card')
console.log(elemento4);

//Para acceder a los contenidos de los elementos en este caso los textos
// .innerHTML //nos trae el codifo html
// .innerText // 
// .TextContent // solo el texto
// 

// document.querySelector('.contenido-hero h1').textContent = "Hola como estan";


//Para cambiar el css
//recorda los estilos no llevan - (por ejemplo: justifyContent)
// para cambiar:
// .style.color = "red";
// pero lo ideal es cambiar las clases y luego modificar en el css
// 
// 
// 

//Traversing de DOM
//recorer elementos en el DOM
//
//

let navegacion = document.querySelector(".navegacion");
console.log(navegacion);

//importante los espacios en blanco se consideran elementos
//


//como eliminar elementos del DOOM
// hay dos formas
// .remmove()
//	la otra es eliminar desde el padre
//	.removeChild();

// let elemento5 = document.querySelector('.titulo');
// elemento5.remove();

//Como generar HTML desde JS
//. createElement()
//.href = ...;
//.target = ...;
//.classList.add("");
// y otros

let elemento6 = document.createElement("p"); //creamos el elemento 
elemento6.textContent = "Hola"; //agregamos el contenido
console.log(elemento6);
navegacion.appendChild(elemento6); //con esto se inserta en el html



