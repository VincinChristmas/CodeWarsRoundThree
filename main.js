//NUMBER 

/*

*/                       

//MY SOLUTION

/*********THE ABOVE IS A TEMPLATE*************** */

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


