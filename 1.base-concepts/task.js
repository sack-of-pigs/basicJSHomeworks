"use strict"
function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return [];
  } else if (d === 0) {
    const root = -b / (2 * a);
    return [root];
  } else {
    const root1 = (-b + Math.sqrt(d)) / (2 * a);
    const root2 = (-b - Math.sqrt(d)) / (2 * a);
    return [root1, root2];
  }
}

//function calculateTotalMortgage(percent, contribution, amount, countMonths) {
//  let p = percent;
//  if (typeof percent === 'string') {
//    p = Number(percent);
//  }

//  let c = contribution;
//  if (typeof contribution === 'string') {
//    c = Number(contribution);
//  }

//  let a = amount;
//  if (typeof amount === 'string') {
//    a = Number(amount);
//  }

//  let n = countMonths;
//  if (typeof countMonths === 'string') {
//    n = Number(countMonths);
//  }
//  if (a <= c) {
//    return 0;
//  }
//  const monthlyRate = (p / 100) / 12;
//  const loanBody = a - c;
//  const monthlyPayment = loanBody * (monthlyRate + (monthlyRate / ((1 + monthlyRate) ** n - 1)));
//  const totalPayment = c + monthlyPayment * n;
  
//  return Math.round(totalPayment * 100) / 100;
//}
