// Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.


function SimpleSymbols(str) {
  let bool = true;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).match(/[a-zA-Z]/)) {
            if ( i === 0 || str.charAt(i - 1) !== '+' || str.charAt(i + 1) !== '+') {
              bool = false;
            }
        }
    }
  return bool;

}

console.log(SimpleSymbols("b+=3+g+"))
console.log(SimpleSymbols("+b+=3+g+"))
console.log(SimpleSymbols("b+=3g+"))
console.log(SimpleSymbols("+b+=3+g"))

