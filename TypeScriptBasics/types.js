// Boolean
var isThisVideoDone = false;
// Number
var myNumber = 4;
// Text, string
var myName = "Ben";
// Template strings
var greeting = "Hello, " + myName;
var greeting2 = "Hello, " + myName;
// Arrays
var count = [1, 2, 3, 4];
var count2 = [1, 2, 3, 4];
// If you don't know the type
var anything = 4;
anything = 'some text';
anything = false;
// Returning nothing/ type
function greeter(name) {
    console.log('Hello, ' + name);
}
var greeter2 = function (name) { console.log('Hello, ' + name); };
var g = greeter2('ben');
console.log(g); // output: undefined
// Enums 
var joystickStatus = 2;
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
;
if (joystickStatus === Directions.Left) {
    // Move the play to left
    console.log(joystickStatus);
}
