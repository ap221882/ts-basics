export function printToFile(text: string, callBack: () => void) {
  console.log(text);
  callBack();
}

export function arrayMutate(
  numbers: number[],
  mutate: (v: number) => number
): number[] {
  return numbers.map(mutate);
}
