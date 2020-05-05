// P10 MOD_PP_P

import { Polynomial } from './sum_polynomials';
import { dividePolynomialsTotal } from './divide_polynomials_total';
import { multiplyPolynomials } from './multiply_polynomials';
import { subtractPolynomials } from './subtract_polynomials';

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
  let divideTotal = dividePolynomialsTotal(polynomial1, polynomial2);
  let resultSupposed = multiplyPolynomials(divideTotal, polynomial2);
  return subtractPolynomials(polynomial2, resultSupposed);
};
