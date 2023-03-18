import { expect, describe, it } from "@jest/globals";
import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should be able to tell that the number '0' is not in range", () => {
    expect(() => fizzBuzz([0])).toThrow(Error("Number out of range"));
  });
});
