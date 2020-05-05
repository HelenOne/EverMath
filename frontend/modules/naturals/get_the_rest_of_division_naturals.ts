// N12 MOD_NN_N

import { divideNaturalsTotal } from './divide_naturals_total';
import { multiplyNaturals } from './multiply_naturals';
import { subtractNaturals } from './subtract_naturals';
import { compareNaturals } from './compare_naturals';

export const getTheRestOfDivisionNaturals = (a: string, b: string) => {
  if (compareNaturals(a, b) === 1) {
    let c = a;
    a = b;
    b = c;
  }
  const incopleteDivision = divideNaturalsTotal(a, b);
  const approximateRes = multiplyNaturals(incopleteDivision, b);
  const rest = subtractNaturals(a, approximateRes);
  return rest;
};
