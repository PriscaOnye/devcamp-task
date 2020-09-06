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

// Testing
console.log(PrimeNumberChecker(10));