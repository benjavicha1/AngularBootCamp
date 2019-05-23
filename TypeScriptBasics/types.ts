// Boolean
let isThisVideoDone: boolean = false;


// Number
let myNumber: number = 4;


// Text, string
let myName: string = "Ben";


// Template strings
let greeting: string = "Hello, " + myName;
let greeting2: string = `Hello, ${myName}`;


// Arrays
let count: number[] = [1,2,3,4];
let count2: Array<number> = [1,2,3,4];


// If you don't know the type
let anything: any = 4;
anything = 'some text';
anything = false;


// Returning nothing/ type
function greeter(name: string) : void{
    console.log('Hello, ' + name);
}
let greeter2 = function(name: string): void { console.log('Hello, ' + name); };
let g = greeter2('ben');
console.log(g); // output: undefined


// Enums 
let joystickStatus  = 2;
enum Directions{ Up, Down, Left, Right };

if (joystickStatus === Directions.Left) {
    // Move the play to left
    console.log(joystickStatus);
}