const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

const max = numbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
});

console.log(max); // Output: 25
