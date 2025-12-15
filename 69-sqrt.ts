//https://leetcode.com/problems/sqrtx/


function mySqrt(x: number): number {
  if (x < 2) return x;

  let left = 2;
  let right = Math.floor(x / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const squared = mid * mid;

    if (squared === x) {
      return mid;
    } else if (squared < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}
//https://leetcode.com/problems/sqrtx/submissions/1855201234/
// Time Complexity: O(log x)
// Space Complexity: O(1)
// This function uses binary search to find the integer square root of x.
// It narrows down the search space by comparing the square of the mid-point with x.
// The final result is the largest integer whose square is less than or equal to x.
// The function handles edge cases for x < 2 directly, returning x itself in those cases.   