function isPalindrome(string) {
  // Start coding here
  let splitString = string.split("")
  let revertCharactor = splitString.reverse()
  let reverseString = revertCharactor.join("")
  if(string == reverseString){
    return true
  }else {
    return false
  }
  
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false