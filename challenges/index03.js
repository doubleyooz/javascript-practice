function StringChallenge2(str) {
  return (
    str.replace(/\s+/g, "") ===
    str.replace(/\s+/g, "").split("").reverse().join("")
  );
}

// keep this function call here
console.log(StringChallenge2(readline()));
