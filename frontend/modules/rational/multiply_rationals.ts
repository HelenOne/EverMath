// Q7 MUL_QQ_Q

import { reduceRational } from './reduce_rational';
import { multiplyIntegers } from '../integers/multiply_integers';

type Fraction = {
  numerator: string;
  denominator: string;
};

export const multiplyRationals = (
  { numerator: numerator1, denominator: denominator1 }: Fraction,
  { numerator: numerator2, denominator: denominator2 }: Fraction
) => {
  let {
    numerator: numeratorReduced1,
    denominator: denominatorReduced1,
  } = reduceRational({
    numerator: numerator1,
    denominator: denominator1,
  });
  let {
    numerator: numeratorReduced2,
    denominator: denominatorReduced2,
  } = reduceRational({
    numerator: numerator2,
    denominator: denominator2,
  });

  return reduceRational({
    numerator: multiplyIntegers(numeratorReduced1, numeratorReduced2),
    denominator: multiplyIntegers(denominatorReduced1, denominatorReduced2),
  });
};
