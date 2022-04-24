function ArrayChallenge(strArr) {
  const chewed = (str) => {
    let arr = [];
    str.split(",").forEach((item) => {
      arr.push(parseInt(item));
    });
    return arr;
  };

  const arr1 = chewed(strArr[0]);
  const arr2 = chewed(strArr[1]);

  return arr1.filter((value) => arr2.includes(value));
}

// keep this function call here
console.log(ArrayChallenge(readline()));
