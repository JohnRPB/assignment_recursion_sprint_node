const factorial = n => {
  let fact = n;
  for (let i = n - 1; i >= 1; i--) {
    fact *= i;
  }
  return fact;
};

//Testing

console.log("Factorial of 0: ", factorial(0));
console.log("Factoral of 1: ", factorial(1));
console.log("Factorail of 3: ", factorial(3));
console.log("Factorail of 10: ", factorial(10));
