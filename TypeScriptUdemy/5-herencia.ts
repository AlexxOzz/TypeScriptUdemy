class Padre{
    nombre:string;
    edad:number;

    constructor( nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    //metodos
    mostrarNombre():void{
        console.log(this.nombre);
    }
}
class Hijo extends Padre{
    apellido:string

    constructor(nombre:string,edad:number,apellido:string){
        //llama al constructor de la clase padre para incializar y heredar
        super(nombre,edad)
        this.apellido=apellido;
    }

    mostrarNombreHijo():void{
        console.log(this.nombre+" "+this.apellido);
    }
}
const father = new Padre('Daniel',23)
const nuevoHijo = new Hijo('Daniel',23,'Ortiz')

father.mostrarNombre();
nuevoHijo.mostrarNombreHijo();
