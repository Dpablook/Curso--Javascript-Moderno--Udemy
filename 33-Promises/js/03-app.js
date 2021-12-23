const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;
    if(descuento){
        resolve('descuento aplicado');
    }else{
        reject('descuento no aplicado');
    }
})

aplicarDescuento
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))


//con .then si se cumpli el resolve podemos ejecutar el resultado
//por eso es importante para trabajar con las api

//hay tres valores posibles:
// fulfilled: el promise se cumplio
// rejectd: el promise no se cumplio
// pending: cuando el promise no tiene nada, no se cumplio ni fue rechazado
