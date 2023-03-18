import { expect, describe, it } from "@jest/globals";
import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should be able to tell that the number '0' is not in range", () => {
    expect(() => fizzBuzz([0])).toThrow(Error("Number out of range"));
  });

  it("should be able to tell that the number '101' is not in range", () => {
    expect(() => fizzBuzz([101])).toThrow(Error("Number out of range"));
  });

  it("should be able to tell that the numbers '1', '50' and '100' are in range", () => {
    expect(fizzBuzz([1, 50, 100])).toBeTruthy();
  });

  it("should be able to return the numbers as a string", () => {
    expect(fizzBuzz([1, 50, 100])).toEqual(["1", "50", "100"]);
  });

  it("should be able to return 'Fizz' for numbers multiples of '3'", () => {
    expect(fizzBuzz([1, 33, 50, 69, 100])).toEqual([
      "1",
      "Fizz",
      "50",
      "Fizz",
      "100",
    ]);
  });
});
