export function printToFile(text: string, callBack: () => void) {
  console.log(text);
  callBack();
}
type MutateFunction = (v: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutateFunction
): number[] {
  return numbers.map(mutate);
}
