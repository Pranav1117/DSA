// Link:- https://leetcode.com/problems/sqrtx/description/

// Que:- 69.
// Sqrt(x) (Easy)
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Constraints:
// 0 <= x <= 231 - 1

// APPROACH - 1 (Linear Search)
// suppose we have to find square root of 20 it will be 4.**** but we just need to find floor value i.e. 4
// so we can just iterate from 1 to number and check maximum number i.e. less than or equal to given number x and will return that max number
// but the time complexity is not efficient in this approach

// APPROACH - 2 (Binary Search)
// In this we will narrow down range of our possible answers by checking middle number of our range
// suppose x=20 for now our possible answer lies between 1 to 20 (we can also say 20/2)
// In 1 to 20 we will check square of middle number is equal to or less than our target if it is then middle number is our temporary answer and we will eliminate number from 1 to middle number becoz we have already got our current max number
// But our temporary answer is not our final anser becoz there might be a number which is greater than our temporary answer which square is close to target so will further check
// in case of 20, 10 is middle number so 10*10 =100 is greater than 20. so we know for sure that number greater than 10 i.e. 11, 12,13...etc will not be our answer becoz as there square will increase more like for 11 =121, 12=144
// so we will narrow down our numbers from 1 to 9 again in this we will check middle number which is 5 so 5*5 =25 which is greater than 20. Again narrow our search from 1 to 4
// in 1 to 4 middle number is 2 , 2*2=4 which is less than 20 so in this we know that answer cannot be less than 2 as square root of numbers which below than 2 will always be less than 4 so we will narrow our numbers from 2 to 4
// in 2 to 4 middle element is 3, 3*3=9 our temporary ans is 3 ,again narrow our numbers from 3 to 4 middle number is 3+4/2 i.e. 3. after this we will narrow again mid+1 i.e 3+1=4
// this we will be our answer as there is no numbers are remainning

function squareRoot(x) {
    // our possible answer lies between 1 to x
    let start = 0;
    let end = x;
    
    
    let ans = 0;
    // iterate until it goes out of bound
    // it will reach to the point where only one number is present
    while (start <= end) {
    
    // get middle number to narrow our number range
    let middleNum = Math.floor((start + end) / 2);
    
    // check if mid num is less than x narrow our range to mid +1 and store our temporary answer in ans
    if (middleNum *middleNum<= x) {
    ans = middleNum;
    start = middleNum + 1;
    } else {
    // if mid num is greater than target narrow our range to mid-1
    end = middleNum - 1;
    }
    }
    return ans;
    }
    