// P2  SUB_PP_P

import { Polynomial } from './sum_polynomials';
import { reduceRational } from '../rational/reduce_rational';
import { subtractRationals } from '../rational/subtract_rationals';
import { changeSign } from '../integers/change_sign';

export const subtractPolynomials = (first: Polynomial, second: Polynomial) => {
  const a = first.map((el) => ({ ...el }));
  const b = second.map((el) => ({ ...el }));

  const maxDegree = a.length > b.length ? a.length - 1 : b.length - 1;

  let result: Polynomial = [];

  for (let degree = maxDegree; degree >= 0; degree--) {
    if (!a[degree]) {
      result.unshift(reduceRational(b[degree]));
    } else if (!b[degree] || b[degree].numerator === '0') {
      result.unshift(reduceRational(a[degree]));
    } else if (a[degree].numerator === '0') {
      changeSign(b[degree].numerator);
      result.unshift(reduceRational(b[degree]));
    } else {
      result.unshift(subtractRationals(a[degree], b[degree]));
    }
  }
  return result;
};
