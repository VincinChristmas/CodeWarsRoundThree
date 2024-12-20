//NUMBER 

/*

*/                       

//MY SOLUTION




/*********THE ABOVE IS A TEMPLATE*************** */
//NUMBER 100

/*
Functional closures can get overly attached. Set them straight!

Why doesn't greetAbe() actually greet Abe?

*/                       

//MY SOLUTION
const abeName = 'Abe';


const greetAbe = () => 'Hello, ' + abeName + '!';


const benName = 'Ben';

const greetBen = () => 'Hello, ' + benName + '!';

//NUMBER 99

/*
Write a function that calculates the original product price, without VAT.

Example
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1
*/                       

//MY SOLUTION
function excludingVatPrice(price){
  if (price === null) {
    return -1
  }
  else {
  return Number((price/1.15).toFixed(2));
    }
}


//NUMBER 98

/*
Hello, this is my first Kata so forgive me if it is of poor quality.

In this Kata you should fix/create a program that returns the following values:

false/False if either a or b (or both) are not numbers
a % b plus b % a if both arguments are numbers
You may assume the following:

If a and b are both numbers, neither of a or b will be 0.
*/                       

//MY SOLUTION
function myFirstKata(a, b) {
  if (typeof(a) !== "number" || typeof(b) !== "number"){
    return false
  } 
    
   else {
     return (a % b) + (b%a)
    }
}


//NUMBER 97

/*
I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global 
isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

Any solution is acceptable!
*/                       

//MY SOLUTION

const isReallyNaN = (val) => {
  // return isNaN(val);  // wasn't working as planned :-(
  return Number.isNaN(val)
};


//NUMBER 96

/*
Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the 
right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same 
as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.
*/                       

//MY SOLUTION
function correctTail(bod, tail) {
  
  let sub = bod.substr(bod.length-(tail.length))
   
   if (sub == tail) {
     return true
   }
   
   else {
     return false
     }
   
   }

//NUMBER 95

/*
There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.
*/                       

//MY SOLUTION
Object.freeze(MrFreeze)

//NUMBER 94

/*
Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points.

Some useful associations relevant to this kata:

1 Imperial Gallon = 4.54609188 litres
1 Mile = 1.609344 kilometres
*/                       

//MY SOLUTION
function converter (mpg) {
  //code to convert miles per imperial gallon to kilometers per liter
  let kpl = (mpg * 1.609344) / 4.54609188
  return Number(parseFloat(kpl).toFixed(2))
}

//NUMBER 93

/*
Your task is to check if the gunners are loaded and ready, if they are: Fire!

If they aren't ready: Shiver me timbers!

Your gunners for each test case are 2, 3 or 4.

When you check if they are ready their answers are in a dictionary and will either be: aye or nay

Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!
*/                       

//MY SOLUTION
const cannonsReady = (gunners) => {
  //your solution here
  let sum = 0;
  for (let key in gunners) {
    if (gunners[key] == 'nay') {
      sum = sum + 1
    }
  }
  if (sum == 0) {
    return 'Fire!'
  }
  else {
    return 'Shiver me timbers!'
  }
}

//NUMBER 92

/*
Given a logarithm base X and two values A and B, return a sum of logratihms with the base X: 
log
⁡
X
A
+
log
⁡
X
B
log 
X
​
 A+log 
X
​
 B.
*/                       

//MY SOLUTION
function logs(x , a, b){
  //your code here
    return Math.log(a * b) / Math.log(x);
  }


//NUMBER 91

/*
Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates.
 Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.
*/                       

//MY SOLUTION
function symmetricPoint(p, q) {
  return [(2 * q[0]) - p[0], (2 * q[1]) - p[1]]
}

//NUMBER 90

/*
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.
*/                       

//MY SOLUTION
var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}

//NUMBER 89

/*
Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/                       

//MY SOLUTION
function isToday(date) {
  let today = new Date();
  return today.toDateString() == date.toDateString() 
}

//NUMBER 88

/*
Terminal Game - Create Hero Prototype
In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

attribute	value
name	user argument or 'Hero'
position	'00'
health	100
damage	5
experience	0
*/                       

