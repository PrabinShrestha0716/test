// Program to print messages in JavaScript

// Declare variables
let name = "Prabin";
let role = "Software Engineer";
let year = 2026;

// Print basic information
console.log("Hello!");
console.log("My name is " + name);
console.log("My role is " + role);
console.log("Current year is " + year);

// Function to print a welcome message
function printWelcome(user) {
    console.log("Welcome, " + user + "!");
}

// Call the function
printWelcome(name);

// Loop to print multiple messages
for (let i = 1; i <= 5; i++) {
    console.log("This is message number " + i);
}

// Conditional example
if (role === "Software Engineer") {
    console.log("You are building cool things with code.");
} else {
    console.log("You are exploring something new.");
}

// Final message
console.log("Program execution completed.");
