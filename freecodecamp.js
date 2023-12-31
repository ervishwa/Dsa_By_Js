/**
 * Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array 
of all objects that have matching name and value pairs (second argument). Each name and value
 pair of the source object has to be present in the object from the collection if it is to be 
 included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
 and the second argument is { last: "Capulet" }, then you must return the third object 
 from the array (the first argument), because it contains the name and its value, that 
 was passed on as the second argument.
 * 
 */
function whatIsInAName(collection, source) {
  const ans = [];
  for (let i = 0; i < collection.length; i++) {
    if (Object.keys(collection[i]).length >= Object.keys(source).length) {
      let put = true;
      //let collectionKeys = Object.keys(collection[i]);
      let sourceKeys = Object.keys(source);
      for (let j = 0; j < sourceKeys.length; j++) {
        if (sourceKeys[j] in collection[i]) {
          if (collection[i][sourceKeys[j]] != source[sourceKeys[j]]) {
            put = false;
          }
        } else {
          put = false;
          break;
        }
      }

      if (put) {
        ans.push(collection[i]);
      }
    }
  }
  return ans;
}
//Another  Approach
// const sourceKeys = Object.keys(source);

// return collection
//   .filter(obj => sourceKeys
//     .every(key => obj[key] === source[key]));
// console.log(
//   whatIsInAName(
//     [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
//     { apple: 1, bat: 2 }
//   )
// );


//-----------------------------