// Link :- https://leetcode.com/problems/search-in-rotated-sorted-array/description/

// Que :- 33. Search in Rotated Sorted Array (Medium)

// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

// Constraints:
// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -104 <= target <= 104

// *********APPROACH**********
// one way is to simply run for loop and check if element is present return its index and if not return -1
// but for this apporach time complexity will be more than mentioned in question

// for(let i=0 ; i<n ; i++){
// if(num[i]===target) return i
// }
// return -1

// Correct approach
// the trick is related with last element of rotated array
// suppost we have array [0,1,2,3,4] if array is rotated from index 2 it will be [2,3,0,1]
// so if we look at element greater than last element and element smaller than or equal to last element we can divide array in 2 parts
// ele greater = [2,3] and ele smaller or equal to =[0,1]
// with help of this and mid element we can narrow down our search area

function searchInRoatedArray(nums,target){
    // nums is rotated array
    // target is element we need to find index of
    
    let l=0;
    let r=nums.length-1
    let lastEle=nums[r]
    
    // following array will run until it goes out of bound
    while(l<=r){
    // lets take middle index to get mid Element every time we enter new iteration
    let mid=Math.floor((l+r)/2)
    
    // following steps are to narrow down our search area
    // there are 4 possibilites based on our target position and our middle element position
    // 1.target is in first part and mid ele is in second
    // 2.target is in second part and mid ele is in first
    // 3.target is in first part and mid ele is in first
    // 4.target is in second part and mid ele is in second
    // for 3 and 4 possibilities we can perform Binary search
    
    // first we are checking our target and mid element is in first part or second part
    // if our target is in first part and mid element is in second part we can eleminate the second with help of mid element
    if(target > lastEle && nums[mid]<=lastEle){
    r=mid-1
    }
    // here we are checking if target is in second part and mid element is in first part we can eliminate first part on basis of mid element
    else if(target <= lastEle && nums[mid]>lastEle){
    l=mid+1
    }
    // in following scenario both target and mid ele lies in same part of whole rotated array
    // we are simply performing Binary search
    else{
    if(nums[mid]===target){
    return mid
    }
    else if( nums[mid] > target ){
    r=mid-1
    }else{
    l=mid+1
    }
    }
    }
    return -1
    }
    
    
    // CAUTION :- focus on <, <=, > and >= if its used at wrong placed it may lead to infinite loop