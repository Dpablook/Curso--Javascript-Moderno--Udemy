//Estructuras de control:

//if, else if y else

const num1 = 19;
const num2 = 10;

if(num1 == 20){
	console.log("es igual")
}else if(num1 == 19){
	console.log("casi se cumple")
}
else{
	console.log("no es igual")
}

//switch para multiples condiciones:

switch(num1){
	case 18:
		console.log("Esta bien");
		break;
	default:
		console.log("no esta bien");
		break;
}

//para dos condiciones o mas &&

if(num1==19 && num2==10){
	console.log("puede pagar");
}


//para dos condiciones o mas ||

if(num1==18 || num2==10){
	console.log("puede pagar");
}

//Operador ternario:
// es con ? (eso es if) y : (eso es else)

console.log(num1 == 19 ? "ok" : "no esta ok");