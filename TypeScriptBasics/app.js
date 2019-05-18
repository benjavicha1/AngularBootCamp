var x = 1;
if (x === 1) {
    var x_1 = 2;
    console.log(x_1);
    // expected output: 2
}
console.log(x);
// expected output: 1
var inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];
console.log(Object.keys(inventory));
