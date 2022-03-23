const printSubseq1 = (arr, x, n, temp) => {
  if (x >= n) {
    console.log(temp);
    return;
  }
  printSubseq1(arr, x + 1, n, temp); //not take
  temp.push(arr[x]);
  printSubseq1(arr, x + 1, n, temp); //take
  temp.pop();
};

let arr1 = [3, 2, 1];
let t1 = [];
printSubseq1(arr1, 0, arr1.length, t1);

/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

const printSubseq2 = (arr, x, n, temp) => {
  if (x >= n) {
    console.log(temp);
    return;
  }
  temp.push(arr[x]);
  printSubseq2(arr, x + 1, n, temp); //take
  temp.pop();
  printSubseq2(arr, x + 1, n, temp); //not take
};

let arr2 = [3, 2, 1];
let t2 = [];
printSubseq2(arr2, 0, arr2.length, t2);
