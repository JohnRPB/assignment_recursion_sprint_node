const factorial = n => {
  //Base Case
  if (n === 0) return 0;
  if (n === 1) return 1;
  //recursive part
  return n * factorial(n - 1);
};

//Testing

console.log("Factorial of 0: ", factorial(0));
console.log("Factoral of 1: ", factorial(1));
console.log("Factorail of 3: ", factorial(3));
console.log("Factorail of 10: ", factorial(10));

//fact(3) => 3*fact(2)
//3*2*1 = 6
