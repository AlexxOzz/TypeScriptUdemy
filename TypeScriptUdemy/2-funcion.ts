
/**
 * Funciones con parametros
 * Funciones vacias
 * Funciones Flecha 'const op = ()=>{}'
 */
function sumar(a:number, b:number):number{
    return a+b;
}

const suma:number=sumar(2,2);
console.log(suma);

//-------------------------------------
function showTextOne():void{
    console.log("This is a text one");
}

//--------------------------------------
const showTextTwo=():void=>{  
    console.log("This is a text two");
}
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
const opcionales = (nombre:string,apellido:string,edad?:number,altura:number=186)=>{

    if (!edad) {
        console.log(`Mi nombre es ${nombre} ${apellido} mido ${altura}cm`);
    }else{
        console.log(`Mi nombre es ${nombre} ${apellido} mi edad es ${edad} y mido ${altura}cm`);
    }
    
}
opcionales("Daniel","Ortiz",23,158);
