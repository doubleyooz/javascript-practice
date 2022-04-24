function SearchingChallenge(str) {
  let brackets = ["[[]", "]", "[(]", "[)]"];
  let matches = [];
  for (let i = 0; i < brackets.length; i++) {
    let regex = new RegExp(brackets[i], "g");
    matches.push((str.match(regex) || []).length);
  }
  if (matches[0] === matches[1] && matches[2] === matches[3])
    return `1 ${matches[0] + matches[3]}`;
  return 0;
}

// keep this function call here
console.log(SearchingChallenge(readline()));
