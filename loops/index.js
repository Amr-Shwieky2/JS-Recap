function sumArrayElements(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

function findMissingNumber(arr) {
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let i = 0; i < n; i++) {
        actualSum += arr[i];
    }

    const missingNumber = expectedSum - actualSum;
    return missingNumber;
}