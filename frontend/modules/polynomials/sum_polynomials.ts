// P1 ADD_PP_P

import { sumRationals } from '../rational/sum_rationals';
import { reduceRational } from '../rational/reduce_rational';

export type Monomial = {
  numerator: string;
  denominator: string;
};

export type Polynomial = Monomial[];

// const p: Polynomial = [
//   { numerator: '1', denominator: '1' },
//   { numerator: '1', denominator: '1' },
// ];

export const sumPolynomials = (first: Polynomial, second: Polynomial) => {
  const a = first.map((el) => ({ ...el }));
  const b = second.map((el) => ({ ...el }));

  const maxDegree = a.length > b.length ? a.length - 1 : b.length - 1;

  let result: Polynomial = [];

  for (let degree = maxDegree; degree >= 0; degree--) {
    if (!a[degree]) {
      result.unshift(reduceRational(b[degree]));
    } else if (!b[degree]) {
      result.unshift(reduceRational(a[degree]));
    } else {
      result.unshift(sumRationals(a[degree], b[degree]));
    }
  }
  return result;
};
