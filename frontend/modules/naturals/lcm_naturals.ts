//N14 LCM_NN_N

import { multiplyNaturals } from './multiply_naturals';
import { divideNaturalsTotal } from './divide_naturals_total';
import { gcdNaturals } from './gcd_naturals';

export const lcmNaturals = (a: string, b: string) => {
  return divideNaturalsTotal(multiplyNaturals(a, b), gcdNaturals(a, b));
};
