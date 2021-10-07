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
var vehiculo = /** @class */ (function () {
    function vehiculo(marca, fecha, puertas) {
        this.marca = marca;
        this.fecha = fecha;
        this.puertas = puertas;
    }
    //metodos
    vehiculo.prototype.acelerar = function () {
        console.log('Estoy acelerando');
    };
    vehiculo.prototype.frenar = function () {
        console.log('estoy frenando');
    };
    return vehiculo;
}());
var coche = new vehiculo('Toyota', '21/05/2022', 4);
coche.acelerar();
coche.frenar();
console.log(coche.marca);
