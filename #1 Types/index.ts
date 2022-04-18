// Primitive types
let user: string = "Jack";
let isloggedIn: boolean = true;
let myNumber: number = 10;
let myRegex: RegExp = /foo/;

let arr: string[] = user.split("");
let arrDos: Array<string> = ["J", "a", "c", "k"];

// Object
interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "Ibrahim",
  last: "Ibrahim",
};

// Map
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";

// iterations, let typescript infer as much as possible

for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach(v => console.log(v));
const out = [1, 2, 3].map(v => v * 10);
