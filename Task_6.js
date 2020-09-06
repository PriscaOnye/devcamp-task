function GetThreeAddition(array, sum) {
  // Loop through to get the 1st value
  for (let i = 0; i < array.length; i++) {
    // Loop through to get the 2nd value
    for (let i2 = 0; i2 < array.length; i2++) {
      // Loop through to get the 3rd value
      for (let i3 = 0; i3 < array.length; i3++) {
        // set val1
        var val1 = array[i];

        // Check if it's a duplicate index
        if ( i != i2 ){
          // set val2
          var val2 = array[i2];
        }

        // Check if it's not a duplicate index
        if ( i != i2 && i != i3 && i2 != i3) {
          // set val3
          var val3 = array[i3];
        }

        // Check if addition of the 3 values add up to the sum
        if((val1 + val2 + val3) == sum){
          // Return the values
          return [val1, val2, val3];
        }
      }
    }
  }

  // After the loops are complete, Return -1
  return -1;
}

// Testing
console.log(GetThreeAddition([1,2,3,4,5,6], 6));
