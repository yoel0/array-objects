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

// Objects
// key: value pairs

const rome = {
  fullName: "Rome Bell",
  age: 32,
  myLocation: "Los Angeles",
  placesTraveled: ["Kentucky", "Ohio", "New York", "Washington DC"],
};

console.log(rome);

// myLocation
console.log(rome.myLocation);

// print New York
console.log(rome.placesTraveled[2]);

const myReallyCoolPost = {
  username: "@generalassembly",
  likes: 1200,
  comments: ["really cool post", "nice", "javascript is cool", "woah"],
  caption: "Day 3 of SEI",
  PICTURE: "https://instagram.com/generalassembly/.....",
  shares: 12,
};
// console.log(myReallyCoolPost);

myReallyCoolPost.myLocation = "San Fran";
console.log(myReallyCoolPost);

// likes, captions, shares, comments, username, picture

// instagram post object

const FourthOfJulyPost = {
  username: "@ga",
};
FourthOfJulyPost.picture = "https://instagram.com/.....";
FourthOfJulyPost["likes"] = 15;
FourthOfJulyPost.comments = ["ok..."];
FourthOfJulyPost.caption = "Writing code on the 4th";
console.log(FourthOfJulyPost);

// Functions

// standard
function sayHello() {
  // write my code
  // write your logic
  console.log("Hello");
}

sayHello();
sayHello();

// function expression
const sayHelloAgain = function () {
  console.log("Hello Again");
};

sayHelloAgain();

// arrow function
const sayHelloFinal = () => {
  console.log("Hello for the last time");
};

sayHelloFinal();

const otherNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function printNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    let num = array[i]; // 10, 20, 30 ...

    if (num < 50) {
      console.log("This number is less than 50: " + num); // This number is less than 50: 10
    } else {
      console.log("This number is greater than 50: " + num);
    }
  }
}

//printNumbers(numbers);
printNumbers(otherNumbers);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function addNumbers(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    let num = array[i]; // 1, 2, 3, 4, 5

    result += num; // 1, 3, 6, 10, 15, ...
  }

  return result;
}

//console.log(addNumbers(numbers));

let myResult = addNumbers(numbers);
console.log(myResult);
