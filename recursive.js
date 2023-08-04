//recursive solution

function isPalindrome(word) {
  const n = word.length;

  if (n === 0 || n === 1) {
    return true;
  }

  let left = 0;
  let right = n - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome('radar')); // Output: true
console.log(isPalindrome('hello')); // Output: false
