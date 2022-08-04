/* ----------- note: uses of different array functions with example --------- */

/* -------------------------------------------------------------------------- */
/*                         todo: finding sum of array                       */
/* -------------------------------------------------------------------------- */

/* ------------------------------- use of map ------------------------------- */
const getOddsByMap = (numbers) => {
  return numbers.map((e) => {
    return e % 2 === 0 && e;
  });
};
/* -------------------------------------------------------------------------- */
/* ------------------------------ use of filter ----------------------------- */
const getOddsByFilter = (numbers) => {
  return numbers.filter((e) => e % 2 === 0 && e);
};
/* -------------------------------------------------------------------------- */
/* ----------------------------- use of foreach ----------------------------- */
const getOddsByForEach = (numbers) => {
  let temp = [];
  numbers.forEach((e) => {
    e % 2 === 0 && temp.push(e);
  });
  return temp;
};

const numbers = [23, 42, 52, 23, 52];
console.log(getOddsByMap(numbers));
console.log(getOddsByFilter(numbers));
console.log(getOddsByForEach(numbers));