//MY SOLUTION
function Hero (name) {
  // add default values here
  this.position='00'
  this.health=100
  this.damage= 5
  this.experience=0
  this.name = name || 'Hero'
  }

//NUMBER 87

/*
Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

*/                       

//MY SOLUTION
function oddCount(n){
  return Math.floor(n / 2)
}


//NUMBER 86

/*
Wilson primes satisfy the following condition. Let 
P
P represent a prime number.

Then,

(
P
−
1
)
!
+
1
P
∗
P
P∗P
(P−1)!+1
​
 
should give a whole number, where 
P
!
P! is the factorial of 
P
P.

Your task is to create a function that returns true if the given number is a Wilson prime and false otherwise.
*/                       

//MY SOLUTION
function amIWilson(p) {
  return p === 5 || p === 13 || p === 563
}
//NUMBER 85

/*
Create a function that takes a number as an argument and returns a grade based on that number.

Score	Grade
Anything greater than 1 or less than 0.6	"F"
0.9 or greater	"A"
0.8 or greater	"B"
0.7 or greater	"C"
0.6 or greater	"D"
Examples:

grader(0)   should be "F"
grader(1.1) should be "F"
grader(0.9) should be "A"
grader(0.8) should be "B"
grader(0.7) should be "C"
grader(0.6) should be "D"
*/                       

//MY SOLUTION
function grader(score) {
  if (score >= 0.9 && score <= 1) {
    return 'A'
  }
  else if (score >= 0.8 && score < 0.9) {
    return 'B'
  }
  else if (score >= 0.7 && score < 0.8) {
    return 'C'
  }
  else if (score >= 0.6 && score < 0.7) {
    return 'D'
  }
  else if (score < 0.6 || score > 1 ) {
    return 'F'
  }
}

//NUMBER 84

/*
1 < 2 < 3 === true right? but could

3 < 2 < 1 === true too??

Here's your puzzle: Write a function greaterThanLessThan that takes three arguments, a, b, and c, and returns a boolean (true or false), such that:

greaterThanLessThan(1, 2 3) === true
and

greaterThanLessThan(3, 2 1) === true
But also

graterThanLessThan(-3, -2, -1) == false
with more examples on the expected behavior in the test cases.

Hints
Arguments do not necessarily have to be in strict ascending or descending order, as indicated by the example test cases.
Check out the included test cases - not all arguments are going to return true! It's up to you to figure out which ones do and which ones don't.

This challenge is a LOT easier than it might seem at first. Don't focus too much on building functions - just pay attention to precedence.
Best of luck!
*/                       

//MY SOLUTION
function greaterThanLessThan (a,b,c) {
    return a < b < c
  }
//NUMBER 84

/*
Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

We know the rules of confect:

material1 and material2 cannot be selected at the same time
material3 and material4 cannot be selected at the same time
material5 and material6 must be selected at the same time
material7 or  material8 must be selected(at least one, or both)
Task
You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. 
Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

Example
For formula = [1,3,7], The output should be true.

For formula = [7,1,2,3], The output should be false.

For formula = [1,3,5,7], The output should be false.

For formula = [1,5,6,7,3], The output should be true.

For formula = [5,6,7], The output should be true.

For formula = [5,6,7,8], The output should be true.

For formula = [6,7,8], The output should be false.

For formula = [7,8], The output should be true.

Note
All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.

Happy Coding ^_^
*/                       

//MY SOLUTION
function isValid(formula){
  //coding and coding..
  if (formula.includes(1) == true && formula.includes(2) == true) {
    return false
  }
  else if (formula.includes(3) == true && formula.includes(4) == true) {
    return false
  }
  else if (formula.includes(5) ==  true && formula.includes(6) == false) {
    return false
  }
  else if  (formula.includes(6) ==  true && formula.includes(5) == false) {
    return false
  }
  else if (formula.includes(7) ==  false && formula.includes(8) == false) {
    return false
  }
  else {
    return true
  }
}


//NUMBER 83

/*
Mr. despair wants to jump off Dutch act, So he came to the top of a building.

Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will
 often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

Input: floor, The height of the building (floor)

Output: a string, The voice of despair(When jumping Dutch act)

Example:
sc(2) should return "Aa~ Pa! Aa!"

It means:

Mr. despair jumped from the 2 floor, the voice is "Aa~"
He fell on the ground, the voice is "Pa!"
He did not die immediately, and the final voice was "Aa!"
sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"

sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

if floor<=1, Mr. despair is safe, return ""
*/                       

