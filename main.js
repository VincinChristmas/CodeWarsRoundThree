//NUMBER 

/*

*/                       

//MY SOLUTION


/*********THE ABOVE IS A TEMPLATE*************** */

//NUMBER 15

/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/                       

//MY SOLUTION
function doubleChar(str) {
  // Your code here
  let finals = []
  let newStr = str.split('')
  newStr.map((letter) =>{
    finals.push(letter + letter)
  })
  return finals.join('')
}

//NUMBER 14

/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because 
it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
 Ignore numbers and punctuation.
*/                       

//MY SOLUTION
function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}

//NUMBER 13

/*
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/                       

//MY SOLUTION
class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

let ball1 = new Ball();
let ball2 = new Ball("super");

console.log(ball1.ballType); 
console.log(ball2.ballType); 

//NUMBER 12

/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 The first word within the output should be capitalized only if the original word was capitalized 
 (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/                       

//MY SOLUTION
function toCamelCase(str){ 
  let arr = str.split('');
  for(i = 0; i < arr.length; i++){
    let letter = arr[i];
    if(letter == '_' || letter == '-') {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr[i] = '';
    } 
  }
  return arr.join('');
}

//NUMBER 11

/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all 
positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention 
the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an 
exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException
 (PHP) or throw a 
RangeError (JavaScript) or ValueError (Python) or return -1 (C).
*/                       

//MY SOLUTION
function factorial(n)
{
  let num = 1
  let diff = n
  if (n > 12 || n < 0) {
    throw new RangeError("The argument must be between 12 and 0.")
  }
  else {
  while (diff > 0) {
    num = num * diff
    diff = diff - 1
    
  }
    }
  if (num == 0) {
    return 1
  } else {
  return num
    }
}


//NUMBER 10

/*
Fix the function
I created this function to add five to any number that was passed in to it and return the new value. 
It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?
*/                       

//MY SOLUTION
function addFive(num) {
  var total = num + 5
  return total
}

//NUMBER 9

/*
Write a function that takes in a string of one or more words, and returns the same string, 
but with all words that have five or more letters reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when 
more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/                       

//MY SOLUTION
function spinWords(string){
  //TODO Have fun :)
  let notQualify = []
  
  let newString = string.split(' ')
  
  newString.forEach((word)=>{
    if (word.length <= 4) {
      notQualify.push(word)
    }
    else if (word.length > 4) {
      notQualify.push(word.split('').reverse().join(''))
    }
    })
  return notQualify.join(' ')
}

//NUMBER 8

/*
You will be given an array and a limit value. You must check that all values in the array are 
below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/                       

//MY SOLUTION
function smallEnough(a, limit){
  let overLimit = []
  a.forEach ((number)=>{
    if (number > limit) {
      overLimit.push(number)
    }
  })
    if (overLimit.length > 0) {
      return false
    }
    else {
      return true
    }
  }

//NUMBER  7

/*
Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. 
Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18
*/                       

//MY SOLUTION
function howManyLightsabersDoYouOwn(name) {
  return (name === "Zach") ? 18 : 0
}

//NUMBER 6

/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those 
numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/                       

//MY SOLUTION
function createPhoneNumber(numbers){
  let area = numbers.splice(0,3).join("")
  //`(${area})`
  
  let phoneNumber = numbers.splice(0,3).join('')
  
  return `(${area}) ${phoneNumber}-${numbers.join('')}`
}

//NUMBER 5

/*
Coding in function findSimilarity. function accept two parameters: str, a sentence contains some words, 
separated by spaces; word, a sample word.

Your task is to keep the words that are similar to the sample word, and to remove the other words.

The similarity is defined as: the same length as the sample; the letter at the beginning and the 
end of word are same as the sample too.

If there are no similar words in the sentence, should return an empty string.

Examples
findSimilarity("bag dog dig dot doog dogs","dog") should return "dog dig"
findSimilarity("bag dog dig dot doog dogs","dig") should return "dog dig"
findSimilarity("bag dog dig dot doog dogs","dot") should return "dot"
findSimilarity("bag dog dig dot doog dogs","god") should return ""
Hint: Use filter() will make your work easier; If you don't know how to solve the kata, please refer to
 the examples of lesson.
*/                       

//MY SOLUTION
const createPattern = s => {
  let p = s.replace(/./g,".").split("")
  p[0] = s[0]
  p[s.length-1] = s[s.length-1]
  p.push("$")
  p.unshift("^")
  return p.join("")
}

const findSimilarity = (str,word) => {
  let re = new RegExp(createPattern(word))
  return str.split(/\s/).filter(x => re.test(x)).join(" ")
}
Best Practices1Clever0
 0ForkCompare with your solutionLink


//NUMBER 4

/*
We need a simple function that determines if a plural is needed or not. It should take a number, 
\and return true if a plural should be used with that number or false if not. This would be useful 
when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular 
(one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.
*/                       

//MY SOLUTION
function plural(n) {
  // ...
  if (n === 1) {
    return false
  }
  else {
    return true
  }
}

//NUMBER 3

/*
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/                       

//MY SOLUTION
var capitals = function (word) {
  var caps = [];
	for(var i = 0; i < word.length; i++) {
    if(word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};

//NUMBER 2

/*
Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed,
 the numbers move down to take their place. In case of above 13, they move down by two 
 because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here

Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3
*/                       

//MY SOLUTION
function getRealFloor(n) {
  if (n < 13 && n > 0) {
    return n - 1
  }
  else if (n > 13) {
    return n - 2
  }
  else if ( n <= 0) {
    return n 
  }
}

//NUMBER 1

/*
Write a function which takes a number and returns the corresponding ASCII char for that value.

Example:

65 --> 'A'
97 --> 'a'
48 --> '0
*/

//MY SOLUTION
function getChar(c){
    // ...
    
    return String.fromCharCode(c)
  }


