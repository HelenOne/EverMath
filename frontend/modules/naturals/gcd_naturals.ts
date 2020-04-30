// N13 GCF_NN_N

import { isEqualZero } from './is_equal_zero';
import { getTheRestOfDivisionNaturals } from './get_the_rest_of_division_naturals';

export const gcdNaturals = (a: string, b: string): string => {
  return isEqualZero(a)
    ? b
    : gcdNaturals(getTheRestOfDivisionNaturals(b, a), a);
};
