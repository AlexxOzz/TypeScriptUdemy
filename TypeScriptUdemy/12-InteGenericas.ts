//esto es una interface generica
interface Persona<T>{
    nombre:T
}
let obj:Persona<string>={nombre:'Daniel'}
let num:Persona<number>={nombre:34}
//Funciona ☺