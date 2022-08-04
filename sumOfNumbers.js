/* -------------------------------------------------------------------------- */
/*                    todo: summation of a series of number                   */
/* -------------------------------------------------------------------------- */

/* we are about to use forEach to make this sum work */
const summation = (num) => {
  let sum = 0;
  [...Array(num)].forEach((e, i) => (sum += i));
  return sum;
};
const num = 100; /* change the values here */
console.log("summation of all numbers from 1 to", num, "is", summation(num));
