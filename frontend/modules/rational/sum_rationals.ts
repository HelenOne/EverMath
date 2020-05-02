// Q5 ADD_QQ_Q

import { lcmNaturals } from '../naturals/lcm_naturals';
import { isPositive } from '../integers/isPositive';
import { divideNaturalsTotal } from '../naturals/divide_naturals_total';
import { multiplyIntegers } from '../integers/multiply_integers';
import { sumIntegers } from '../integers/sum_integers';
import { reduceRational } from './reduce_rational';

type Fraction = {
  numerator: string;
  denominator: string;
};

export const sumRationals = (
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

  const lcm = lcmNaturals(denominatorReduced1, denominatorReduced2);
  let resultDenominator = lcm || '';

  const mult1 = divideNaturalsTotal(lcm, denominatorReduced1);
  const mult2 = divideNaturalsTotal(lcm, denominatorReduced2);

  numeratorReduced1 = multiplyIntegers(numeratorReduced1, mult1);
  numeratorReduced2 = multiplyIntegers(numeratorReduced2, mult2);

  let resultNominator = sumIntegers(numeratorReduced1, numeratorReduced2) || '';

  return reduceRational({
    numerator: resultNominator,
    denominator: resultDenominator,
  });
};
