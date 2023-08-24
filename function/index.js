function add(num1, num2) {
    return num1 + num2;
}


function multiplySum(sum, factor) {
    return sum * factor;
}


const num1 = 5;
const num2 = 7;
const sum = add(num1, num2);

const factor = 3;
const result = multiplySum(sum, factor);


// ex2
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


const n1 = 5;
const n2 = 8;
const n3 = 12;

console.log(`Fibonacci(${n1}) = ${fibonacci(n1)}`);
console.log(`Fibonacci(${n2}) = ${fibonacci(n2)}`);
console.log(`Fibonacci(${n3}) = ${fibonacci(n3)}`);


