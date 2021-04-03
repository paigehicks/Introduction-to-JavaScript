/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/

 var votingAge = 29;
if (votingAge >= 18) {
  console.log(true);
}


/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/

var shirt = 'blouse';
var shoes = 'boots';

if (shoes === 'boots') {
  shirt = 'flannel';
}

console.log(shirt);
console.log(shoes);



/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/

var birthYear = 1999;
Number(birthYear);

console.log(birthYear);


/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(/*add your code here*/){
    /*add your code here*/
  }
var one = 4;
var two = 6;

function multiply(a,b){
  var answer = a * b;
  return answer;
}

multiply(a,b);


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

var honeyBoy = 4;
function dogYears(age){
    var dogYear = age * 7;
    return dogYear;
}
dogYears(honeyBoy);



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

var dogWeight = 12;
var dogAge = 4;

function hungryDog(weight,age){
    var amountRawFood;
      if (dogAge >= 1) {
        if (weight < 5) {
          amountRawFood = weight * .05;
        }
        if (weight <= 10 && weight >= 11) {
          amountRawFood = weight * .05;
        }
        if (weight > 15) {
          amountRawFood = weight * .02;
        }
      } else {
        if (age <= .33 && age >= .17) {
          amountRawFood = weight * .1;
        }
        if (age <= .58 && age >= .33) {
          amountRawFood = weight * .05;
        }
        if (age <= 1 && age >= .58) {
          amountRawFood = weight * .04;
        }
      }
    }

console.log(hungryDog(15,1));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/
var computer = Math.random();
var player = 'Rock';

if (computer > .45) {
  computer = 'Rock';
} 
else if (computer > .25 && computer < .3) {
  computer = 'Paper';
} else {
  computer = 'Scissors';
}

function game(user, computer){
    if (player === 'Rock') {
      if (computer === 'Scissors'){
      return 'You Win!'
    } else if (computer === 'Rock') {
      return 'Tie :/'
    }
    else {
      return 'You lose'
    }
  }
  if (player === 'Paper') {
    if (computer === 'Rock'){
    return 'You Win!'
  } else if (computer === 'Paper') {
    return 'Tie :/'
  }
  else {
  return 'You lose'
  }
  }
  if (player === 'Scissors') {
    if (computer === 'Paper'){
    return 'You Win!'
  } else if (computer === 'Scissors') {
  return 'Tie :/'
  }
  else {
  return 'You lose'
  }
  }
}
console.log(game(player,computer));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kilometers received to miles
  3. Return the number of miles
*/

function miles(kilometers){
  return kilometers / 1.609;
  }

    console.log(miles(2));


//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

function feet(cm){
    return cm / 30.48;
  }

console.log(feet(3));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(){
    let bottles;
    let bottlesLeft;
      for (i = 99; i >= 1; i--){
        if (i === 1){
          bottles = "bottle";
          bottlesLeft = "no bottles of soda on the wall";
        } else {
          bottles = "bottles";
          bottlesLeft = i - 1 + "bottles of soda on the wall";
        }
    console.log(i+ "" + bottles + " of soda on the wall,");
    console.log(i + "" + bottles + " of soda,");
    console.log("take one down pass it around");
    console.log(bottlesLeft)
      }
  }

console.log(annoyingSong());

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 should return 'you got an A' 
   80-89 should return 'you got a B'
   70-79 should return 'you got a C'
   60-69 should return 'you got a D'
   below should return 'you got an F'
*/
  
function grade(score){
  if (score < 60){
    return "you got an F";
  }
  else if (score >= 60 && <= 69){
    return "you got a D";
  }
  else if (score >= 70 && <= 79){
    return "you got a C";
  }
  else if (score >= 80 && <= 89){
    return "you got a B";
  }
  else if (score >= 90){
    return "you got an A";
  }
}
  
  console.log(grade(83));

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
    /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    //console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
