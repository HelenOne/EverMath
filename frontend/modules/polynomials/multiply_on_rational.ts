// P3 MUL_PQ_P

import { Polynomial, Monomial } from './sum_polynomials';
import { multiplyRationals } from '../rational/multiply_rationals';

export const multOnRational = (polynomial: Polynomial, rational: Monomial) => {
  const result: Polynomial = [];
  for (let i = 0; i < polynomial.length - 1; i++) {
    result.push(multiplyRationals(polynomial[i], rational));
  }
};
