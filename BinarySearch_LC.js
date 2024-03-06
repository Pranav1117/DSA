// Lets play a game if we have a number in ascending order in some range suppose 1 to 10**7
// u can ask question like if number is greater than this or number is smaller than this
// one way is we can check for every number in that range but if range is too big it will take more time

// so here comes binary search where we check mid of range and ask if number is greater than or smaller than mid
// this way we can reduce search area
// we will keep doing this until we get out number

// Link:- https://leetcode.com/problems/binary-search/submissions/1195559030/

// Question: 704. Binary Search (Easy)

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// Constraints:
// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

// ***************IMP*****************
// where we can use binary search-
// if we see sorted array/or any search space we can use binary search

function search(nums,target) {
    // variable to keep range
    let l=0;
    let r=nums.length-1
    
    // this loop will run until we goes out of bound
    while(l<=r){
    // getting mid element of array
    let mid=Math.floor((l+r)/2)
    
    // if element is equal to mid element we got our answer
    if(nums[mid]===target){
    return mid
    
    
    // conditional checking to adjust our search area
    }else if(nums[mid]>target){
    r=mid-1
    }else{
    l=mid+1
    }
    }
    
    // if we comes out of loop that means element is not present in array
    
    return -1
    }
    