function StandardDeviation(array){
  // Get the numbers

  // Set a variable to hold the variances
  var variance = 0;

  // Work out the Mean (the simple average of the numbers)
  var mean = array.reduce((a, b) => a + b, 0) / array.length;

  // Then for each number: subtract the Mean and square the result
  for (let i = 0; i < array.length; i++) {
    // Then work out the mean of those squared differences.
    variance += Math.pow( (array[i] - mean), 2);
  }

  // Take the square root of the variance
  var standardDeviation = Math.sqrt( variance / array.length );

  // Return the standard deviation
  return standardDeviation;
}

// Testing
console.log(StandardDeviation([1,2,3,5,6,7,8,9]))