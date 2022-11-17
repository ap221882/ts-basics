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
