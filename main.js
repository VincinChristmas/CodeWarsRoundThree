//NUMBER 

/*

*/                       

//MY SOLUTION


/*********THE ABOVE IS A TEMPLATE*************** */

//NUMBER 35

/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/                       

//MY SOLUTION
function noBoringZeros(n) {
  while (n % 10 === 0 && n!== 0) {
    n /= 10;
  }
  return n
}

//NUMBER 34

/*
Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid 
codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

*/                       

//MY SOLUTION
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (Date.parse(currentDate) <= Date.parse(expirationDate) && enteredCode === correctCode) {
    return true
  }
  else {
    return false
  }
}


//NUMBER 33

/*
Given a point in a Euclidean plane (x and y), return the quadrant the point
 exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

Examples
(1, 2)     => 1
(3, 5)     => 1
(-10, 100) => 2
(-1, -9)   => 3
(19, -56)  => 4
*/                       

//MY SOLUTION
function quadrant(x, y) {
  switch (true) {
      case (y > 0 && x > 0 ):
      return 1;
      break;
      
      case (x < 0 && y > 0):
      return 2;
      break;
      
      case (x < 0 && y < 0):
      return 3;
      break;
      
      case (x > 0 && y < 0):
      return 4; 
      break; 
  }
}

//NUMBER 32

/*
The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the 
savings over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the 
cost of the holiday (in £).

For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday 
will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.

Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday 
will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.

All inputs will be integers. Please return an integer. Round down.
*/                       

//MY SOLUTION
function dutyFree(normPrice, discount, hol){
  return Math.floor(hol / (normPrice * (discount/100)))
  }


//NUMBER 31

/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/                       

//MY SOLUTION
function expandedForm(num) {
  // Your code here
  let numberCollection = []
  let newNum = num.toString().split('')
  for(let i = 0 ; i < newNum.length; i++ ){
    for(let y = newNum.length - i; y > 1; y--){
         newNum[i] += '0'; 
      }
  }
  newNum.forEach((number)=>{
    if (number[0] !== '0') {
      numberCollection.push(number)
    }
  })
  return numberCollection.join(' + ')
}

//NUMBER 30

/*
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/                       

//MY SOLUTION
function angle(n) {
  //code here
  return (n-2) * 180
}

//NUMBER 29

/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! 
if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/                       

//MY SOLUTION
function hello(name) {
  if (name == "" || name == null) {
    return "Hello, World!"
  }
  else {
  return `Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`
    }
}


//NUMBER 28

/*
Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
*/                       

//MY SOLUTION
function whatday(num) { 
  switch(num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return 'Wrong, please enter a number between 1 and 7';
  }
}


//NUMBER 27

/*
Coding in function tailAndHead. function accept 1 parameter arr(a number array).

We use an example to explain this task:

You got an array [123,456,789,12,34,56,78].

First, from left to right, the tail of an element and the head of the next element are added together. 
The results are put into an array. like this:

[123,456,789,1 2,3 4,5 6,78]
   3+4 6+7 9+1 2+3 4+5 6+7  
    |   |   |   |   |   |
   [7 ,13 ,10 , 5 , 9 ,13]
And then, Calculate their product and return it(7x13x10x5x9x13=532350)

So, tailAndHead([123,456,789,12,34,56,78]) should return 532350 

All elements of arr are positive integer. If a number is less than 10, its head and tail are the same. 
Please try to use reduce() solve this kata.

Examples
tailAndHead([1,2,3,4,5]) should return 945
tailAndHead([111,2345,66,78,900]) should return 7293
tailAndHead([35456,782,569,2454,875]) should return 12012
*/                       

//MY SOLUTION 27
function tailAndHead(arr){
  let sum = []
  let product
  //coding here...
  let emptyArray = []
  arr.forEach((collection)=>{
    emptyArray.push(collection.toString().split(''))   
  })
  for (let i = 1; i < emptyArray.length; i++) {
    sum.push(Number(emptyArray[i][0]) + Number(emptyArray[i - 1][emptyArray[i-1].length-1]))  
  }
  return sum.reduce((a,b) => a*b)
     }         

//NUMBER 26

