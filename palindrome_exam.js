// TODO: rename this file from '.txt' to '.js'
function isPalindrome(str) {
 //Check if the input is string
if(typeof str !== 'string'){
     console.log("The given value: " + str + " is not a string! The expected datatype of the value is string");
     
 }
 
// Check if there is special character and lowercase
const rmvspecial = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

// Compare the original string to reverse
const isPal = rmvspecial == rmvspecial.split('').reverse().join('');

// To hold the original and reversed strings
const result = {
  original: str,
  reversed: isPal ? str.split('').reverse().join('') : null,
  isPalindrome: isPal,
};

if(result.isPalindrome){
    console.log("The given string: " + result.original + " is an example of a palindrome the reversed value is: " + result.reversed); 
} else{
    console.log("The given string: " + result.original + " is not an example of a palindrome");
}

}

// Call the function and pass an argument.
const testString = "racecar"; // change the string to test
isPalindrome(testString);

