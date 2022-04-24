const pa = (obj) => {
  let { n, a1, r } = obj;
  const result = [];
  while (n >= 1) {
    result.push(a1 + (n - 1) * r);
    n--;
  }
  console.log(result);
  console.log(result.reduce((partialSum, a) => partialSum + a, 0));
  return result;
};

const pg = (obj) => {
  let { n, a1, r } = obj;
  const result = [];
  while (n >= 1) {
    result.push(a1 * Math.pow(r, n - 1));
    n--;
  }
  console.log(result);
  console.log(result.reduce((partialSum, a) => partialSum + a, 0));
  return result;
};

let obj = {
  id: 2,
  name: "pg",
  n: 10,
  a1: 5,
  r: 3,
};

pg(obj);
pa(obj);
