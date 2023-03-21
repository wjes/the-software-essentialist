export function palindrome(str: string) {
  if (str.split("").reverse().join("") === str) return true;

  return false;
}
