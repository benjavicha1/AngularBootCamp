let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 1

var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

console.log(Object.keys(inventory[0]));