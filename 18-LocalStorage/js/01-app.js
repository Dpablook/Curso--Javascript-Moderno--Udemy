//Local storage
//pertenece a la api de js, se puede ejecutar con windows o localstorage
//
//Las propiedades localStorage y sessionStorage permiten guardar pares clave / valor en un navegador web.
// El objeto localStorage almacena datos sin fecha de vencimiento. Los datos no se eliminarán cuando se cierre el navegador 
// y estarán disponibles el próximo día, semana o año.
// La propiedad localStorage es de solo lectura.
//
//


//para ejecutarlo solo debemos hacer esto:

localStorage.setItem("Nombre", "Pablo"); //Esto queda guardado en el navegador
//aparece en consola de inspeccion, almacenamiento y almacenamiento local

//solo se pueden almacenar strings

//otros se pueden guardar con JSON:

const producto = {
	nombre: "Monitor",
	precio: 200
}

const productoString = JSON.stringify(producto); //con esto se convierte un objeto en un string 
console.log(productoString);

localStorage.setItem("producto", productoString);//con esto lo almacenamos como un string

//como se recuperan los datos guardados:

const nombre = localStorage.getItem("Nombre");
console.log(nombre);

//Pero que pasa con los JSON:
//hay que convertirlo a objeto.

console.log(JSON.parse(productoString));

//Como se eliminan elementos?

localStorage.removeItem("Nombre");

//Como se Actualiza?

const meses = ["Enero", "Febrero"];
const mesesString = JSON.stringify(meses);
localStorage.setItem("Meses", mesesString);
meses.push("Marzo");
localStorage.setItem("Meses", meses);