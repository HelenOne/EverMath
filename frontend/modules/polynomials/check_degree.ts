// P6 DEG_P_N

import { Polynomial } from './sum_polynomials';

export const checkDegree = (polynomial: Polynomial) => {
  let zeroElements = 0;
  for (let i = 0; i < polynomial.length; i++) {
    if (polynomial[i].numerator === '0') {
      zeroElements++;
    }
  }
  return polynomial.length - 1 - zeroElements;
};
