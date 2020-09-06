function CheckIfPalindrome(string){
  // Get the string

  //Split the string and convert it into an array
  var splittedString = string.split("");

  // Reverse the array
  var reversedStringArray = splittedString.reverse();

  // Join the array into a string
  var joinedReversedString = reversedStringArray.join(""); 

  // Check if the reversedString is the same an the given string
  if ( joinedReversedString == string ){
    // Return Yes if true 
    return 'Yes';
  } else {
    // Return No if false 
    return 'No';
  }

}

// Testing
console.log(CheckIfPalindrome('madam'));