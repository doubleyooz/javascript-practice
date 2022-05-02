/*
 * Complete the 'getFinalOrder' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY amount
 */

function getFinalOrder(k, amount) {
  let result = [];
  let current = amount.map(() => {
    return 0;
  });
  amount = amount.map((p, index) => {
    return [p, index];
  });

  const filter = (person, index) => {
    if (person[0] <= k) {
      result.push(person[1] + 1);
    } else {
      current[index] += k;
      return [person[0] - k, index];
    }
  };
  while (Array.isArray(amount) && amount.length) {
    console.log(`[${amount}] - [${result}]`);

    amount = amount.filter(filter).map((e) => {
      return [e[0] - 2, e[1]];
    });
  }

  return result;
}

function main() {
  const k = 2;

  const amount = [10, 2, 8, 5, 4, 5, 3, 0, 1];

  const result = getFinalOrder(k, amount);
  console.log(result);
}
main();
