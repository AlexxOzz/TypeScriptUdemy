/*Es una plantilla para la creacion de objetos que comparten un objeto definido
Metodos, atributos de dicho objeto
    objetos coche
        propiedades
            color
            marca
            numero ruedas
        metodos
            arrancar
            acelerar
            frenar
*/
class vehiculo{
    marca:string;
    fecha:string;
    puertas:number;

    constructor( marca:string,fecha:string,puertas:number){
        this.marca=marca;
        this.fecha=fecha;
        this.puertas=puertas;
    }
    //metodos
    acelerar():void{
        console.log('Estoy acelerando');
    }
    frenar():void{
        console.log('estoy frenando');
    }

}

const coche = new vehiculo('Toyota','21/05/2022',4)

coche.acelerar();
coche.frenar();

console.log(coche.marca);