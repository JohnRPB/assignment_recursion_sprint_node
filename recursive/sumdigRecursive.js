//103
//403
//1089 1089/1000 ->1 1089%1000 -> 89
//1189 --> 1189/1000 --> 1 189/100 --> 1 89/10 --> 8

//1742 --> 1742/1000 --> 1 | 1742%1000 --> 742 | 742/100 --> 7 | 742%100 --> 42 | 42/10 --> 4 | 42%10 --> 2 | 2/1 --> 2

const sumDigRecursive = (num, sum = 0) => {
  let numLength = String(num).length;
  let divisor = Math.pow(10, numLength - 1);

  //base case
  if (num < 10) {
    return num + sum;
  }

  return sumDigRecursive(num % divisor, parseInt(num/divisor) + sum);
};

//1564 --> (564, 1) --> ()

//Testing
console.log("1742: ", sumDigRecursive(1742));
console.log("1042: ", sumDigRecursive(1042));
console.log("1004: ", sumDigRecursive(1004));
console.log("1: ", sumDigRecursive(1));


//bubble the base case back up the stack until the initial call
