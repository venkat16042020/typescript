const user = {
    name: "Venkat",
    age: 44
}

console.log(`Hello ${user.name}, you are ${user.age} years old.`);
console.log(user.name)
console.log(user.age)

let x: string = "Hello, TypeScript!";
console.log(x);
console.log(x.toUpperCase());

let y: number = 42;
console.log(y);
console.log(y.toFixed(2));

let z: boolean = true;
console.log(z);
console.log(!z);

let arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);

let tuple: [string, number] = ["Age", 30];
console.log(tuple);
console.log(tuple[0]);
console.log(tuple[1]);

let person: { name: string; age: number } = { name: "Alice", age: 25 };
console.log(person);
console.log(person.name);
console.log(person.age);

let union: string | number = "Hello";
console.log(union);
union = 100;
console.log(union);

let anyValue: any = "This can be anything";
console.log(anyValue);
anyValue = 42;
console.log(anyValue);

let unknownValue: unknown = "Unknown type";
console.log(unknownValue);

let voidFunction = (): void => {
    console.log("This function returns nothing.");
}

voidFunction();

// let neverFunction = (): never => {
//     throw new Error("This function never returns.");
// }

// neverFunction();

enum Color {
    Red,
    Green,
    Blue = "blue"
}

console.log(Color.Red);

let bigIntValue: bigint = 9007199254740991n;
console.log(bigIntValue);

let symbolValue: symbol = Symbol("unique");
console.log(symbolValue);

let nullValue: null = null;
console.log(nullValue);

let undefinedValue: undefined = undefined;
console.log(undefinedValue);

let objectValue: object = { key: "value" };
console.log(objectValue);

let arrayValue: Array<number> = [1, 2, 3];
console.log(arrayValue);

let setValue: Set<number> = new Set([1, 2, 3]);
console.log(setValue);

let mapValue: Map<string, number> = new Map([["one", 1], ["two", 2]]);
console.log(mapValue);

let promiseValue: Promise<string> = new Promise((resolve, reject) => {
    resolve("Promise resolved!");
});
promiseValue.then(value => console.log(value));

let asyncFunction = async (): Promise<string> => {
    return "Async function result";
}

asyncFunction().then(result => console.log(result));

let generatorFunction = function* () {
    yield 11;
    yield 22;
    yield 3;
}

let generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

let regexValue: RegExp = /abc/;
console.log(regexValue.test("abcdef"));

let dateValue: Date = new Date();
console.log(dateValue.toISOString());

let errorValue: Error = new Error("This is an error");
console.log(errorValue.message);

let functionValue: Function = (a: number, b: number): number => a + b;
console.log(functionValue(5, 10));

let interfaceValue: { greet: (name: string) => string } = {
    greet: (name: string) => `Hello, ${name}!`
}
console.log(interfaceValue.greet("World"));

let classValue: { new(name: string): { name: string } } = class {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

}

console.log(new classValue("TypeScript").name);

let typeAliasValue: { name: string; age: number } = { name: "Bob", age: 30 };
console.log(typeAliasValue.name);
console.log(typeAliasValue.age);

type personType = {
    name: string;
    age: number;
}

let personInstance: personType = { name: "Charlie", age: 28 };
console.log(personInstance.name);
console.log(personInstance.age);

interface personInterface {
    name: string;
    age: number;
}

let personObj: personInterface = { name: "David", age: 35 };
console.log(personObj.name);
console.log(personObj.age);