//MY SOLUTION


function sc(floor){
  let collection = []
  let firstBlock
  let sum = 0
  while (sum < floor) {
    sum = sum + 1
    collection.push("Aa~ ")
  }
  if (floor <= 1) {
    return ""
  }
  else if (floor <= 6) {
    firstBlock = collection.slice(0, collection.length-1).join('') + 'Pa! Aa!'
  }
  else if (floor > 6) {
    firstBlock = collection.slice(0, collection.length-1).join('') + 'Pa!'
  }
  return firstBlock
}



//NUMBER 82

/*
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
*/                       

//MY SOLUTION
function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0 ) {
    return true
  }
  else {
    return false
  }
}



//NUMBER 81

/*
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"
Good luck!
*/                       

//MY SOLUTION
function calculator(a, b, sign) {
  if (sign !== "+" && sign !== "-" && sign !== "*" && sign !== "/") {
      return "unknown value";
  }
  if (typeof a !== "number" || typeof b !== "number") {
      return "unknown value";
  }

  if (b == 0) {
    return Infinity
  }
  switch (sign) {
      case "+":
          return a + b;
      case "-":
          return a - b;
      case "*":
          return a * b;
      case "/":
          if (b === 0) {
              return "division by zero";
          }
          return a / b;
  }
}

//NUMBER 80

/*
Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []
*/                       

//MY SOLUTION
function odds(values){
  // arrow it
  return values.filter( numbers =>  numbers % 2 !== 0);
}


//NUMBER 79

/*
Task
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
*/                       

//MY SOLUTION

function flickSwitch(arr){
  let collection = []
 let currentState = true
 for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'flick') {
      currentState = !currentState
      }
   collection.push(currentState)
 }
 return collection
}


//NUMBER 78

/*
Get ASCII value of a character.

For the ASCII table you can refer to http://www.asciitable.com/
*/                       

//MY SOLUTION
function getASCII(c){
  return c.charCodeAt()
}

//NUMBER 77

/*
You have to write a function that describe Leo:

function leo(oscar) {

}
if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!"
*/                       

//MY SOLUTION

function leo(oscar){
  switch (true) {
      case oscar == 88:
      return  "Leo finally won the oscar! Leo is happy"
      break;
      
      case oscar == 86:
      return  "Not even for Wolf of wallstreet?!"
      break;
      
      case oscar !== 88 && oscar && 86 && oscar < 88:
      return  "When will you give Leo an Oscar?"
      break;
      
      case oscar > 88:
      return  "Leo got one already!"
      break;
  }
 }

//NUMBER 76

/*
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/                       

//MY SOLUTION
String.prototype.digit = function() {
  const regex = /^\d$/;
  return regex.test(this.toString());
};


//NUMBER 75

/*
Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

A Pythagorean Triple consists of arranging 3 integers, such that:

a2 + b2 = c2

Examples
[5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

[3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

[13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132

[100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, 
you will never find a way to satisfy the equation a2 + b2 = c2

Return Values
For Python: return True or False
For JavaScript: return true or false
Other languages: return 1 or 0 or refer to Sample Tests.
*/                       

//MY SOLUTION

function isPythagoreanTriple(integers) {
  // Good luck friends!
  let a = integers[0]
  let b = integers[1]
  let c = integers[2]
  if (((a**2) + (b**2) == (c**2)) ||  ((b**2) + (c**2) == (a**2))
     ||  ((a**2) + (c**2) == (b**2))
     ) {
    return true
  }
  else  {
    return false
  }
}


//NUMBER 74

/*
You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of 
JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water 
that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!
*/                       

//MY SOLUTION
function rainAmount(mm){
  if (mm >=40) {
       return "Your plant has had more than enough water for today!"
  }
  else {
       return `You need to give your plant ${40 - mm }mm of water`
  };
}


//NUMBER 73

