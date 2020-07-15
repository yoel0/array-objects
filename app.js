var name = "Yoel";
console.log(name);

var myLocation = "Los Angeles";
console.log(myLocation);

var favoriteNumber = "8";
console.log(favoriteNumber);

var teams = [
  "Rockets",
  "Lakers",
  "Warriors",
  "Clippers",
  "Blazers",
  "Celtics",
  "Nets",
];
console.log(teams);

// while loops
var number = 10;
var otherNumber = 1;

while (otherNumber < number) {
  console.log(otherNumber);
  // otherNumber += 1;
  otherNumber = otherNumber + 1;
}

var numberTwo = 20;
var myOtherNumber = 10;

while (myOtherNumber < numberTwo) {
  console.log(myOtherNumber); // 10, 11, 12
  myOtherNumber += 1; // 11, 12, 13
}

//my two examples of while loops

var numberThree = 30;
var otherNumberThree = 15;

while (otherNumberThree < numberThree) {
  console.log(otherNumberThree);
  otherNumberThree += 1;
}

var rice = 40;
var myOtherRice = 20;

while (myOtherRice < rice) {
  console.log(myOtherRice); // 10, 11, 12
  myOtherRice += 1; // 11, 12, 13
}

// for loops
for (var i = 0; i < 10; i++) {
  console.log(i); // 0, 1, 2.....
}

// print teams
for (var i = 0; i < teams.length; i++) {
  var eachTeam = teams[i]; // Rockets, Lakers, Warriors...
  console.log(eachTeam);
}

// Make an array
// Use a for loop to iterate through your array
// print each element in your array

const cars = ["Tesla", "Honda", "Toyota", "Ford"];
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  let eachCar = cars[i]; // Tesla, Honda...
  console.log(eachCar);
}