/*
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer
 number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/                       

//MY SOLUTION
function towerBuilder(nFloors) {
  let newArray = [];
  for (let i = 1; i <= nFloors; i++) {
    let stars = '*'.repeat(2 * i - 1);
    let spaces =' '.repeat(nFloors - i);
    newArray.push(spaces + stars + spaces);
  }
  return newArray;
}


//NUMBER 25

/*
Coding in function threeInOne. function accept 1 parameters arr, it's a 1D number array. 
Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result.

Note1: You should not modify the original array.

Note2: Because this is a beginner Kata, and due to the author's mercy ;-), so you do not have 
to verify the validity of the parameter, and do not worry about the number of elements of the array 
is not a multiple of 3.

Example:

threeInOne( [1,2,3]) should return [6]
threeInOne( [1,2,3,4,5,6]) should return [6,15]
threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]
*/                       

//MY SOLUTION
function threeInOne(arr){
  //coding here...
  let copyArr = arr.slice()
  let reception = []
  for(let i = 0; i < copyArr.length; i+=3) {
    reception.push(copyArr[i] + copyArr[i + 1] + copyArr[i+2])
    
}
  return reception
  }


//NUMBER 24

/*
Complete the function which converts a binary number (given as a string) to a decimal number.
*/                       

//MY SOLUTION
function binToDec(bin) {
  let sum = 0;
  let newBin = bin.split('');
  for (let i = 0; i < newBin.length; i++) {
   
    sum += Number(newBin[i]) * Math.pow(2, newBin.length - 1 - i);
  }
  return sum;
}


//NUMBER 23

/*
As a part of this Kata, you need to create a function that when provided with a triplet, 
returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/                       

//MY SOLUTION
function gimme (triplet) {
  let number = 0
  let num1 = Math.max(...triplet)
  let num2 = Math.min(...triplet)
  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] < num1 && triplet[i] > num2) {
       number = number + triplet.indexOf(triplet[i])
    }
  }
    return number
  }

//NUMBER 22

/*
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)   should return 1 
to_binary(5)   should return 101 
to_binary(11)  should return 1011 
Example:

toBinary(1)   should return 1 
toBinary(5)   should return 101 
toBinary(11)  should return 1011 

*/                       

//MY SOLUTION
function toBinary(n){
  n = n.toString(2)
  return Number(n)
}



//NUMBER 21

/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, 
and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/                       

//MY SOLUTION
function capitalize(s){
  let collection = []
  let otherCollection = []
  let newS = s.split('')
  let otherS = s.split('')
  for (let i = 1; i < newS.length; i+=2) {
    newS[i] = newS[i].toUpperCase()
  }
  otherCollection.push(newS.join(''))
  
  for (let i = 0; i < otherS.length; i+=2) {
    otherS[i] = otherS[i].toUpperCase()
  }
  collection.push(otherS.join(''))
  return collection.concat(otherCollection)
};

//NUMBER 20

/*
Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the 
Y chromosome, 
return "Congratulations! You're going to have a son.";
*/                       

//MY SOLUTION
function chromosomeCheck(sperm) {
  return (sperm === 'XY') ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}


//NUMBER 19
/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

//My SOULUTION
function solution(string) {
  let splitString = string.split('')
  
  for (let i = 0; i < splitString.length; i++) {
      if (splitString[i] === splitString[i].toUpperCase()) {
        splitString[i] = ` ${splitString[i]}`
      }
    }
  return splitString.join('')
  }


//NUMBER 18

/*
Create a combat function that takes the player's current health and the amount of damage recieved, 
and returns the player's new health. Health can't be less than 0.
*/                       

//MY SOLUTION
function combat(health, damage) {
  // Write your code here
  let newHealth = health - damage
  return (newHealth >= 0) ? newHealth : 0
}

//NUMBER 17

/*
Write a function named sumDigits which takes a number as input and returns the sum of the 
absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/                       

//MY SOLUTION
function sumDigits(number) {
  let newNum = Math.abs(number).toString().split('')
  let sum = 0
  newNum.forEach((sucker)=> {
    sum = sum + Number(sucker)
  })
  return sum
}


//NUMBER 16

/*
Complete the solution so that it splits the string into pairs of two characters.
 If the string contains an odd number of characters then it should replace the missing second 
 character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/                       

//MY SOLUTION
function solution(str){
  let newStr = str.split('')
  if (newStr.length % 2 !== 0) {
    newStr.push('_')
  }
   let reception = []
   for(let i = 0; i < newStr.length; i+=2) {
       reception.push(newStr.slice(i, i + 2).join(''))
   }
   return reception
}

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


