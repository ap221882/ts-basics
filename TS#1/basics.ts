let username: string = "Ajay";
let hasLoggedIn: boolean = true;

username += " Pathak";
console.log(hasLoggedIn);

//Regex
let myRegex: RegExp = /abc/;

//arrays
const names: string[] = username.split(" ");

const myValues: Array<number> = [1, 2, 8];

//objects
interface Person {
  name: string;
  age: number;
}
const myPerson: Person = {
  name: "Ajay",
  age: 22,
};

console.log(myPerson.name);

// Note: objects are inferred as interface according to key, not type of key
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

// ids[30] //wrong
ids[30] = "c";

//forEach and map directly infer type if not explicitly told
[1, 2, 3, "ajay", { name: "ajay" }].forEach((num) => {});
