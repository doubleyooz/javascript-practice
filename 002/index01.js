const numbers = [1, 60, 232, 7, 25, 76, 29, 74, 92];

const result = numbers.filter((number) => number > 60 && number < 300);
const sum = result.reduce((partialSum, a) => partialSum + a, 0);

let str = `A lista dos valores maiores que 60 é: [${result}]. A soma dos elementos da lista é: ${sum}`
console.log(str);

