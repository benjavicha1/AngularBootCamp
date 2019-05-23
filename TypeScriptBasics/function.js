function greet(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Smmith'; }
    console.log("Hello, " + firstName + " " + lastName + "!");
}
greet('Xavier', 'something');
