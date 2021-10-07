interface Persona{
    //atributos
    nombre:string
    
    //Atributo Opcional se puede con el signo '?'
    edad?:number
    //modificadores de acceso 'readonly' solo se puede modificar desde la interfaz
    readonly apellido:string
}

function caminar(persona:Persona):void{
 console.log('la persona '+persona.nombre+' esta camiando')
}
let pruebaReadOnly:Persona={nombre:'Alexx',apellido:'Muñoz'}
/*Apellido no puede ser modificado
pruebaReadOnly.apellido='Muñoz'
*/

let newPerson={nombre:'Daniel',apellido:'Ortiz'}
caminar(newPerson)