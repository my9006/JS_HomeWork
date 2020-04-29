// 1. This is UNSHIFT!!!
let backer = (arr, index =0)=>{
  arr[index]=arr[index+1];
  ++index<arr.length?backer(arr, index):arr.pop();
  return arr;}

// 2. inverse key value in object
 let mel = ob => {
  let trans = {};
  for (let key in ob) {
    if (!trans[ob[key]]) {
      trans[ob[key]] = key;
    } else {
      if (!Array.isArray(trans[ob[key]])) {
        let temp = [];
        temp[0] = trans[ob[key]];
        trans[ob[key]] = temp;
      }
      trans[ob[key]].push(key);
    }
  }
  return trans;
};

// 3. Descending order of books with true reading Status
/*Sample object
let a = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 }
];*/
let bookinist =shelf=>shelf.filter(x=>x.readStatus===true).sort((a, b)=>b.percent-a.percent).map(x=>x.book);

// 4. Rotate array given times
let reverso = (ar=[], n=0) => {
  n > 0 ? ar.push(ar.shift()) : ar.unshift(ar.pop());
  n > 0 ? n-- : n++;
  if (n !== 0) {
    reverso(ar, n);
  }
  return ar;
};
/* 5. Make tree of parent/id 
let sample = [
  { parent: null, id: 0 },
  { parent: 0, id: 1 },
  { parent: 0, id: 2 },
  { parent: 1, id: 3 },
  { parent: 1, id: 4 },
  { parent: 2, id: 5 },
  { parent: 4, id: 6 },
  { parent: 6, id: 7 },
];
*/ 
let aygepan = (obAr, tree = {}) => {
  for (let i of obAr) {
    if (i.parent === null) {
      tree[i.id] = {};
      obAr.splice(obAr.indexOf(i), 1);
      break;
    }
  }
  for(let a of obAr){
    if(tree.hasOwnProperty(a.parent)){
      tree[a.parent][a.id]={};
      obAr.splice(obAr.indexOf(a), 1);
      aygepan(obAr, tree);
      aygepan(obAr,  tree[a.parent]);
    }
  }
  return tree;
};


// 6. All possible unique permutations of array with given length
let permutationsOf = (
  arr,
  combLen,
  index = 0,
  temp = [],
  i = 0,
  res = []
) => {
  if (index === combLen) {
    return res.push(temp.slice(0, combLen));
  }
  if (i < arr.length) {
    temp[index] = arr[i];
    permutationsOf(arr, combLen, index + 1, temp, i + 1, res);
    permutationsOf(arr, combLen, index, temp, i + 1, res);
  }
  return res;
};
// Implement map in constructor -> returns new object
let MyMap = function(res = {}) {
  this.res = res;
  this.mapi = function(fn) {
    for (let i in this) {
      if(i!=="res"&&i!=="mapi"){
      res[i] = fn(this[i]);}
      if(i==="mapi"){
        res[i]=this[i];
      }
  }
    return res;
  };
};