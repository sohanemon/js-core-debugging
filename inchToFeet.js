/* -------------------------------------------------------------------------- */
/*                   done: conversion between inch and feet                   */
/* -------------------------------------------------------------------------- */
/** We know that
 * 12 inch = 1 feet
 */
const inchToFeet = (num) => (num / 12).toFixed(2);
const feetToInch = (num) => num * 12;

let num = 12;
console.log(num, "inches =", inchToFeet(num), "feet");
console.log(num, "feet =", feetToInch(num), "inches");
