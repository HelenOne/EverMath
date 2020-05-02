// Q6 SUB_QQ_Q

import { reduceRational } from './reduce_rational';
import { lcmNaturals } from '../naturals/lcm_naturals';
import { absInteger } from '../integers/abs_integer';
import { divideNaturalsTotal } from '../naturals/divide_naturals_total';
import { subtractIntegers } from '../integers/subtract_integers';

type Fraction = {
  numerator: string;
  denominator: string;
};

export const subtractRationals = (
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

  const lcm = lcmNaturals(
    absInteger(denominatorReduced1),
    absInteger(denominatorReduced2)
  );
  let resultDenominator = lcm; // НОК
  let resultNuminator = '';

  const mult1 = divideNaturalsTotal(lcm, denominatorReduced1);
  const mult2 = divideNaturalsTotal(lcm, denominatorReduced2);
  console.log(mult1);

  numeratorReduced1 = subtractIntegers(numeratorReduced1, mult1);
  numeratorReduced2 = subtractIntegers(numeratorReduced2, mult2);

  resultNuminator =
    subtractIntegers(numeratorReduced1, numeratorReduced2) || '';

  if (resultNuminator !== '0') {
    return reduceRational({
      numerator: resultNuminator || '',
      denominator: resultDenominator || '',
    });
  } else {
    return {
      numerator: resultNuminator || '',
      denominator: '0',
    };
  }
};