/*
Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right 
into the ocean, a small way from a set of stairs used to climb out.

As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water 
you either freeze when you realise you are dead, or swim when you realise you can make it!

You are given 5 variables;

sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

sharkSpeed = how fast it can move in metres/second.

pontoonDistance = how far you need to swim to safety in metres.

youSpeed = how fast you can swim in metres/second.

dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

The pontoon, you, and the shark are all aligned in one dimension.

If you make it, return "Alive!", if not, return "Shark Bait!".
*/                       

//MY SOLUTION

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  let timeToSafety = pontoonDistance / youSpeed; 
  let sharkTimeWithoutDolphin = sharkDistance / sharkSpeed;
  let sharkTimeWithDolphin = sharkDistance / (sharkSpeed / 2);

  if (dolphin) {
    
    if (timeToSafety < sharkTimeWithDolphin) {
      return "Alive!";
    } else {
      return "Shark Bait!";
    }
  } else {
    
    if (timeToSafety < sharkTimeWithoutDolphin) {
      return "Alive!";
    } else {
      return "Shark Bait!";
    }
  }
}


//NUMBER 72

/*
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. 
For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!"
"!Hi"     ---> "Hi!"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi!"
*/                       

//MY SOLUTION
function remove (string) {
  let newString = []
  for(let i = 0; i < string.length; i++) {
    if(string[i] !== '!') {
      newString.push(string[i])
    }
  }
  return `${newString.join('')}!`
}
//NUMBER 71

/* Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped 
and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.

Examples
input:    "CodeWars" => "CdWr oeas"
           ||||||||      |||| ||||
indices:   01234567      0246 1357
Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
Odd indices are 1, 3, 5, 7, so the second group is "oeas".
And the final string to return is "Cdwr oeas".

Notes
Tested strings are at least 8 characters long.
*/

function sortMyString(S) {
  let even = [];
  let odd = [];
  for (let i = 0; i < S.length; i++) {
      if (i % 2 === 0) {
          even.push(S[i]);
      } else {
          odd.push(S[i]);
      }
  }
  return `${even.join('')} ${odd.join('')}`;
}

//NUMBER 70

/*
Your task is simply to count the total number of lowercase letters in a string.

Examples
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26
*/                       

//MY SOLUTION
function lowercaseCount(str){
  const lowercaseLetters = str.match(/[a-z]/g);
  return lowercaseLetters? lowercaseLetters.length : 0;

}

//NUMBER 69

/*
Task Description
You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function that takes the website date/time in its original string format and returns the shortened format.

Input
Input will always be a string, e.g., "Friday May 2, 7pm". 

Output
Output will be the shortened string, e.g., "Friday May 2".
*/                       

//MY SOLUTION
function shortenToDate(longDate) {
  let newDate = []
  for (let i = 0; i < longDate.length; i++) {
    if (longDate[i] !== ',') {
      newDate.push(longDate[i])
    }
  }
  return newDate.slice(0, newDate.length-4).join('').trim()
}



//NUMBER 68

/*
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2)
 numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common
 Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, 
returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array
 (except in C return NULL) and be ready for anything else which is not clearly specified ;)
*/                       

//MY SOLUTION
function tribonacci(signature,n){
  //your code here
  let collection = []
  if (n == 0) {
    return []
  }
  else if (n == 1) {
    collection.push(signature[0])
    return collection
  }
  else if (n == 2) {
    collection.push(signature[0])
    collection.push(signature[1])
    return collection
  }
  else {
  
  
  while(signature.length < n) {
    signature.push(signature.slice(-3).reduce((a,b)=>a+b, 0))
  }
    return signature
    }
  
}

//NUMBER 67 

/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/                       

//MY SOLUTION

function getEvenNumbers(numbersArray){
  // filter out the odd numbers
 function isEven(number) {
   return number % 2 === 0
 }
  
  return numbersArray.filter(isEven)
 
}
//NUMBER 66

/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

ArraysFundamentals
*/                       

//MY SOLUTION
function noOdds( values ){
  // Return all non-odd values
  let collection = []
  for (let i = 0; i < values.length; i++) {
    if(values[i] % 2 == 0) {
      collection.push(values[i])
    }
  }
  return collection
}


//NUMBER 65 

