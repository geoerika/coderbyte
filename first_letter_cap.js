// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
function LetterCapitalize(str) {
  let rep = "";

  for (i = 0; i < str.length; i++)  {
    let j = 0;

    if (i == 0) {
      j = i;
    }
    if (str.charAt(i) == " ") {
      j = i++;
    }

    rep = str.replace(str.charAt(j), str.charAt(j).toUpperCase());
    str = rep;
  }
  return str;

}

console.log(LetterCapitalize("hello world"));
console.log(LetterCapitalize("how are you today?"));
