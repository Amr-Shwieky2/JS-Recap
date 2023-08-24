// Main menu function
function mainMenu() {
    console.log("Menu:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");

    let choice = prompt("Enter your choice:");
    choice = parseInt(choice); // Coerce input to a number

    switch (choice) {
        case 1:
            performOperation("add");
            break;
        case 2:
            performOperation("subtract");
            break;
        case 3:
            performOperation("multiply");
            break;
        case 4:
            performOperation("divide");
            break;
        case 5:
            console.log("Exiting...");
            return; // Exit the main menu loop
        default:
            console.log("Invalid choice. Please select a valid option.");
            mainMenu(); // Return to the main menu
            break;
    }
}

// Perform arithmetic operation based on user choice
function performOperation(operation) {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Division by zero is not allowed.");
                return; // Return to the main menu
            }
            break;
    }

    console.log(`Result of ${operation}: ${result}`);
    mainMenu(); // Return to the main menu
}

// Start the main menu
mainMenu();
