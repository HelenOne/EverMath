// P8 MUL_PP_P

import { Polynomial } from './sum_polynomials';
import { sumRationals } from '../rational/sum_rationals';
import { multiplyRationals } from '../rational/multiply_rationals';
import { checkDegree } from './check_degree';

export const multiplyPolynomials = (
  polynomial1: Polynomial,
  polynomial2: Polynomial
) => {
  let result: Polynomial = [];
  let resultDegree = checkDegree(polynomial1) + checkDegree(polynomial2);
  for (let i = 0; i < resultDegree + 1; i++) {
    result.push({
      numerator: '0',
      denominator: '0',
    });
  }
  for (let i = 0; i < polynomial1.length; i++) {
    for (let j = 0; j < polynomial2.length; j++) {
      const newValue = sumRationals(
        result[i + j],
        multiplyRationals(polynomial1[i], polynomial2[j])
      );
      result[i + j] = newValue;
    }
  }

  return result;
};

// (3x^3 + 5x^2 + 7x + 4) * (6x^2 + 10x + 3)
// = (18x^5 + 30x^4 + 9x^3 + 30x^4 ...)
