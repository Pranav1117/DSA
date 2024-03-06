                        // 2427. Number of Common Factors
// Easy

// Given two positive integers a and b, return the number of common factors of a and b.
// An integer x is a common factor of a and b if x divides both a and b.

// Constraints:
// 1 <= a, b <= 1000

var commonFactors = function(a, b) {
    // variable to store common factors
    let common=0;
    
    // will handle edge case of 1 
    if(a===1 && a===b){
        return 1
    }

    // will check from 1 to a if a and b is divisible by number 
    // if they both are divisible by number we will increase count varible 
    for (let i=a;i>0;i--){
        if(a%i===0 && b%i==0){
            common++

        }
        
    }
        return common
};