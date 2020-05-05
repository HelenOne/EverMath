// N13 GCF_NN_N

import { isEqualZero } from './is_equal_zero';
import { getTheRestOfDivisionNaturals } from './get_the_rest_of_division_naturals';
import { compareNaturals } from './compare_naturals';

export const gcdNaturals = (a: string, b: string): string => {
  debugger;
  console.table({ a, b });
  if (a === '1' || b === '1') {
    return '1';
  }
  if (a === b) {
    return a;
  }
  if (!a || !b) {
    return '';
  }
  // if (compareNaturals(a, b) === 1) {
  //   // if b > a
  //   let c = a;
  //   a = b;
  //   b = a;
  // }
  return isEqualZero(a)
    ? b
    : gcdNaturals(getTheRestOfDivisionNaturals(b, a), a);
};
