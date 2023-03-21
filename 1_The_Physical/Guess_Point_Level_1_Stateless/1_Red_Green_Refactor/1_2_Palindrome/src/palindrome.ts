export function palindrome(str: string) {
  if (
    str.split("").reverse().join("").toLowerCase().replace(/\s/g, "") ===
    str.toLowerCase().replace(/\s/g, "")
  )
    return true;

  return false;
}
