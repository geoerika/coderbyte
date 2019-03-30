function CheckNums(num1,num2) {

  if (num1 == num2) {
     return '-1';
  }
  else {
    return num1 < num2 ? true : false;
  }
}


console.log(CheckNums(8,8));

console.log(CheckNums(4,8));
console.log(CheckNums(8,7));
