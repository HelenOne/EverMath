// Q1 RED_Q_Q

import { gcdNaturals } from '../naturals/gcd_naturals';
import { isPositive } from '../integers/isPositive';
import { divideNaturalsTotal } from '../naturals/divide_naturals_total';
import { absInteger } from '../integers/abs_integer';
import { changeSign } from '../integers/change_sign';
import { isEqualZero } from '../naturals/is_equal_zero';

export const reduceRational = ({
  numerator,
  denominator,
}: {
  numerator: string;
  denominator: string;
}) => {
  if (
    !isEqualZero(absInteger(denominator)) &&
    !isEqualZero(absInteger(numerator))
  ) {
    let resultIsPositive = true;
    if (isPositive(numerator) !== isPositive(denominator)) {
      resultIsPositive = false;
    }
    const gcd = gcdNaturals(numerator, denominator);
    numerator = divideNaturalsTotal(absInteger(numerator), gcd);
    denominator = divideNaturalsTotal(absInteger(denominator), gcd);

    if (!resultIsPositive) {
      numerator = changeSign(numerator);
    }
    return { numerator, denominator };
  } else return { numerator: '0', denominator: '0' };
};
