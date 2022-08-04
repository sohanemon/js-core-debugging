/* -------------------------------------------------------------------------- */
/*                     done: finding factorial of a number                    */
/* -------------------------------------------------------------------------- */

const factorial = (number) => {
  let fact = 1;
  while (number > 0) {
    fact *= number--; /* note: first complete the total operation, reduce -- */
  }
  return fact;
};
console.log("Factorial", factorial(5));
console.log("Factorial" + factorial(5)); //note: it actually concat
