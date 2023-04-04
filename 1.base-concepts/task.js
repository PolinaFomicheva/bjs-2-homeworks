// ЗАДАЧА 1 //
"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let disc = Math.pow(b, 2)-4*a*c;

  if (disc === 0){
    let solution = -b/(2*a);
    arr.push(solution);
  }
  else if (disc > 0){
    let firstSolution = (-b + Math.sqrt(disc) )/(2*a);
    let secondSolution = (-b - Math.sqrt(disc) )/(2*a);
    arr.push(firstSolution, secondSolution);
  }
  return arr;
}


// ЗАДАЧА 2//

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
    return false;
  }

  percent = percent/100/12;

  let credit = amount - contribution;
  let monthsPayment = credit * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let generalPayment = monthsPayment * countMonths;

  generalPayment = Number(generalPayment.toFixed(2));

  return generalPayment;
}


