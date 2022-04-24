function ArrayChallenge(arr) {
  let highest = 0,
    mode = -1;
  arr.forEach((item, index) => {
    let temp = arr.filter((value) => value === item).length;
    if (temp > highest) {
      highest = temp;
      mode = index;
    }
  });

  // code goes here
  return highest === 1 ? -1 : arr[mode];
}
// keep this function call here
console.log(ArrayChallenge(readline()));
