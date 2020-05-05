// N13 GCF_NN_N

import { isEqualZero } from './is_equal_zero';
import { getTheRestOfDivisionNaturals } from './get_the_rest_of_division_naturals';
import { compareNaturals } from './compare_naturals';
import { divideNaturalsTotal } from './divide_naturals_total';

export const gcdNaturals = (a: string, b: string): string => {
  debugger;
  if (a === '1' || b === '1') {
    return '1';
  }
  if (a === b) {
    return a;
  }
  if (!a || !b) {
    return '';
  }
  if (compareNaturals(a, b) === 1 && !isEqualZero(a)) {
    // if b > a
    let c = a;
    a = b;
    b = c;
  }
  return isEqualZero(a) || isEqualZero(b)
    ? b
    : gcdNaturals(getTheRestOfDivisionNaturals(b, a), b);
};
