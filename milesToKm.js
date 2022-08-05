/* -------------------------------------------------------------------------- */
/*                         todo: mile to km conversion                        */
/* -------------------------------------------------------------------------- */

/**
 * we know 1 mile = 1.609 km
 * 1 km = 0.62 mile
 * lets start the program
 */

const mile2km = (mile) => {
  return (mile * 1.609).toFixed(3);
};
const km2mile = (km) => {
  return (km * 0.62).toFixed(3);
};

const myWay = 10;
console.log(mile2km(myWay));
console.log(km2mile(myWay));
