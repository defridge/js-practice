// CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), 
// which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// 1. Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// 2. Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// 3. Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing 
// information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// const massMark = 78;
// const heightMark =  1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log (BMIJohn, BMIMark);

// let markHigherBMI = BMIMark > BMIJohn;

// console.log(markHigherBMI);

// -------------------------------------------------------------------------------------------------------------------------

// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

// const massMark = 78;
// const heightMark =  1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log (BMIJohn, BMIMark);

// let markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// if (BMIMark > BMIJohn) {
//     console.log(`"Mark's BMI (${BMIMark}) is higher then John's (${BMIJohn})!"`);
// } else {
//     console.log(`"John's's BMI (${BMIJohn}) is higher then Mark's (${BMIMark})!"`);
// }

// -------------------------------------------------------------------------------------------------------------------------

// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. 
// The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. 
// The average score for Dolphins should be assigned to the scoreDolphins variable, 
// and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.


// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88, 91, 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy")
// } else {
//     console.log("Koalas win the trophy");
// }

// -------------------------------------------------------------------------------------------------------------------------

// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. 
// In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// 1. Calculate the tip, depending on the bill value. Create a variable called tip for this. 
// It's not allowed to use an if...else statement (if it's easier for you, 
// you can start with an if...else statement, and then try to convert it to a ternary operator).

// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// let bill = 275;

// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// let total = bill + tip;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);

// -------------------------------------------------------------------------------------------------------------------------

// CHALLENGE #5
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, 
// which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. 
// This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned 
// from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters 
// (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, 
// according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.


// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// let calcAverage = (a, b, c) => {
//     return (a + b + c) / 3;
// }

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(85, 54, 41);

// let checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins > avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgDolphins === avgKoalas) {
//         console.log("No team wins");
//     } else {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     }
// }

// let winner = checkWinner(scoreDolphins, scoreKoalas);


// -------------------------------------------------------------------------------------------------------------------------

// CHALLENGE #6
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, 
// calculated based on the rules above (you can check out the code from the first tip calculator 
//     challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// let bill = 100;

// function calcTip(bill) {
//     let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//     return tip;
// }

//     // let total = bill + tip;
//     // return total;

// let bills = [125, 555, 44];

// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// let totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(totals);

// -------------------------------------------------------------------------------------------------------------------------

// CHALLENGE #7
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: 
// BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, 
// and height (Mark Miller and John Smith). Name these objects as mark and john, 
// and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). 
// Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. 
// Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// let mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// let john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
// }

// -------------------------------------------------------------------------------------------------------------------------

// Loop Practice

// for (let i = 1; i <= 10; i++) {
//     console.log(`Lifting weight reps ${i}`);
// }

// const lukesArray = ["Luke", "Indre", "Rex", "Disco", "Freddie"];
// const types = [];

// for (let i = 0; i < lukesArray.length; i++) {
//     console.log(lukesArray[i], typeof lukesArray[i]);
//     // types[i] = typeof lukesArray[i];
//     types.push(typeof lukesArray[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(years, ages);

// console.log("---ONLY STRINGS---");
// const arr2 = ["dog", 1991, ['a', 'b', 'c'], true];
// for (let i = 0; i < arr2.length; i++) {
//     if(typeof arr2[i] !== "string") continue;
//     console.log(arr2[i]);
// }

// console.log("---BREAK WITH BOOLEAN---");
// const arr2 = ["dog", 1991, ['a', 'b', 'c'], true];
// for (let i = 0; i < arr2.length; i++) {
//     if(typeof arr2[i] === "boolean") break;
//     console.log(arr2[i]);
// }

const arr2 = ["dog", 1991, ['a', 'b', 'c'], "cat"];

for (let i = arr2.length - 1; i >= 0; i--) {
    console.log[arr2[i]];
}

