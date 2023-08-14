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


console.log(isLuckySevens([2, 1, 5, 1, 0]));
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


