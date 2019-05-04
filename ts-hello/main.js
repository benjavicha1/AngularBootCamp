// function log(message) {
//     console.log(message);
// }
// var message = "hello world!";
// log(message);
// ------------------------------------- //
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
// ------------------------------------- //
// interface Point {
//     x: number,
//     y: number
// }
// let drawPoint = (point: Point) => {
//     console.log('x: ' + point.x);
//     console.log('y: ' + point.y);
// }
// drawPoint({
//     x: 1,
//     y: 2
// });