/*
This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" 
should not be truncated when exponent = 2.

For example:

derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product 
of the two numbers, and the second number being the exponent minus 1.

derive(7, 8) --> this should output "56x^7" 
derive(5, 9) --> this should output "45x^8" 
Notes:

The output of this function should be a string
The exponent will never be 1, and neither number will ever be 0
*/                       

//MY SOLUTION

function derive(coefficient,exponent) {
  
  return `${coefficient * exponent}x^${exponent - 1}`

}

//NUMBER 64

/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely
 by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
*/                       

//MY SOLUTION


function bump(x){
  let str = x.split('')
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'n') {
      sum = sum + 1
    }
  }
    if (sum > 15) {
      return "Car Dead"
    } else {
      return "Woohoo!"
    }
  
  }


//NUMBER 63

/*
Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt
*/                       

//MY SOLUTION
function add(a,b){
  return a + b
}

function divide(a,b){
  return a / b
}

function multiply(a,b){
  return a * b
}

function mod(a,b){
  return a % b
}
 
function exponent(a,b){
  return a ** b
}
  
function subt(a,b){
  return a - b
}

//NUMBER 62

/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. 
Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49.
*/                       

//MY SOLUTION
function solve(s) {
  const charMap = {
    a: 0, b: 2, c: 3, d: 4, e: 0, f: 6, g: 7, h: 8, i: 0, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 0, p: 16, q: 17, r: 18, s: 19, t: 20,
    u: 0, v: 22, w: 23, x: 24, y: 25, z: 26
  };

  let maxSum = 0;
  let currentSum = 0;
  let newString = s.toLowerCase().split('');

  for (let i = 0; i < newString.length; i++) {
    let currentValue = charMap[newString[i]];
    if (currentValue !== 0) {
      currentSum += currentValue;
      maxSum = Math.max(maxSum, currentSum);
    } else {
      currentSum = 0; 
    }
  }

  return maxSum;
} 

//NUMBER 61

/*
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/                       

//MY SOLUTION
function roundToNext5(n){
  return Math.ceil(n / 5) * 5;
}

//NUMBER 60

/*
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"

*/                       

//MY SOLUTION

function sumMul(n,m){
  let collection = []
  let newCollection = []
  
  let sum = 0
  let newSum = 0
if (n === 0 && m === 0) {
  return 'INVALID'
} 
  else if (n < 0 || m < 0) {
    return 'INVALID'
  }
  else {
    
    while (sum < m) {
      sum = sum + 1
      collection.push(sum)
    }
    collection.forEach((number)=>{
      newCollection.push(n * number)
      
    })
  }
  for (let i = 0; i < newCollection.length; i++) {
  
    if (newCollection[i] < m) {
      newSum = newSum + newCollection[i]
    }
    
  }
  return newSum
}

//NUMBER 59

/*
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

Good luck :)

*/                       

//MY SOLUTION
function nearestSq(n) {
  let sqrtN = Math.sqrt(n);
  let lowerSq = Math.floor(sqrtN) ** 2;
  let upperSq = Math.ceil(sqrtN) ** 2;

  if (Math.abs(lowerSq - n) < Math.abs(upperSq - n)) {
    return lowerSq;
  } else {
    return upperSq;
  }
}


//NUMBER 58

/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two 
highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, 
then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
*/                       

//MY SOLUTION
function twoOldestAges(ages){
  let box = []
let newAges = ages.sort((a,b) => a-b)
box.push(newAges.pop())
  box.push(newAges.pop())
  return box.reverse()
}

//NUMBER 57

/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

*/                       

//MY SOLUTION
function sameCase(a, b){
  var chars = []
  var bigChars = []
  for (var i = 97; i < 123; i++) {
    chars.push(String.fromCharCode(i))
    bigChars.push(String.fromCharCode(i).toUpperCase())
  }
    if (!chars.includes(a.toLowerCase()) && !bigChars.includes(a)) {
    return -1
  }
  
  else if (!chars.includes(b.toLowerCase()) && !bigChars.includes(b)) {
    return -1
  }
  
  else if (chars.includes(a) && chars.includes(b)) {
    return 1
  }
  else if (bigChars.includes(a) && bigChars.includes(b)) {
    return 1
  }
  else if (chars.includes(a) && chars.includes(b) == false) {
    return 0
  }
  else if (bigChars.includes(a) && bigChars.includes(b) == false) {
    return 0
  }
 
  else {
    return -1
  }
  
}

