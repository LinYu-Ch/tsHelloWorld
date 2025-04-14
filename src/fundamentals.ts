// Static Typing, Typescript allows you to set the types for variables and expected function inputs and outputs
const greet = (name: string):string=> {
    return `hello ${name}`;
}
console.log(greet("John"));

// Type Inference, Typescript will alert you when you make a type change without an explicit typecast
// console.log(greet(1));  //uncoment to see error

// Interfaces
// typescript implements OOP interfaces like in java which defines strict object signatures
interface Car {
    model?: string;
    modelId: number;
    driverId: number | string; 
}

const newCar: Car = {
    modelId: 10,
    driverId: 10,
    model: "this attribute is optional"
}

// newCar.modelId = "assignment of type string to a number attribute is not allowed";

// Type unions
newCar.driverId = "But this is allowed, because we set the driverId to accept a number or a string";

// Type aliases
// We can also set custom types which act as aliases for variables
type Vector = { x: number, y: number, z: number };

/**
 * @param vector ({ x:number, y:number, z:number })
 */
const logVec = (vector:Vector):void=>{
    console.log(`X = ${vector.x}, Y = ${vector.y}, Z = ${vector.z}`);
}

logVec({x:10, y:20, z:30});

// enumerators
// Enumerators allow developers to define saved, constrained, arbitrary values which are safer than using plain strings
// also conveniently has autocomplete hints, which is a really nice feature as a developeR
enum Moves {
    Jump,
    Attack,
    Dodge,
    Run
}

let action: Moves = Moves.Attack;
console.log(action);

// Java/C#-like syntax for object access modifiers
// enforces public, private, protected modifiers to class syntax
class Player {
    constructor(public name: string, private uuid: number) {}

    public greetPlayer() {
        console.log("Hello Player " + this.name);   
    }
}

const player = new Player("Todd", 123);
player.greetPlayer();


// Generics
// adds OOP generics
// generics solve the issue of having to explicitily know the type of the data being saved, it allows the type data to be saved to

function variableType<Type>(type: Type): Type {
    return type;
}

console.log(variableType<number>(10));
console.log(variableType("hello"));

// Narrowed types
// allows developers to set a range of values that a type can take 
type Job = "Hero" | "Healer" | "Barbarian";
let myJob:Job = "Barbarian";