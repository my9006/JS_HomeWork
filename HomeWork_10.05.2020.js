// Binary search of index by recursion
let binSearch = (ar, s, start = 0, end = ar.length) => {
  let i = Math.floor((end + start) / 2);
  if (s !== ar[i]) {
    return s > ar[i]
      ? binSearch(ar, s, (start = i), end)
      : binSearch(ar, s, start, (end = i));
  }
  return i;
};

// Same solution with loop
let binSearch = (ar, s, start = 0, end = ar.length) => {
  for (let a = 0; a < Math.log2(ar.length); a++) {
    let i = Math.floor((start + end) / 2);
//     start+1 and end-1 is done for exclude the indexes, that are already checked
    if (s > ar[i]) start = i+1;
    else if (s < ar[i]) end = i-1;
    else return i;
  }
//   exit code should be -1 on fail
  return -1;
};

let ch = [8, 10, 12, 14, 16, 18, 20];

console.log(binSearch(ch, 20));

// Tree builder
let treeNodesChild = [
  {id: 1, children:[3,4]},
  {id: 4, children:[6]},
  {id: "root", children:[1,2]},
  {id: 2, children:[5]},
  {id: 3, children:[]},
  {id: 5, children:[]},
  {id: 6, children:[]}, 
];

let tree = (arr, id = "root", tempOb = {})=>{
  let branches = arr.reduce((acc, x)=> acc = x.id===id?x:acc).children;
  if(branches.length===0) return;
  branches.forEach(element => {
    tempOb[element] = tree(arr, element)||{};
  });  
  return tempOb
}
console.log(tree(treeNodesChild));

