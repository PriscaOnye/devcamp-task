function PasswordValidator(string){
  // Get the string

  // Check if the string matches any of the pattern
  if( /^[a-zA-Z]+$/.test(string) ){
    // Return the number of the pattern match
    return 0;

    // Check if the string matches any of the pattern
  } else if ( /^[0-9]+$/.test(string) ){
    // Return the number of the pattern match
    return 1;

    // Check if the string matches any of the pattern
  } else if ( /^[a-zA-Z0-9]+$/.test(string) ){
    // Return the number of the pattern match
    return 2;

    // Check if the string matches any of the pattern
  } else if ( /^[a-zA-Z0-9\W]+$/.test(string) ){
    // Return the number of the pattern match
    return 3;

    // If match none
  } else {
    // return nothing 
    return '';

  }
}

// Testing
console.log(PasswordValidator('%fkmkf'))