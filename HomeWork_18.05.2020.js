// Is Arrat unique
let isUnique = arr=> arr.length===new Set(arr).size;

// Sum of array elements with even sqrt
let sqrtEven = arr =>arr.reduce((acc, x)=> Math.sqrt(x)%2===0?acc+=x:acc, 0);

// Is string palindrome
let isPalindrome = str=> str===str.split('').reverse('').join('');

// Find all Anagrams
let anagram =(str, arr)=> arr.filter(x=> str.split('').sort().join('')===x.split('').sort().join(''));