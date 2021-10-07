/*
Daniel esto es el primer modulo, 
resumido modularizacion Basico POO
Con la palabra 'export' adquieren la propiedad
*/
export const nombre:string='Daniel'

export class Persona{
    nombre:string
}

export interface Humano{
    nombre:string
}

export const mostrar = (dato:string):void =>{
    console.log('Morstrar')
}
