// P9 DIV_PP_P
// P10 MOD_PP_P

import { Polynomial, Monomial } from './sum_polynomials';
import { checkDegree } from './check_degree';
import { divideRationals } from '../rational/divide_rationals';
import { subtractRationals } from '../rational/subtract_rationals';
import { subtractPolynomials } from './subtract_polynomials';
import { multiplyPolynomials } from './multiply_polynomials';

export const dividePolynomialsTotal = (
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
  debugger;
  let dividend: Polynomial;
  let divisor: Polynomial;
  if (checkDegree(polynomial1) >= checkDegree(polynomial2)) {
    dividend = polynomial1.map((el) => ({ ...el })).reverse();
    divisor = polynomial2.map((el) => ({ ...el })).reverse();
  } else {
    dividend = polynomial2.map((el) => ({ ...el })).reverse();
    divisor = polynomial1.map((el) => ({ ...el })).reverse();
  }
  let result: Polynomial = [];
  let buffer: Monomial;
  let i = 0;
  while (checkDegree(dividend) >= checkDegree(divisor)) {
    result.push(divideRationals(dividend[i], divisor[i]));
    dividend = subtractPolynomials(
      dividend,
      multiplyPolynomials([result[i]], divisor)
    );
    debugger;
    i++;
  }
  return result.reverse();
};
