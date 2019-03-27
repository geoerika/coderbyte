// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function LetterChanges(str) {

    let vowels = "aeiouy"
    let reg = /\W/;
    let reg1 = /\D/;
    for ( i = 0; i < str.length; i++) {
      if (str.charAt(i) !== ' ' && !str.charAt(i).match(reg) && str.charAt(i).match(reg1)) {
        if (str.charAt(i) === 'z') {
          let rep = str.replace(str.charAt(i), 'a');
          str = rep;
        } else {
           if (str.charAt(i) === 'Z') {
          let rep = str.replace(str.charAt(i), 'Z');
          str = rep;
        } else {
          let rep = str.replace(str.charAt(i), String.fromCharCode(str.charCodeAt(i) + 1));
          str = rep;

          if (vowels.indexOf(str.charAt(i)) !== -1) {
               let rep = str.replace(str.charAt(i), str.charAt(i).toUpperCase());
               str = rep;
           }
        }
      }
    }
  }
  // code goes here
  return str;

}

console.log(LetterChanges("I am normal zooo and also 45 emergency *&^%$#"));