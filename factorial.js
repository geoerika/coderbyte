const factorial = (n) => {
  if (n >= 0) {
    if (n == 0) return 1
    else return n * factorial(n - 1)
  } else {
    console.log('Wrong argument!')
  }
}

console.log(factorial(1));

console.log(factorial(2));
console.log(factorial(3));

console.log(factorial(-3));


