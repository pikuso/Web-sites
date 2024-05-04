function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+-=";
    
    let allowChars = "";
    let password = "";
    
    allowChars+= includeLowerCase ? lowercaseChars : "";
    allowChars += includeUpperCase ? uppercaseChars : "";
    allowChars += includeNumbers ? numberChars : "";
    allowChars += includeSymbols ? symbolsChars : "";
    
    if(allowChars.length === 0){
    return `(At least 1 set of characher must be selected)`
    }
    
    for(let i = 0; i < length; i++){
      const randomIndex = Math.floor( Math.random() * allowChars.length);
      password += allowChars[randomIndex];
    }
      return password;
    }
    
    const passwordLength = 12;
    const includeLowerCase = false;
    const includeUpperCase = false;
    const includeNumbers = false;
    const includeSymbols = false;
    
    const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
    console.log(`Generated password: ${password}`);