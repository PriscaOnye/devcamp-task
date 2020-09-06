function ReplaceSpaces(string){
  // Get the string

  // Replace the spaces in the string and save in a variable
  var newString = string.split(' ').join('%20'); 

  // Return the string
  return newString;
}

// Testing
console.log(ReplaceSpaces('Mr Jojn Smith'))