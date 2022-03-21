const printNamesNtimes = (n, name) => {
  if (n <= 0) return;
  console.log(name, n);
  printNamesNtimes(n - 1, name);
};
//printNamesNtimes(9, "Phoenix47");

const printFrom1ToN = (n) => {
  if (n <= 0) return;
  printFrom1ToN(n - 1);
  console.log(n);
};
//printFrom1ToN(9);

const printFromNTo1 = (n) => {
  if (n <= 0) return;
  console.log(n);
  printFromNTo1(n - 1);
};
//printFromNTo1(9);

const printFrom1ToNNew = (n, i) => {
  if (n <= 0) return;
  console.log(n);
  printFrom1ToNNew(n - 1, i);
};

//printFrom1ToNNew(9, 1);

const from1ToN = (i, n) => {
  if (n <= 0) return;
  from1ToN(i, n - 1);
  console.log(n);
};
//from1ToN(1, 9);

const printFromNto1 = (n, i) => {
  if (n < i) return;
  printFromNto1(n, i + 1);
  console.log(i);
};

printFromNto1(9, 1);
