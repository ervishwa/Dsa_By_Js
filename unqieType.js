// Q -> 1 Convert the given number into a roman numeral.

/**example - convertToRoman(2) should return the string II.
 * convertToRoman(798) should return the string DCCXCVIII.
 * convertToRoman(1004) should return the string MIV.
 * 
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.
 */


//* Solution 1 

function convertToRoman(num) {
    let ans = "";
  
    //logic
    while(num>0){
      if(num<4){
        ans += "I"
        num--;
      }else if(num==4){
        ans += "IV";
        num -= 4;
      }else if(num >= 5 && num < 9){
        ans += "V";
        num -= 5;
      }else if (num==9){
        ans += "IX";
        num -= 9;
      }else if(num >= 10 && num < 40){
        ans += "X";
        num -= 10;
      }else if (num >= 40 && num < 50){
         ans += "XL";
         num -= 40;
      }else if(num >= 50 && num < 90){
        ans += "L";
        num -= 50;
      }else if(num >= 90 && num < 100){
        ans += "XC";
        num -= 90;
      }else if(num>=100 && num < 400){
        ans += "C";
        num -= 100;
      }else if(num >= 400 && num < 500){
        ans += "CD";
        num -= 400;
      }else if(num >= 500 && num<900){
        ans += "D";
        num -= 500;
      }else if(num >= 900 && num<1000){
        ans += "CM";
        num -= 900;
      }
  
      else if(num >= 1000){
        ans += "M";
        num -= 1000;
      }
    }
  
    
   return ans;
  }
  
  //console.log(convertToRoman(2014));

//*Solution 2 (More Efficient Approach.)

function convertToRoman(num) {
    const romanSymbols = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
    ];
  
    let result = '';
  
    for (const symbol of romanSymbols) {
      while (num >= symbol.value) {
        result += symbol.symbol;
        num -= symbol.value;
      }
    }
  
    return result;
  }
  
  //console.log(convertToRoman(2014));
  
//------------------------------------

//Question 3 You will be given a number N that represents where the minute hand currently is on a clock. 
//Your program should return the angle that is formed by the minute hand and the 12 o'clock mark on the clock?


function getAngle(n){
  return n * 6;
}

//console.log(getAngle(15));


//--------------------------------------


// Q 4  Return the N-th value of the Fibonacci sequence Recursively ?


//* Approach 1

function getNthFibonacciNumber(n){
  if(n===0){
    return 0;
  }
  if(n===1){
    return 1;
  }

  let first = 0;
  let second = 1;

  function getMeNth(prev,current,n,count){
    if(count===n){
      console.log("ans");
      return current;
    }

    return getMeNth(current,prev+current,n,count+1);

  }

  return getMeNth(0,1,n-1,0);
}


//console.log(getNthFibonacciNumber(5));

//* Approach 2
 //? TC O(2^n);
function fib(n) {
  if (n < 2){
    return n
  }
  return fib(n - 1) + fib (n - 2)
}

//* Approach 3 

//? TC O(n);

function getNthFibonacciNumber2(num){
  let arr = [];
  arr.push(0);
  arr.push(1);

  for(let i = 2 ; i < num ; i++){
      arr.push(arr[i-1]+arr[i-2]);
  }
  return arr[num-1];
}

//? Another Syntax

function fib(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr[n]
}

//console.log(getNthFibonacciNumber2(5));


//-----------------------------

// Q 5 Write a "mul" function which will properly when invoked as below syntax 
/**
 * console.log(mul(2)(3)(4)); // output : 24
   console.log(mul(4)(3)(4)); // output : 48
 */


function mul(a){
  return function(b){
    return function (c){
      return a*b*c;
    }
  }
}

//console.log(mul(4)(3)(4));


//---------------------------

// Q 6 Write a function that would allow you to do this? 

/**
 * var addSix = createBase(6);
   addSix(10); // returns 16
   addSix(21); // returns 27
 */


function createBase(x){
  return function(y){
    return x + y;
  }
}

var addSix = createBase(6);
// console.log(addSix(10));
// console.log(addSix(21));


//----------------------------


// Q - 7 Remove duplicates of an array and return an array of only unique elements ?

/**
 * var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
 * o/p [1,2,3,5,9,8];
 */
//? Approach 1

function removeDuplicate(num){
  const set = new Set(num);

  return Array.from(set);
  //return set;
}

//? Approach 2

function removeDuplicate2(num){
  return num.filter((curr,i)=>num.indexOf(curr)===i);
}

//? Approach 3

function removeDuplicate3(num){
  const arr = [];

  for(let i of num){
    if(!arr.includes(i)){
      arr.push(i);
    }
  }

  return arr;
}

//? Approach 4 

var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

uniqueArray(array); // [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
  var hashmap = {};
  var unique = [];

  for(var i = 0; i < array.length; i++) {
    // If key returns undefined (unique), it is evaluated as false.
    if(!hashmap.hasOwnProperty(array[i])) {
      hashmap[array[i]] = 1;
      unique.push(array[i]);
    }
  }

  return unique;
}

//console.log(removeDuplicate3([1, 2, 3, 5, 1, 5, 9, 1, 2, 8]));

//-----------------------------


// Q - 7  How would you check if a number is an integer? 

//* Solution
//* A very simply way to check if a number is a decimal or integer is to see if there is
//* a remainder left when you divide by 1.
function isInt(num) {
  return num % 1 === 0;
}

// console.log(isInt(4)); 
// console.log(isInt(12.2)); 
// console.log(isInt(0.3));


//-----------------------------


