//NUMBER 

/*

*/                       

//MY SOLUTION

/*********THE ABOVE IS A TEMPLATE*************** */

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


