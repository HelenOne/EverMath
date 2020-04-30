// Z6 ADD_ZZ_Z

import { isPositive } from './isPositive';
import { sumNaturals } from '../naturals/sum_naturals';
import { absInteger } from './abs_integer';
import { compareNaturals } from '../naturals/compare_naturals';
import { subtractNaturals } from '../naturals/subtract_naturals';

export const sumIntegers = (a: string, b: string) => {
  if (isPositive(a) !== 1 && isPositive(b) !== 1) {
    // both are not negative
    return sumNaturals(a, b);
  } else if (isPositive(a) === 1 && isPositive(b) === 1) {
    //both are negative
    return '-' + sumNaturals(absInteger(a), absInteger(b));
  } else if (
    (isPositive(a) === 1 &&
      isPositive(b) !== 1 &&
      compareNaturals(absInteger(a), b) === 2) ||
    // a is negative b is not; a > b
    (isPositive(b) === 1 &&
      isPositive(a) !== 1 &&
      compareNaturals(absInteger(b), a) === 2)
    // b is negative a is not; b > a
  ) {
    return '-' + subtractNaturals(absInteger(a), absInteger(b));
  } else {
    return subtractNaturals(absInteger(a), absInteger(b));
  }
};
