/* ----------- note: uses of different array functions with example --------- */

/* -------------------------------------------------------------------------- */
/*                         done: finding sum of array                       */
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

const summation = (numbers) => {
  return numbers.reduce((p, c, i, a) => p + c);
  /* --------------- note: in reduce there can be four parameter -------------- */
  /* 
    * previous value
    * current value
    * index number
    * the first array
  In the example we used two parameter. p and c
  for the first time when loop started p = first value of array
  and c = second value of array and then the function may return
  a value further p = returned value and c = third value of array
  and so on.  
  */
};

console.log(summation(getOddsByFilter(numbers)));
