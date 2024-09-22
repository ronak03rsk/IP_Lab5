// Custom iterator function for squaring numbers
const squareIterator = (numbersArray) => {
    return {
      // Defining the Symbol.iterator method
      [Symbol.iterator]() {
        let index = 0;
  
        return {
          next() {
            if (index < numbersArray.length) {
              // Return the square of the current number
              const result = { value: numbersArray[index] ** 2, done: false };
              index++; // Move to the next number
              return result;
            } else {
              // If done, return the completion state
              return { value: undefined, done: true };
            }
          }
        };
      }
    };
  };
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = squareIterator(numbers);
  
  for (let square of squaredNumbers) {
    console.log(square); // Output: 1, 4, 9, 16, 25
  }
  