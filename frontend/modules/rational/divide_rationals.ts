// Q8 DIV_QQ_Q

import { reduceRational } from './reduce_rational';
import { multiplyIntegers } from '../integers/multiply_integers';

type Fraction = {
  numerator: string;
  denominator: string;
};

export const divideRationals = (
  { numerator: numerator1, denominator: denominator1 }: Fraction,
  { numerator: numerator2, denominator: denominator2 }: Fraction
) => {
  return reduceRational({
    numerator: multiplyIntegers(numerator1, denominator2),
    denominator: multiplyIntegers(denominator1, numerator2),
  });
};
