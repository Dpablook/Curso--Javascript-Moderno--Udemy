// para sellar un objeto es necesario usar Freeze o Seal
// con seal no se pueden agregar o eliminar propiedades 
// con freeze no te deja hacer nada
// con seal si se pueden modificar las existentes

object.freeze();
object.seal();