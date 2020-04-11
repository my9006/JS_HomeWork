// 1. Prime number finder
let primeFInder = n => {
  if (n === 1 || n === 2) return n === 1 ? "no" : "yes";
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return "no";
    }
  }
  return "yes";
};
// 2. Print n-th Fibonacci number
let nthFibonacci = n => {
  if (n < 2) return n;
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
};
// 3. Print Fibonacci serise till n-th (Solution is using the method above)
let printFibonacciSeries = n => {
  let res = "0";
  let count = 1;
  while (nthFibonacci(count) < n) {
    res += `, ${nthFibonacci(count)}`;
    count++;
  }
  return res;
};
// 4. Calculate Quot/Reminder of Prod/Sum
let quotRemind = i => {
  let sum = 0, product = 1;
  if (i === 0) return "Cannot calculate";
  while (i) {
    sum += i % 10;
    product *= i % 10;
    i = Math.floor(i / 10);
  }
  return product % sum === 0? `Quotient is ${product / sum}` : `Remainder is ${product % sum}`;
};

// 9. Generate array of from a to b equal n elements
let equivalentPartition = (a, b, num) =>{
  let resAr = [a];
  for (let i = 1; i<num; i++){
    resAr.push(resAr[i-1]+(b-a)/(num-1));
  }
  return resAr;
}
// 10. Return the index of second max number
let secondMax = inArr => {
  inArr[inArr.indexOf(Math.max(...inArr))] = -Infinity;
  return inArr.indexOf(Math.max(...inArr));
};

// 11. Decorate array, add padding based on rep
let decoratingArray = (inArr, pad, rep) => {
  if (pad > inArr.length) return "Invalid padding amount";
  let start = [];
  let end = [];
  for (let i = 0; i < rep; i++) {
    for (let j = 0; j < pad; j++) {
      start.push(inArr[j]);
      end.unshift(inArr[inArr.length - 1 - j]);
    }
  }
  return start.concat(inArr, end);
};