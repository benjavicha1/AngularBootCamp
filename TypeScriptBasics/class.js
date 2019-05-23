var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    // method
    Animal.prototype.walk = function (distance) {
        console.log('Hi, my name is ' + this.name + (" and I'm walking " + distance + " meter"));
    };
    return Animal;
}());
var myAnimal = new Animal('Dave');
myAnimal.walk(10);
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(theName) {
        return _super.call(this, theName) || this;
    }
    // overwirte the method from the parent class
    Snake.prototype.walk = function (distance) {
        console.log("Snakes don't really walk.");
    };
    return Snake;
}(Animal));
var mySnake = new Snake('snakie');
mySnake.walk();
