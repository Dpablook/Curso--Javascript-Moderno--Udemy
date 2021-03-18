//Algunos Metodos para Arreglos:


//el metodo forEach

const meses = [
	{nombre: "Enero", estacion: "verano"},
	{nombre: "Febrero", estacion: "verano"},
	{nombre: "Marzo", estacion: "otoño"},
	{nombre: "Abril", estacion: "otoño"},
	{nombre: "Mayo", estacion: "otoño"},
	{nombre: "Junio", estacion: "invierno"},
];
console.table(meses);

meses.forEach( function(mes){
	console.log(`${mes.nombre} - ${mes.estacion}`);
});

//Otro metodo es el .map
//es muy parecido al anterior pero este crea un nuevo arreglo
meses.map( function(mes){
	console.log(`${mes.nombre} - ${mes.estacion}`);
});
