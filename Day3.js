const swap = (arr, i, j) => {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};

const reverseArrayFunctional = (arr1, l, h) => {
  if (l >= h) return;
  swap(arr1, l, h);
  reverseArrayFunctional(arr1, l + 1, h - 1);
};

let arr1 = [1, 2, 3, 4];
reverseArrayFunctional(arr1, 0, arr1.length - 1);
console.log(arr1);

//////////////////////////////////////////////////////////////////////
///////////////////////////////////////

const reverseArrayFunctionalBetter = (arr2, i, n) => {
  // if i crosses more than or equal to half of array then no need to check furthur
  if (i >= Math.floor(n / 2)) return;

  swap(arr2, i, n - i - 1);
  reverseArrayFunctionalBetter(arr2, i + 1, n);
};

let arr2 = [1, 2, 3, 4, 243, 465, 897];
reverseArrayFunctionalBetter(arr2, 0, arr2.length);
console.log(arr2);

////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////

const checkPallinDrome = (str, i, n) => {
  if (i >= Math.floor(n / 2)) return true;
  if (str[i] !== str[n - i - 1]) return false;
  return checkPallinDrome(str, i + 1, n);
};

let str = "MALAYLAM";
console.log(checkPallinDrome(str, 0, str.length));
