function CountThrees(number){
  // Get the number

  // Set a variable to save all the numbers that have 3
  var threes = [];

  // Go through all the numbers lower than the number and th number inclusive 
  for (let i = 0; i <= number; i++) {
    // Convert the number to Array
    var NumberinArray = i.toString().split("");

    // Check through the number splitted into an array
    for (let i2 = 0; i2 < NumberinArray.length; i2++) {
      // Check if it contains 3
      if (NumberinArray[i2] == 3) {
        // Add it to the variable saving numbers that have 3
        threes.push(i);
      }
    }
  }

  // Return the answer as an object
  return { 'count': threes.length, 'numbers' : threes };

}

// Testing
console.log(CountThrees(35));
