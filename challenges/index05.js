function MathChallenge(num) {
  const arr = [0, 1];

  for (let i = 2; arr[arr.length - 1] <= num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  // code goes here
  return arr.includes(num) ? "yes" : "no";
}

// keep this function call here
console.log(MathChallenge(readline()));
