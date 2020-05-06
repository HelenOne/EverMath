// P10 MOD_PP_P
// Реализовано в divide_polynomials_total_rest.ts

import { Polynomial } from './sum_polynomials';
import { subtractPolynomials } from './subtract_polynomials';
import { checkDegree } from './check_degree';
import { multiplyPolynomials } from './multiply_polynomials';
import { dividePolynomialsTotal } from './divide_polynomials_total';

export const modPolynomials = (
  polynomial1: Polynomial,
  polynomial2: Polynomial
) => {
  let dividend: Polynomial;
  let divisor: Polynomial;
  if (checkDegree(polynomial1) >= checkDegree(polynomial2)) {
    dividend = polynomial1.map((el) => ({ ...el })).reverse();
    divisor = polynomial2.map((el) => ({ ...el })).reverse();
  } else {
    dividend = polynomial2.map((el) => ({ ...el })).reverse();
    divisor = polynomial1.map((el) => ({ ...el })).reverse();
  }
  // return subtractPolynomials(
  //   dividend,
  //   multiplyPolynomials(
  //     divisor,
  //     dividePolynomialsTotal(dividend, divisor).total
  //   )
  // );
  return dividePolynomialsTotal(dividend, divisor);
};
