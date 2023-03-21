import { expect, describe, it } from "@jest/globals";
import { palindrome } from "./palindrome";

describe("palindrome checker", () => {
  it("should be able to tell that the 'mom' is a palindrome", () => {
    expect(palindrome("mom")).toBeTruthy();
  });

  it("should be able to tell that the 'bill' is not a palindrome", () => {
    expect(palindrome("bill")).toBeFalsy();
  });

  it("should be able to tell that the 'Mom' is a palindrome", () => {
    expect(palindrome("Mom")).toBeTruthy();
  });

  it("should be able to tell that the 'Was It A Rat I Saw' is a palindrome", () => {
    expect(palindrome("Was It A Rat I Saw")).toBeTruthy();
  });
});

