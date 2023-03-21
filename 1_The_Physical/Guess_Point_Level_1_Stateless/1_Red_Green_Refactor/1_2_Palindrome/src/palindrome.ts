export function palindrome(str: string) {
  if (str.split("").reverse().join("").toLowerCase() === str.toLowerCase())
    return true;

  return false;
}
