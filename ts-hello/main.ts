// function log(message) {
//     console.log(message);
// }

// var message = "hello world!";
// log(message);


// Declaring variables and scope
// ------------------------------------------- //
// function doSomething() {
//     // for (var i = 0; i < 5; i++) {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }

//     console.log('Finally: ' + i);
// }
// doSomething();
// ------------------------------------------- //


// Data tyeps 
// ------------------------------------------- //
// let count = 5;
// count = 'a';

// let a: any;
// a = 1;
// a = true;

// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1, true, 'a', false];

// const colorRed = 0;
// const colorGreen = 1;
// const colorBlue = 2;

// enum Color {Red, Green, Blue = 9, Purple};
// let backgroundColour = Color.Purple;
// console.log(backgroundColour); // output: "10"
// ------------------------------------------- //


// Type Assertion 
// ------------------------------------------- //
// let message: string = 'abc';
// let endWithC = message.endsWith('c');
// console.log(endWithC); // output: "true"

// // if remove the type => intellisense is gone
// let message;
// message = 'abc';
// let endWithC = (<string> message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// console.log(endWithC); // output: "true"
// console.log(alternativeWay); // ouput: "true"
// ------------------------------------------- //


// Arrow Functions
// ------------------------------------- //
// let doLog = (message) => console.log(message);
// doLog("Arrow function");
// ------------------------------------- //


// Interfaces 
// ------------------------------------- //
// interface Point {
//     x: number,
//     y: number,
// }

// // "point" is an object parameter
// // "Point" is an inline annotation or object literal  
// let drawPoint = (point: Point) => {
//     console.log('x: ' + point.x);
//     console.log('y: ' + point.y);
// } 

// drawPoint({
//     x: 1,
//     y: 2
// });


// Classes 
// ------------------------------------- //
class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log('x: ' + this.x);
        console.log('y: ' + this.y);
    }
    getDistance(another: Point) {
        // ..
    }
}

let point = new Point();
point.draw();