//! Q - 1 Palindrome Checker

//* Approach 1 

function doSomeThing(n){
    return n.toLowerCase()!=n.toUpperCase();
}
function palindrome(str) {
 let inp = "";

 for(let i = 0 ; i < str.length ; i++){
  
   if(doSomeThing(str[i]) || parseInt(str[i])===Number(str[i])){
   // console.log(str[i]);
   //console.log("hai");
     inp += str[i].toLowerCase();
     //console.log(inp);

   }
 }
 //console.log(inp);

 let j = 0;
 let k = inp.length-1;
 while(j<=k){
   if(inp[j]!=inp[k]){
     return false;
   }
   j++;
   k--;
 }

  return true;
}

//const ans = palindrome("1 eye for of 1 eye.");
//console.log(ans);

//* Approach 2

function isAlphanumeric(char) {
    return /^[0-9a-zA-Z]$/.test(char);
}

function palindrome(str) {
    let cleanStr = str.toLowerCase().split('').filter(isAlphanumeric).join('');

    for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}

//const ans = palindrome("1 eye for of 1 eye.");
//console.log(ans);

//* Approach 3

function isAlphanumeric(char) {
    return /^[0-9a-zA-Z]$/.test(char);
}

function palindrome(str, start = 0, end = str.length - 1) {
    if (start >= end) {
        return true;
    }
    
    const leftChar = str[start].toLowerCase();
    const rightChar = str[end].toLowerCase();
    
    if (!isAlphanumeric(leftChar)) {
        return palindrome(str, start + 1, end);
    }
    
    if (!isAlphanumeric(rightChar)) {
        return palindrome(str, start, end - 1);
    }
    
    if (leftChar !== rightChar) {
        return false;
    }
    
    return palindrome(str, start + 1, end - 1);
}

const ans = palindrome("1 eye for of 1 eye.");
//console.log(ans);



//------------------------------------------

//! Q - 2 Find out if a string is a rotation of another string. E.g. ABCD is a rotation of BCDA but not ACBD?

//*First make sure a and b are of the same length. Then check to see if b is a substring of a 
//*concatenated with a.


function chqRotationalString(a,b){
    return a.length===b.length && (a+a).indexOf(b)!=-1;
}

//console.log(chqRotationalString("BCDA","ABCD"));


//-----------------------------------------


