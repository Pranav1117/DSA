// Link : https://leetcode.com/problems/ugly-number/

//                                   263. Ugly Number
// Easy

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return true if n is an ugly number.

// Constraints:
// -231 <= n <= 231 - 1

// whats prime factors
// Prime factors are prime numbers that divides number without leaving remainder
// for e.g. 12 for 12 Prime factors are 2*2*3. 2 and 3 are prime numbers

// Whats prime numbers
// Prime Numbers are the numbers that have only 2 divisors i.e 1 and number itself
// for e.g.  1,2,3,5,7 are prime numbers
// 4 is not a prime number as it is also divided by 2 so 4 divisor will be 1,2 and 4

function checkUgly(n) {
  // if number is 0 or lest than zero we r returning false as those numbers cant have 2,3 or 5 as there prime factors
  if (n <= 0) return false;

  // Below we r repeatedly checking if number is divided by 2, 3, or 5 if it is the we are dividing it by 2,3 or 5
  // then at last there comes a condition where number will be fully divisible by 2,3 or 5
  // for e.g.: 14 on first iteration as 12 is divisible by 2 it will go in first while loop i.e. 14/2=7. second iteration 7 is not divisible by 2,3 or 5
  // so it will check n===1 that is 7===1 and we will get false as our answer

  while (n % 2 === 0) {
    n = n / 2;
  }

  while (n % 3 === 0) {
    n = n / 3;
  }

  while (n % 5 === 0) {
    n = n / 5;
  }

  return n === 1;
}
