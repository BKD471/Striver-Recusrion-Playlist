const sumOfNParam = (n, sum) => {
  if (n <= 0) {
    console.log(sum);
    return;
  }
  sumOfNParam(n - 1, sum + n);
};
sumOfNParam(100, 0);

const sumOfNFunctional = (n) => {
  if (n <= 0) {
    return 0;
  }
  return n + sumOfNFunctional(n - 1);
};
console.log(sumOfNFunctional(100));

const factOfNFunctional = (n) => {
  if (n <= 0) return 1;
  return n * factOfNFunctional(n - 1);
};
console.log(factOfNFunctional(9));

const factOfNParam = (n, p) => {
  if (n <= 0) {
    console.log(p);
    return;
  }
  factOfNParam(n - 1, p * n);
};
factOfNParam(19, 1);
