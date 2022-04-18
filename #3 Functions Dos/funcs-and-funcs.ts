export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

type MutationFunction = (num: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(number => mutate(number));
}

// a function which type is defined by mutationfunction from above
const myNewMutateFunc: MutationFunction = (v: number) => v * 100;

console.log(arrayMutate([1, 20, 3], v => v * 10));

export type closeFunc = (val: number) => number;
export function createAdder(num: number): closeFunc {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(65));
