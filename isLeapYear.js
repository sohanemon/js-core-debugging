/* -------------------------------------------------------------------------- */
/*                  DONE: finding a year is leap year or not                  */
/* -------------------------------------------------------------------------- */

const IsLeapYear = (year) => {
  return year % 4 === 0 ? "leap year" : " not leap year";
};

console.log(IsLeapYear(2022));
