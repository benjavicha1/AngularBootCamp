class Animal {
    // property
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    // method
    walk(distance: number) {
        console.log('Hi, my name is ' + this.name + ` and I'm walking ${distance} meter`);
    }
}

let myAnimal = new Animal('Dave');
myAnimal.walk(10);

class Snake extends Animal {
    constructor(theName: string) {
        super(theName); // This will call its constructor from its parent class animal
    }

    // overwirte the method from the parent class
    walk(distance?: number) {
        console.log(`Snakes don't really walk.`);
    }
}

let mySnake = new Snake('snakie');
mySnake.walk();