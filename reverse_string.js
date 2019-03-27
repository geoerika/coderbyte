function FirstReverse(str) {

  let strArray = str.split("").reverse().join("");
  return strArray;

}

console.log(FirstReverse('Hello! May name is Harry Potter!'));