var numero =5; //desactualizado, no se usa en Ts

let nombre= "Daniel";// variable con sentencia let es modificable
let apellido:string= "Ortiz" //agregamos el tipo de variable
const edad = 37;// Su valor no es modificable 
const dinero:number=5000000;//numero constante

let si:boolean = true;
let no:boolean = false;

/*
    usamos en consola desde el directorio:
    cd C:\Users\Danii\Desktop\Curso Angular\TypeScriptUdemy\
    tsc --w .\tipado.ts
    node .\tipado.js
*/

console.log(nombre+" "+apellido)

//ARRAYS
let numeros: number[]= [1,2,3,4];

let nombres: string[]= ["Daniel","Trueno","Alxander"];

let siOno:boolean[] = [true, false,false,true];

//OTRA MANERA DE HACER LOS ARRAYS

let coleccionesNumeros: Array<number>= [5,6,7,8];
let coleccionesNombres: Array<string>= ["Danii Zii","Alexx","Trueking"];

//TUPLA= donde podemos tener valores diferentes indicando los parametros y respetando ese orden

let tupla: [number, string, boolean]=[27,"Danii", true];

//imprimir las posiciones del array

console.log(tupla[1]);







