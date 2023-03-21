export function fizzBuzz(numbers: number[]): string[] {
  for (const num of numbers)
    if (num < 1 || 100 < num) throw new Error("Number out of range");

  return numbers.map((num) =>
    (num % 3) + (num % 5) === 0
      ? "FizzBuzz"
      : num % 3 === 0
      ? "Fizz"
      : num % 5 === 0
      ? "Buzz"
      : String(num)
  );
}
