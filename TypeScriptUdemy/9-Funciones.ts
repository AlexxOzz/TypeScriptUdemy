interface General{
    (nombre:string, apellido:string, edad:number):void
}
//La interface es como un nuevo paramet
let funcionGeneralUno:General
funcionGeneralUno= function(nombre:string, apellido:string, edad:number):void{
    console.log(`${nombre} con el apellido ${apellido} y la edad ${edad}`)
}
//usar esta comilla es una mrda ``´
console.log(funcionGeneralUno('Daniel','Muñoz', 80))
