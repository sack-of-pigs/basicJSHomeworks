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

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percent = typeof percent === 'string' ? Number(percent) : percent;
  const contribution = typeof contribution === 'string' ? Number(contribution) : contribution;
  const amount = typeof amount === 'string' ? Number(amount) : amount;
  const countMonths = typeof countMonths === 'string' ? Number(countMonths) : countMonths;

  if (typeof percent !== 'number' || typeof contribution !== 'number' || typeof amount !== 'number' || typeof countMonths !== 'number') {
    return false;
  }

  if (amount <= contribution) {
    return 0;
  }

  const monthlyRate = (percent / 100) / 12;
  const loanBody = amount - contribution;
  const monthlyPayment = loanBody * (monthlyRate + (monthlyRate / ((1 + monthlyRate) ** countMonths - 1)));
  const totalPayment = contribution + monthlyPayment * n;
  
  return Math.round(totalPayment * 100) / 100;
}