//NUMBER 56

/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/                       

//MY SOLUTION
function encode(string) {
  let brokenString = string.split('')
  for(let i = 0; i < brokenString.length; i++) {
    if (brokenString[i] === 'a') {
       brokenString[i] = 1
    }
     if (brokenString[i] === 'e') {
       brokenString[i] = 2 
    }
    else if (brokenString[i] === 'i') {
     brokenString[i] = 3
    }
    else if (brokenString[i] === 'o') {
      brokenString[i] = 4
    }
   else if (brokenString[i] === 'u') {
      brokenString[i] = 5
    }
    
  }
  return brokenString.join('')
}

function decode(string) {
   const strArr = string.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '1') {
      strArr[i] = 'a';
    } else if (strArr[i] === '2') {
      strArr[i] = 'e';
    } else if (strArr[i] === '3') {
      strArr[i] = 'i';
    } else if (strArr[i] === '4') {
      strArr[i] = 'o';
    } else if (strArr[i] === '5') {
      strArr[i] = 'u';
    }
  }
  return strArr.join('');
}

//NUMBER 55

/*
Create a method that accepts a list and an item, and returns true if 
the item belongs to the list, otherwise false.
*/                       

//MY SOLUTION
function include(arr, item){
  return arr.includes(item)
}

//NUMBER 54

/*
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing
 up to 26 unique alphabetical characters, 
and returns a string containing the same characters in alphabetical order.
*/                       

//MY SOLUTION


function sortGiftCode(code) {
  let arrCode = code.split('')
  return arrCode.sort().join('')
}

//NUMBER 53

/*
To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer
*/                       

//MY SOLUTION
function cubeChecker(volume, side){
  let total = side * side * side
  if (total <= 0 ) {
    return false
  }
  else if (total == volume) {
    return true
  }
  else {
    return false
  }
}

//NUMBER 52

/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/                       

//MY SOLUTION
function removeDuplicateWords (s) {
  let collectionCan = []
  let wordCollection =  s.split(' ')
  wordCollection.forEach((word)=> {
    if (collectionCan.includes(word) == false) {
    collectionCan.push(word)
      } 
  })
  return collectionCan.join(' ')
}

//NUMBER 51

/*
Write a function that accepts two integers and returns the remainder of 
dividing the larger value by the smaller value.

Division by zero should return NaN.

Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
*/                       

//MY SOLUTION
function remainder(n, m){
  let numberCollection = [n,m].sort((a,b)=>a-b)
  let final = numberCollection[1] % numberCollection[0]
  if (final == numberCollection[1] % 0) {
    return NaN
  }
 else {
   return final
 } 
}

//NUMBER 50

/*
Create a function that takes a number and returns an array of strings
 containing the number cut off at each digit.

Examples
420 should return ["4", "42", "420"]
2017 should return ["2", "20", "201", "2017"]
2010 should return ["2", "20", "201", "2010"]
4020 should return ["4", "40", "402", "4020"]
80200 should return ["8", "80", "802", "8020", "80200"]
PS: The input is guaranteed to be an integer in the range [0, 1000000]
*/                       

//MY SOLUTION
function createArrayOfTiers(num) {
  let toaster = []
  let number = num.toString().split('')
  for (let i = 1; i < number.length; i++) {
    
    number[i] = (number[i - 1]) + number[i] 
    toaster.push(number[i])
  }
  toaster.unshift(number[0])
  return toaster
}

//NUMBER 49

/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/                       

//MY SOLUTION
function getSize(width, height, depth) {
  
  let area = 2 * ((width * height) + (width * depth) + (height * depth))
  let volume =  width * height * depth;
  
  let mathArr = [area, volume]
  return mathArr
}


//NUMBER 48

/*
Write a method (or function, depending on the language) that converts a 
string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
Don't forget to rate this kata! Thanks :)
*/                       

//MY SOLUTION

