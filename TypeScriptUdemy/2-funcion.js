/**
 * Funciones con parametros
 * Funciones vacias
 * Funciones Flecha 'const op = ()=>{}'
 */
function sumar(a, b) {
    return a + b;
}
var suma = sumar(2, 2);
console.log(suma);
//-------------------------------------
function showTextOne() {
    console.log("This is a text one");
}
//--------------------------------------
var showTextTwo = function () {
    console.log("This is a text two");
};
//------------------------------------
showTextOne();
showTextTwo();
////-------------opcionales && definidos
/*
Las variables opcionales son aquellas que son nombradas como
parametros pero no son relevantes en el proceso
edad?:number
Tambien podemos dejar parametros definidos
*/
var opcionales = function (nombre, apellido, edad, altura) {
    if (altura === void 0) { altura = 186; }
    if (!edad) {
        console.log("Mi nombre es " + nombre + " " + apellido + " mido " + altura + "cm");
    }
    else {
        console.log("Mi nombre es " + nombre + " " + apellido + " mi edad es " + edad + " y mido " + altura + "cm");
    }
};
opcionales("Daniel", "Ortiz", 23, 158);
