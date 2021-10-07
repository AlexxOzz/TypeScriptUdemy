function caminar(persona) {
    console.log('la persona ' + persona.nombre + ' esta camiando');
}
var pruebaReadOnly = { nombre: 'Alexx', apellido: 'Muñoz' };
/*Apellido no puede ser modificado
pruebaReadOnly.apellido='Muñoz'
*/
var newPerson = { nombre: 'Daniel', apellido: 'Ortiz' };
caminar(newPerson);