String.prototype.camelCase=function(){
  let wordCollection = []
  let finalCollection = []
  if (this.length === 0) {
    return '';
  }
   let words = this.split(' ')
   words.forEach((word)=> {
     wordCollection.push(word.toUpperCase())
   })
   wordCollection.forEach((newWord) => {
     let partOne = newWord[0] + newWord.slice(1).toLowerCase()
     finalCollection.push(partOne)
   })
    
return finalCollection.join('')
}

//NUMBER 47

/*
In this kata you get the start number and the end number of a 
region and should return the count of all numbers except numbers with a 5 in it. 
The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
*/                       

//MY SOLUTION
function dontGiveMeFive(start, end)
{
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes('5')) {
      count++;
    }
  }
  return count;
}

//NUMBER 46

/*
Given an integer, if the length of it's digits is a perfect square, return a square block 
of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

Examples:

1212 returns:

"12
12"
Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

123123123 returns:

"123
123
123"
Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.
*/                       

//MY SOLUTION
function squareIt(num) {
  let str = '';
  let collection = [];
  let number = num.toString();
  let size = Math.sqrt(number.length);
  if (size === 1) {
    return num.toString();
  } else if (!Number.isInteger(size)) {
    return "Not a perfect square!";
  } else {
    for (let i = 0; i < number.length; i += size) {
      let batch = number.slice(i, i + size);
      collection.push(batch);
    }
    return collection.join('\n');
  }
}






//NUMBER 45

/*
There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), 
calculate the total cost of the mangoes.

Examples
mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
*/                       

//MY SOLUTION
function mango(quantity, price){
  let sum = 0
  let num = 0
  while (sum < quantity) {
    sum = sum + 1
    if (sum % 3 == 0) {
      num = num + 1
    }
  }
    return (sum - num) * price
  }

//NUMBER 44

/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/                       

//MY SOLUTION
var greet = function(name) {
  let newName = name.toLowerCase()
  let finalName = newName.replace(newName[0], newName[0].toUpperCase())
  return `Hello ${finalName}!`
};

//NUMBER 43

/*
Please refer to two example above and write your first JS function.

mission 1:

use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

mission 2:

use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

mission 3:

type the console.log() in the next line (don't forget to put the str in the parentheses).

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.
*/                       

//MY SOLUTION
function helloWorld() {
  var str = "Hello World!"
  console.log(str)
}

//NUMBER 42

/*
Your boss decided to save money by purchasing some cut-rate optical character recognition software for 
scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it 
throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text 
and remove all of the numbers. Your program will take in a string and clean out all numeric 
characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/                       

//MY SOLUTION
function stringClean(s){
  return s.replace(/\d+/g, '');
}


//NUMBER 41

/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/                       

//MY SOLUTION
function position(letter){
  var chars=[];
  for (var i=97;i<123;i++){
    chars.push(String.fromCharCode(i));
  }
    return `Position of alphabet: ${chars.indexOf(letter) + 1}`
  }

//NUMBER 40

/*
Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper 
cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
 index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are 
multiple words. Words will be separated by a single space(' ').

Examples:
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"
*/                       

//MY SOLUTION
function toWeirdCase(string){
  //TODO
  let emptyString = []
  let strings = string.split(' ')
  
  strings.map((word)=>{
    let newWord = word.split('')
    
    for(let i = 0; i < newWord.length; i++) {
      if (i % 2 === 0) {
        newWord[i] = newWord[i].toUpperCase()
      }
    }
    emptyString.push(newWord.join(''))
  })
  return emptyString.join(' ')
}

//NUMBER 39

/*
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/                       

//MY SOLUTION

function take(arr, n) {
  // Your code here
  return arr.slice(0,n)
}

//NUMBER 38

/*
Complete the function which converts hex number (given as a string) to a decimal number.


*/                       

//MY SOLUTION
function hexToDec(hexString){
  return parseInt(hexString, 16)
}

//NUMBER 37

/*
Determine the total number of digits in the integer (n>=0) given as input to the function.
\ For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.
*/                       

//MY SOLUTION
function digits(n) {
  let number = n.toString().split('')
  return number.length
}

//NUMBER 36

/*
Grasshopper - Function syntax debugging
A student was working on a function and made some syntax mistakes while coding. 
Help them find their mistakes and fix them.
*/                       

//MY SOLUTION

function main (verb, noun) {
  return verb + noun
}

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


