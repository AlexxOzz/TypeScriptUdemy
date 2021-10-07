/**
 * Modificadores:
 *      Private
 *      Public
*/
var user = false;
var Animal = /** @class */ (function () {
    function Animal(name, size) {
        this.name = name;
        this.size = size;
    }
    Animal.prototype.move = function () {
        console.log('Me estoy moviendo');
    };
    Object.defineProperty(Animal.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "setName", {
        set: function (name) {
            if (user) {
                this.name = name;
            }
            else {
                console.log("You don't have permise.");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var Pet = new Animal('Snake', 5);
Pet.move();
Pet.setName = 'Rabbit';
console.log(Pet.getName);
