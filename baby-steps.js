// Second 2: BABY STEPS
// This program adds all command-line number arguments
// and prints the total sum to the console.
//
// process.argv stores command-line arguments.
// The first two values are:
// index 0 = node
// index 1 = file path
// So we start from index 2.
//
// Source:
// Node.js Process Documentation
// https://nodejs.org/api/process.html

let sum = 0;

// Loop through all number arguments starting from index 2
for (let i = 2; i < process.argv.length; i++) {
    // Convert string argument to number using Number()
    sum += Number(process.argv[i]);
}

// Print final sum
console.log(sum);