// ====================
// Part 1: JavaScript Basics
// ====================

// Variables and conditionals
let userName = "Alice";  // pretend we captured user input
let userAge = 20;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// ====================
// Part 2: Functions
// ====================

// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total cost:", calculateTotal(15, 3));

// Function 2: Format a greeting message
function greetUser(name) {
  return "Hello, " + name + "! Welcome to the site.";
}
console.log(greetUser("Bob"));

// ====================
// Part 3: Loops
// ====================

// Loop 1: For loop (countdown)
for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i);
}

// Loop 2: While loop (sum of numbers)
let sum = 0;
let num = 1;
while (num <= 5) {
  sum += num;
  num++;
}
console.log("Sum of numbers 1–5:", sum);

// ====================
// Part 4: DOM Manipulation
// ====================

// Select elements
const greetingEl = document.getElementById("greeting");
const toggleBtn = document.getElementById("toggleBtn");
const colorBtn = document.getElementById("colorBtn");
const addItemBtn = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");

// Interaction 1: Toggle text
toggleBtn.addEventListener("click", function () {
  if (greetingEl.innerText === "Hello, welcome to the assignment!") {
    greetingEl.innerText = "You toggled the greeting!";
  } else {
    greetingEl.innerText = "Hello, welcome to the assignment!";
  }
});

// Interaction 2: Toggle CSS class (color)
colorBtn.addEventListener("click", function () {
  greetingEl.classList.toggle("active");
});

// Interaction 3: Add new item to the list
addItemBtn.addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New list item";
  itemList.appendChild(newItem);
});
