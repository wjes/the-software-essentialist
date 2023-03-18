export function fizzBuzz(numbers: number[]): string[] {
  for (const number of numbers)
    if (number < 1 || number > 100) throw new Error("Number out of range");

  return numbers.map((number) =>
    (number % 3) + (number % 5) === 0
      ? "FizzBuzz"
      : number % 3 === 0
      ? "Fizz"
      : number % 5 === 0
      ? "Buzz"
      : String(number)
  );
}
