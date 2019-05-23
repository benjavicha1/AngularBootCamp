function greet(firstName: string, lastName: string = 'Smmith') : void {
    console.log(`Hello, ${firstName} ${lastName}!`);
}

greet('Xavier', 'something');