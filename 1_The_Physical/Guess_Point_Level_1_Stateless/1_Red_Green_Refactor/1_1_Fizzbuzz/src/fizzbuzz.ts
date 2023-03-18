export function fizzBuzz(numbers: number[]): string[] {
  for (const number of numbers)
    if (number < 1 || number > 100) throw new Error("Number out of range");

  return numbers.map((number) => String(number));
}
