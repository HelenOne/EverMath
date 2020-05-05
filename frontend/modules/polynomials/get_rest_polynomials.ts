// P10 MOD_PP_P

import { Polynomial } from './sum_polynomials';
import { dividePolynomialsTotal } from './divide_polynomials_total';
import { multiplyPolynomials } from './multiply_polynomials';
import { subtractPolynomials } from './subtract_polynomials';
import { checkDegree } from './check_degree';

export const getRestPolynomials = (
  polynomial1: Polynomial,
  polynomial2: Polynomial
) => {
  if (!polynomial1 || !polynomial2) {
    return [
      {
        numerator: '',
        denominator: '',
      },
    ];
  }
  if (
    polynomial1.some((el) => {
      return !el.numerator || !el.denominator;
    })
  ) {
    return [
      {
        numerator: '',
        denominator: '',
      },
    ];
  }
  if (
    polynomial2.some((el) => {
      return !el.numerator || !el.denominator;
    })
  ) {
    return [
      {
        numerator: '',
        denominator: '',
      },
    ];
  }
  if (
    polynomial1.some((el) => {
      return el.numerator === '' || el.denominator === '';
    })
  ) {
    return [
      {
        numerator: '',
        denominator: '',
      },
    ];
  }
  if (
    polynomial2.some((el) => {
      return el.numerator === '' || el.denominator === '';
    })
  ) {
    return [
      {
        numerator: '',
        denominator: '',
      },
    ];
  }
  if (
    polynomial1.every((el) => {
      return el.numerator === '' || el.denominator === '';
    })
  ) {
    return [
      {
        numerator: '',
        denominator: '',
      },
    ];
  }
  if (
    polynomial2.every((el) => {
      return el.numerator === '' || el.denominator === '';
    })
  ) {
    return [
      {
        numerator: '',
        denominator: '',
      },
    ];
  }
  let dividend: Polynomial;
  let divisor: Polynomial;
  if (checkDegree(polynomial1) >= checkDegree(polynomial2)) {
    dividend = polynomial1.map((el) => ({ ...el })).reverse();
    divisor = polynomial2.map((el) => ({ ...el })).reverse();
  } else {
    dividend = polynomial2.map((el) => ({ ...el })).reverse();
    divisor = polynomial1.map((el) => ({ ...el })).reverse();
  }
  let divideTotal = dividePolynomialsTotal(dividend, divisor);
  let resultSupposed = multiplyPolynomials(divideTotal, divisor);
  return subtractPolynomials(dividend, resultSupposed);
};
