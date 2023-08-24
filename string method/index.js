// ex1
const name = prompt("Please enter your name:");
const age = parseInt(prompt("Please enter your age:"));
const favoriteNumber = parseFloat(prompt("Please enter your favorite number:"));


const message = `Hello, ${name}! You are ${age} years old and your favorite number is ${favoriteNumber.toFixed(2)}.`;


const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
const formattedMessage = message.toUpperCase();


console.log(formattedMessage);



