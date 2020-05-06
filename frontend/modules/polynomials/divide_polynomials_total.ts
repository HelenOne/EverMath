// P9 DIV_PP_P
// P10 MOD_PP_P

import { Polynomial, Monomial } from './sum_polynomials';
import { checkDegree } from './check_degree';
import { divideRationals } from '../rational/divide_rationals';
import { subtractRationals } from '../rational/subtract_rationals';
import { subtractPolynomials } from './subtract_polynomials';
import { multiplyPolynomials } from './multiply_polynomials';
import { isEqualZero } from '../naturals/is_equal_zero';

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
  debugger;
  while (
    checkDegree(dividend) >= checkDegree(divisor) &&
    i <= dividend.length
  ) {
    const x = divideRationals(dividend[0], divisor[0]);
    result.push(x);
    // const dividendReversed = dividend.map((el) => ({ ...el })).reverse();
    const divisorReversed = divisor.map((el) => ({ ...el })).reverse();
    const toBeSubstructed = multiplyPolynomials([x], divisorReversed).reverse();
    while (toBeSubstructed.length < dividend.length) {
      toBeSubstructed.push({ numerator: '0', denominator: '0' });
    }
    dividend = subtractPolynomials(dividend, toBeSubstructed);
    while (dividend[0] && isEqualZero(dividend[0].numerator)) {
      dividend.shift();
    }
    i++;
  }
  return result.reverse();
};
