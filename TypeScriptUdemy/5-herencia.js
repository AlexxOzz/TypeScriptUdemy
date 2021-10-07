var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Padre = /** @class */ (function () {
    function Padre(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    //metodos
    Padre.prototype.mostrarNombre = function () {
        console.log(this.nombre);
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(nombre, edad, apellido) {
        var _this = 
        //llama al constructor de la clase padre para incializar y heredar
        _super.call(this, nombre, edad) || this;
        _this.apellido = apellido;
        return _this;
    }
    Hijo.prototype.mostrarNombreHijo = function () {
        console.log(this.nombre + " " + this.apellido);
    };
    return Hijo;
}(Padre));
var father = new Padre('Daniel', 23);
var nuevoHijo = new Hijo('Daniel', 23, 'Ortiz');
father.mostrarNombre();
nuevoHijo.mostrarNombreHijo();
