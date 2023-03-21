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
    expect(() => fizzBuzz([1, 50, 100])).not.toThrow();
  });

  it("should be able to return the number '1' as a string", () => {
    expect(fizzBuzz([1])).toEqual(["1"]);
  });

  it("should be able to return 'Fizz' for '3'", () => {
    expect(fizzBuzz([3])).toEqual(["Fizz"]);
  });

  it("should be able to return 'Buzz' for '5'", () => {
    expect(fizzBuzz([5])).toEqual(["Buzz"]);
  });

  it("should be able to return 'FizzBuzz' for '30'", () => {
    expect(fizzBuzz([30])).toEqual(["FizzBuzz"]);
  });
});
