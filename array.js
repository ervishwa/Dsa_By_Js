// Q-1 write a function to find a second highest from an array of numbers?


//* Approach 1

function getSecondHighestNumber1(num){
    return num.sort((a,b)=>a-b)[num.length-2];
}

//console.log(getSecondHighestNumber2([1,2,3,4,5,6,8,9]));
//* Approach 2

function getSecondHighestNumber2(num){
    let max = -Infinity;
    let max2 = -Infinity;

    for(let i of num){
        if(i>max){
            max2 = max;
            max = i;
        }else if(i > max2 && i != max){
            max2 = i;
        }

    }

    return max2;
}

//----------------

//Q -2 Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.?

//* Approach 1

function isLuckySevens(num){


if(num.length < 3){
    return false;
}

let i = 0;
let j = 1;
let k = 2;
for(;k<num.length;k++){
   if(num[i]+num[j]+num[k]){
    return true;
   }
   i++;
   j++;
}

return false;

}


//console.log(isLuckySevens([2, 1, 5, 1, 0]));
//* Approach 2

function isLuckySevens2(num){
for (var i = 2; i < arr.length; i++) {
    if (arr[i] + arr[i-1] + arr[i-2] === 7) {
      return true; 
    }
  }
  
  // if loop is finished and no elements summed to 7
  return false; 
}


//-------------------------


//* Q - 3 You will be given an array of several arrays that each contain integers and your goal is 
//*to write a function that will sum up all the numbers in all the arrays. For example, 
//*if the input is [[3, 2], [1], [4, 12]] then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22. 
//*Solve without and with reduce. 

//? Approach 1


function getSumOfSeveralArrays(num){
    let inpArray = num.flat(Infinity);

    let ans = inpArray.reduce((acc,curr)=> acc+curr,0);

    return ans;
}

//? Approach 2

function getSumOfSeveralArrays2(num){
   
    function flatMyArray(num){
        let flatArray = [];

        for(let i of num){
            if(Array.isArray(i)){
             flatArray = flatArray.concat(flatMyArray(i));
            }else{
                flatArray.push(i);
            }
        }

        return flatArray;
    }

    const flatArray = flatMyArray(num);
   
    let ans = flatArray.reduce((acc,curr)=> acc+curr,0);

    return ans;

}

//console.log(getSumOfSeveralArrays2([[3, 2], [1], [4, 12,14]]));

//? Approach 3

function sum_Of_Several_array(arr) {
    // store our final answer
    var sum = 0;
    // loop through entire array
    for (var i = 0; i < arr.length; i++) {
      // loop through each inner array
      for (var j = 0; j < arr[i].length; j++) {
        // add this number to the current final sum
        sum += arr[i][j];
      }
    }
    
    return sum;
  }
  
//? Approach 4

function sumOfSeveralArray4(arr) {
    return arr.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e)
  }

//----------------------------------


//Q 4 Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd elements. 
//Try to solve with and without reduce function?

//Solution

function oddball_sum(num){
    return num.filter((curr)=>curr%2!=0).reduce((acc,curr)=>acc+curr);
}

//console.log(oddball_sum([1, 2, 3, 4, 5]));


//---------------------------------


// Q 5   Find the missing number in O(n) time ?

/**
 * The output of the function should be 8
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
 */

function findMissingNumber(num,n){
 let tempSum = num.reduce((acc,curr)=>acc+curr);

 let sum = n/2*(2*1+(n-1)*1);

 return sum - tempSum;
}

//console.log(findMissingNumber([2,5,1,4,8,6,3,7],9));


//-----------------------------------

// Q - 6 Two sum problem?

/**For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, 
 * your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7. 
 */


//* Approach 1 (brutForce) TC - O(n^2);

function twoSum1(num,k){
  for(let i = 0 ; i < num.length - 1 ; i++){
    for(let j = i+1 ; j < num.length ; j++){
        if(num[i]+num[j]===k){
            console.log(num[i]+" "+num[j]);
        }
    }
  }
}

//* Approach 2 
// Tc O(n)

function twoSum2(num,k){
 const frq = num.reduce((acc,curr)=>{
   if(acc[curr]){
    acc[curr] = acc[curr]+1;
   }else{
    acc[curr] = 1;
   }
   return acc;
 },{})

 for(let i of num){
    let n = k - i;
    if(frq[n] && frq[n]>=1 && frq[i]>=1){
      console.log(i , n);
      frq[n] = frq[n]-1;
      frq[i] = frq[i]-1;
    }
 }
}

// Approach 3
// same as avobe but little bit modification...
function twoSum3(arr, S) {

    var sums = [];
    var hashTable = {};
  
    // check each element in array
    for (var i = 0; i < arr.length; i++) {
   
      // calculate S - current element
      var sumMinusElement = S - arr[i];
  
      // check if this number exists in hash table
      // if so then we found a pair of numbers that sum to S
      if (hashTable[sumMinusElement.toString()] !== undefined) { 
        sums.push([arr[i], sumMinusElement]);
      }
  
      // add the current number to the hash table
      hashTable[arr[i].toString()] = arr[i];
  
    }
  
    // return all pairs of integers that sum to S
    return sums;
  
  }
  
//twoSum2([3, 5, 2, -4, 8, 11],7);

//----------------------------------


