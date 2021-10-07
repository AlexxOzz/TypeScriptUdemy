//prueba de funcion normal
function mostrar(dato) {
    return dato;
}
console.log(mostrar('Daniel'));
/*prueba de funcion GENERICA, Se puede usar la T como si fuese la 'i' en un for
Este tipo de funciones estan diseñadas para recibir cualquier elemento
number, string, boolean. Esto es mencionado en tipado.
*/
function mostrarGenericas(dato) {
    return dato;
}
var tempp = mostrarGenericas(343);
console.log(mostrarGenericas(1));
