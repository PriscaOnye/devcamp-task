function OddAndEvenCalculator(array){
  // Get all the numbers

  // Create variable to hold odd numbers sum 
  var oddNumbersSum = 0;
  // Create variable to hold even numbers sum 
  var evenNumbersSum = 0;

  // Go through all the numbers
  for (let iteratorChecker = 0; iteratorChecker < array.length; iteratorChecker++ ) {
    // Check if the number is a positive integer  
    if ( array[iteratorChecker] > 0 && Number.isInteger(array[iteratorChecker]) ) {
      // For each number I will check if it as an odd number or a even number.
      if ( Number.isInteger( array[iteratorChecker] / 2 ) ) {
        
        // If it's an even number I will add it to the even numbers variable 
        evenNumbersSum += array[iteratorChecker];
      } else {

        // If it's an odd number I will add it to the odd numbers variable 
        oddNumbersSum += array[iteratorChecker];
      }
    }
  }

  // After I have gone through all this numbers I will return the variable holding odd numbers and even number sum
  return [evenNumbersSum, oddNumbersSum];
}

// Testing
var arrayOfPositiveIntegers = [4,5,6,7,-2,4,6,7,4,6,4];
console.log( OddAndEvenCalculator( arrayOfPositiveIntegers ) );