var numero = 5; //desactualizado, ne su usa en Ts
var nombre = "Daniel"; // variable con sentencia let es modificable
var apellido = "Ortiz"; //agregamos el tipo de variable
var edad = 37; // Su valor no es modificable 
var dinero = 5000000; //numero constante
var si = true;
var no = false;
/*
    usamos en consola desde el directorio:
    cd C:\Users\Danii\Desktop\Curso Angular\TypeScriptUdemy\
    tsc --w .\tipado.ts
    node .\tipado.js
*/
console.log(nombre + " " + apellido);
//ARRAYS
var numeros = [1, 2, 3, 4];
var nombres = ["Daniel", "Esteban", "Alxander"];
var siOno = [true, false, false, true];
//OTRA MANERA DE HACER LOS ARRAYS
var coleccionesNumeros = [5, 6, 7, 8];
var coleccionesNombres = ["Danii Zii", "Tamashi", "Trueking"];
//TUPLA= donde podemos tener valores diferentes indicando los parametros y respetando ese orden
var tupla = [27, "Danii", true];
//imprimir las posiciones del array
console.log(tupla[1]);
