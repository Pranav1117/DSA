// Link:- https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1

                            // Number of occurrence
// Given a sorted array Arr of size N and a number X, you need to find the number of occurrences of X in Arr.

// Your Task:
// You don't need to read input or print anything.
// Your task is to complete the function count() which takes the array of integers arr, n, and x as parameters and returns an integer denoting the answer.
// If x is not present in the array (arr) then return 0.
 
// Expected Time Complexity: O(logN)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 ≤ N ≤ 105
// 1 ≤ Arr[i] ≤ 106
// 1 ≤ X ≤ 106

// APPROACH 1 :
// We can simply run for loop and check each ele and keep count varibale (Linear Search) but time complexity will not be efficient


// APPROACH 2 :
// We can do binary Search
// theres a concept of upper bound and lower bound in programming
// Lower bound :- first instance of element that is greater than or equal to element
// Upper Bound :- First instance of element of that is greater than element
// for e.g. [2,3,4,5,6,6,6,6,7] lower bound of 6 - index=4, upper bound of 6- index=8
// so by using upper bound and lower bound we can calculate number of occurenece of element
// we can do lower bound + upper bound -1
// first instance of ele + first instance of ele that is greater than ele - 1
// with the help of binary search we can get first and last instance of ele just by changing some > and < in comparison


function firstOcc(nums,target){
    let l=0;
    let r=nums.length-1
    let ans=-1
    while(l<=r){
        let mid=Math.floor((l+r)/2)

        if(nums[mid]< target ){
            l=mid +1
        }else{
            if(nums[mid]===target){
                ans = mid
            }
            r= mid -1
        }
    }
    return ans

}

function LastOcc(nums,target){
    let l=0;
    let r=nums.length-1
    let ans=-1
    while(l<=r){
        let mid=Math.floor((l+r)/2)

        if(nums[mid] > target ){
            r=mid - 1
        }else{
            if(nums[mid]===target){
                ans = mid
            }
            l= mid +1
        }
    }
    return ans

}

function NumberOfOcc(nums,target){
     let x=firstOcc(nums,target)
     if(x===-1) return 0
     return LastOcc(nums, target) - x + 1;
}