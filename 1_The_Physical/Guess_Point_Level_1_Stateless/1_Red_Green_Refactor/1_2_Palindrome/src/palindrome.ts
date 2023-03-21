export const palindrome = (str: string) =>
  str.split("").reverse().join("").toLowerCase().replace(/\s/g, "") ===
  str.toLowerCase().replace(/\s/g, "");
