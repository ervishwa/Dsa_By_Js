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
  
  console.log(convertToRoman(2014));

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
  
  console.log(convertToRoman(2014));
  
//------------------------------------



