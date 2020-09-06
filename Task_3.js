function PrimeNumberChecker(number){
  // Get the number

  // Check if the number is a positive integer and not 1
  if (number > 0 && Number.isInteger(number) && number !== 1) {
    // Loop through all integers lower than the number
    for (let i = 2; i < number; i++) {
      // If an integer lower than the number except 1 can divide it and get a whole number, then it is not a prime number  
      if (Number.isInteger( number / i )){
        // Return false if not a prime number
        return false;
      }
    }
    // Return true if a prime number after the loop can't get any number dividing the number.
    return true;
  } else {
    return false;
  }
}

function PrimeNumbers(array){
  // Get all numbers

  // Create a variable to hold prime numbers
  var primeNumbersHolder = [];

  for (let i = 0; i < array.length; i++) {
    // Check each for positive integer
    if(array[i] > 0){
      // Check if number is a prime number using the PrimeNumberChecker Function
      if(PrimeNumberChecker(array[i])){
        // If a prime number, add the number to the variable holding prime numbers
        primeNumbersHolder.push(array[i]);
      }
    }
  }

  // Return the variable holding prime numbers
  return primeNumbersHolder;
}

// Testing
var array = [1,2,3,4,5,6,7,8,9,10,11];
console.log(PrimeNumbers(array));