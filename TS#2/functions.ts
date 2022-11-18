function addNumbers(a: number, b: number): number {
  return a + b;
}

export function addStrings(a: string, b: string): string {
  return a + b;
}

// Union Types
const format = (title: string, param: string | number): string => {
  return `${title} ${param}`;
};

//Void
const print = (title: string, param: string | number): void => {
  console.log(`${title} ${param}`);
};

export default addNumbers;

//Promise
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

//rest
function intro(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}
