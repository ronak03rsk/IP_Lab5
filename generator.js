// Helper function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Generator function to yield prime numbers up to a limit
function* primeGenerator(limit) {
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num;
        }
    }
}

// Example usage:
const limit = 50; // Set the limit for generating prime numbers
const primes = primeGenerator(limit);

for (let prime of primes) {
    console.log(prime);  // Output will be prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
}
