class Persona<T>{
    nombre:string
    //Que? se puede llamar a la misma T?
    edad:T

    Mostrar:(dato:T)=>T
}
//quede un poco perdido pero funciona 
const obj = new Persona()