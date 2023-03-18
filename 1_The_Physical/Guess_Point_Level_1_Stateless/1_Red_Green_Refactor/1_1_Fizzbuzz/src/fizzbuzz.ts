export function fizzBuzz(numbers: number[]) {
  for (const number of numbers)
    if (number < 1) throw new Error("Number out of range");
}
