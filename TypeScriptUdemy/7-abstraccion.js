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
    function Padre() {
    }
    Padre.prototype.saludar = function (saludo) {
        return saludo;
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hijo.prototype.caminar = function () {
        console.log();
    };
    Hijo.prototype.gatear = function () {
        console.log();
    };
    return Hijo;
}(Padre));
var Hija = /** @class */ (function (_super) {
    __extends(Hija, _super);
    function Hija() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hija.prototype.caminar = function () {
        console.log();
    };
    Hija.prototype.gatear = function () {
        console.log();
    };
    return Hija;
}(Padre));
