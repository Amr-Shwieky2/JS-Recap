// Prompt the user to enter their age
let age = prompt("Please enter your age");

// Check if the entered age is greater than or equal to 18
if (age >= 18) {
    console.log("You are in the eligible age range.");
} else {
    console.log("You are not in the eligible age range.");
}


function avg(score1, score2, score3){
    let numScore1 = parseFloat(score1);
    let numScore2 = parseFloat(score2);
    let numScore3 = parseFloat(score3);
    let average = (numScore1 + numScore2 + numScore3) / 3;

    let grade;
    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    console.log(grade);
}
let score1 = prompt("Enter score for subject 1:");
let score2 = prompt("Enter score for subject 2:");
let score3 = prompt("Enter score for subject 3:");