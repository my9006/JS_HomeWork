// 1. Wall digits are odd
let checkOdd = n => {
  if (n > 0) return (n%10) % 2 === 0? false: checkOdd(Math.floor(n/10));
  return true;
};

//  2. Minimum positive element or -1
let minPos = (arr, mp = Infinity) => {
  mp = arr[0] >= 0 ? Math.min(arr[0], mp) : mp;
  if (arr.length > 0) {
    arr.shift();
    return minPos(arr, mp);
  }
  return mp === Infinity ? -1 : mp;
};
// 3. Fbnc array
let fibAr = n => {
  debugger;
  if (n <= 2) return n === 0 ? [] : n === 1 ? [1] : [1, 1];
  let ar = fibAr(n - 1);
  ar.push(ar[n - 2] + ar[n - 3]);
  return ar;
};
// 4. Flat array
let far = (ar, temp = []) => {
  for (let i = 0; i < ar.length; i++)
    Array.isArray(ar[i]) ? far(ar[i], temp) : temp.push(ar[i]);
  return temp;
};
// 5. Sumo
let mtr = n =>{
  let sum = 0;
  while(n){
    sum+=n%10;
    n=Math.floor(n/10)
  }
  return sum>9?mtr(sum):sum;
}