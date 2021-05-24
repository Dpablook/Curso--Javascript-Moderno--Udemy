//OOP
//como construir clases en js?
//hay dos formas:

// class declaration (esta es la mas popular)

class Cliente{

	#nombre;//esto la hace privada (no funciona en firefox)

	constructor(nombre, saldo){
		this.#nombre = nombre;
		this.saldo = saldo;
	}

	mostrarInformacion(){
		return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
	}
}
const Juan = new Cliente('Juan', 400);
console.log(Juan);

//class expresion

// const Cliente2 = class {
// 	constructor(nombre, saldo){
// 		this.nombre = nombre;
// 		this.saldo = saldo;
// 	}
// 	mostrarInformacion(){
// 		return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
// 	}
// }

// const Juan2 = new Cliente2('Juan', 800);
// console.log(Juan2);

//como agregar metodos o prototypes??

// console.log(Juan.mostrarInformacion());
// console.log(Juan2.mostrarInformacion());

//como heredar una clase??
//

// class Empresa extends Cliente{
// }


// const empresa = new Empresa ('Codigo con Juan', 5000);
// console.log(empresa.mostrarInformacion());

//Publico
// console.log(juan.nombre) //esto es publico

//Private
// console.log(juan.#nombre);

//Protector