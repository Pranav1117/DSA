// Link : https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1

//              Question : GCD of two numbers

// Given two positive integers a and b, find GCD of a and b.
// Note: Don't use the inbuilt gcd function

// Constraints:
// 1 ≤ a, b ≤ 109

// Expected Time Complexity: O(log(min(a, b)))
// Expected Auxiliary Space: O(1)



// Following solution is brute force and takes more time and constraint are 10**9 so it will give 
// time limit exceeded error
class Solution {
  /**
    * @param number a
    * @param number b
    
    * @returns number
    */
  gcd(a, b) {
    // code here
    let gcd = 0;

    let curGcd = 0;
    for (let i = 1; i <= a; i++) {
      if (a % i === 0 && b % i === 0) {
        gcd = i;
      }
    }
    return gcd;
  }
}
