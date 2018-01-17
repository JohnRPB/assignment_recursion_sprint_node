
const sumDigIterative = (num) => {

  let sum = 0;
  while (num >= 10) {
    let numLength = String(num).length;
    let divisor = Math.pow(10, numLength - 1);

    sum += parseInt(num/divisor);
    num = num % divisor;
  }
  return sum + num;
}

//Testing
console.log("1742: ", sumDigIterative(1742));
console.log("1042: ", sumDigIterative(1042));
console.log("1004: ", sumDigIterative(1004));
console.log("1: ", sumDigIterative(1));
