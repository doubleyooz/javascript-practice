const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const printPrimes = (start, end) => {
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  const arr = [];
  for (; start <= end; start++) {
    if (isPrime(start)) arr.push(start);
  }
  console.log(arr);
};

printPrimes(1000, 100);
