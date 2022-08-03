/* -------------------------------------------------------------------------- */
/*                         todo: finding sum of array                         */
/* -------------------------------------------------------------------------- */

const getOdds = (numbers) => {
  var temp = []; /* fix: this code has some problem */
  var i = numbers.length;
  while (numbers.length > 0) {
    numbers[i] % 2 === 0 && temp.push(numbers[i]);
    i--;
  }
  return temp;
};

const numbers = [23, 42, 52, 23, 52];
console.log(getOdds(numbers));
