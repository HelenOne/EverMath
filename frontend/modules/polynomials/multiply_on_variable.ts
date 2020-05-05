// P4 MUL_Pxk_P

import { Polynomial } from './sum_polynomials';

export const multiplyOnVariable = (
  polynomial: Polynomial,
  variableDegree: number
) => {
  const result: Polynomial = polynomial.map((el) => ({ ...el }));
  for (let i = 0; i < variableDegree; i++) {
    result.unshift({
      numerator: '0',
      denominator: '0',
    });
  }
  return result;
};
