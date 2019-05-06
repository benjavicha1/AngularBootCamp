"use strict";
exports.__esModule = true;
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
// class Point {
//     x: number;
//     y: number;
//     constructor(x?: number, y?: number) {
//         this.x = x;
//         this.y = y;
//     }
//     draw() {
//         console.log('x: ' + this.x);
//         console.log('y: ' + this.y);
//     }
// }
// let point = new Point(1, 2);
// point.x = 8;
// point.y = 9;
// point.draw();
// ------------------------------------- //
// Access Modifiers 
// ------------------------------------- //
// class Point {
//     private x: number;
//     private y: number;
//     constructor(x?: number, y?: number) {
//         this.x = x;
//         this.y = y;
//     }
//     draw() {
//         console.log('x: ' + this.x);
//         console.log('y: ' + this.y);
//     }
// }
// let point = new Point(1, 2);
// point.draw();
// ------------------------------------- //
// Access Modifiers in Constructor Parameters
// ------------------------------------- //
// class Point {
//     constructor(private x?: number, private y?: number) {
//     }
//     draw() {
//         console.log('x: ' + this.x);
//         console.log('y: ' + this.y);
//     }
// }
// let point = new Point(1, 2);
// point.draw();
// ------------------------------------- //
// Properties
// ------------------------------------- //
// class Point {
//     constructor(private x?: number, private y?: number) {
//     }
//     draw() {
//         console.log('x: ' + this.x);
//         console.log('y: ' + this.y);
//     }
//     getX() {
//         return this.x;
//     }
//     setX(value) {
//         if (value < 0) 
//             throw new Error('Value cannot be less than zero.')
//         this.x = value;
//     }
// }
// let point = new Point(1, 2);
// console.log('x was: ' + point.getX()); // output: "1"
// point.setX(3)
// point.draw();
// ------------------------------------- //
// Properties with keyword get and set
// ------------------------------------- //
// class Point {
//     constructor(private _x?: number, private _y?: number) {
//     }
//     draw() {
//         console.log('x: ' + this._x);
//         console.log('y: ' + this._y);
//     }
//     get x() {
//         return this._x;
//     } 
//     set x(value) {
//         if (value < 0) 
//             throw new Error('Value cannot be less than zero.')
//         this._x = value;
//     }
// }
// let point = new Point(1, 2);
// console.log('x was: ' + point.x); // output: "1"
// point.x = 10;
// point.draw();
// ------------------------------------- //
// Modules
// ------------------------------------- //
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
point.draw();
