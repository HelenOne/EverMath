// Q8 DIV_QQ_Q

import { reduceRational } from './reduce_rational';
import { multiplyIntegers } from '../integers/multiply_integers';

type Fraction = {
  numerator: string;
  denominator: string;
};

export const divideRationals = (fraction1: Fraction, fraction2: Fraction) => {
  if (!fraction1 || !fraction2) {
    return { numerator: '', denominator: '' };
  }
  const { numerator: numerator1, denominator: denominator1 } = fraction1;
  const { numerator: numerator2, denominator: denominator2 } = fraction2;
  if (numerator1 && numerator2 && denominator1 && denominator2) {
    return reduceRational({
      numerator: multiplyIntegers(numerator1, denominator2),
      denominator: multiplyIntegers(denominator1, numerator2),
    });
  } else return { numerator: '', denominator: '' };
};
