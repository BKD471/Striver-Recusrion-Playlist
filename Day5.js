const subseqWithKSum = (arr, index, n, temp, X, sum) => {
  if (index >= n) {
    //console.log(temp);
    if (sum === X) console.log(temp);
    return;
  }

  sum += arr[index];
  temp.push(arr[index]);
  subseqWithKSum(arr, index + 1, n, temp, X, sum);
  sum -= arr[index];
  temp.pop();
  subseqWithKSum(arr, index + 1, n, temp, X, sum);
};

let arr = [17, 18, 6, 11, 2, 4];
let key = 6;
//subseqWithKSum(arr, 0, arr.length, [], key, 0);

/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
// This code checks whether there is a single subseq with k sum
const subseqWithKsumPresent = (arr, index, n, temp, X, sum) => {
  if (index >= n) {
    if (sum === X) {
      console.log(temp);
      return true;
    }
    return false;
  }

  temp.push(arr[index]);
  sum += arr[index];
  if (subseqWithKsumPresent(arr, index + 1, n, temp, X, sum) === true)
    return true;
  temp.pop();
  sum -= arr[index];
  if (subseqWithKsumPresent(arr, index + 1, n, temp, X, sum) === true)
    return true;

  return false;
};

let array = [1, 2, 3, 4, 5, 9];
let keys = 14;
//console.log(subseqWithKsumPresent(array, 0, array.length, [], keys, 0));

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//This function counts no of subsequence with sum=K
const subseqWithKsumCount = (arr, index, n, temp, X, sum) => {
  if (index >= n) {
    if (sum === X) {
      console.log(temp);
      return 1;
    }
    return 0;
  }

  temp.push(arr[index]);
  sum += arr[index];
  const l = subseqWithKsumCount(arr, index + 1, n, temp, X, sum);
  temp.pop();
  sum -= arr[index];
  const r = subseqWithKsumCount(arr, index + 1, n, temp, X, sum);

  return l + r;
};

let arrays = [1, 2, 3, 4, 5, 9];
let keyss = 14;
console.log(subseqWithKsumCount(arrays, 0, arrays.length, [], keyss, 0));
