function StringChallenge(sen) {
  const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ");

  // code goes here
  return arr.sort(function (a, b) {
    return b.length - a.length;
  })[0];
}

// keep this function call here
console.log(StringChallenge(readline()));
