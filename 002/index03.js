const rate = (number) => {
  switch (parseInt(number)) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return "D";
    case 5:
    case 6:
      return "C";
    case 7:
    case 8:
      return "B";
    case 9:
    case 10:
      return "A";
    default:
      return "error";
  }
};
const concept = (arr) => {
  return arr.map((item, i) => {
    return rate(item);
  });
};

let grades = [5.4, 3.6, 'd', 8.6, 10.0, -52, 4.9, 0.5, 6.7, 8.8, 2.1];

console.log(concept(grades));
