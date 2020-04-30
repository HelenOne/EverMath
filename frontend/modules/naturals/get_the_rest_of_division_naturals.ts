// N12 MOD_NN_N

import { divideNaturalsTotal } from './divide_naturals_total';
import { multiplyNaturals } from './multiply_naturals';
import { subtractNaturals } from './subtract_naturals';

export const getTheRestOfDivisionNaturals = (a: string, b: string) => {
  const incopleteDivision = divideNaturalsTotal(a, b);
  const approximateRes = multiplyNaturals(incopleteDivision, b);
  const rest = subtractNaturals(a, approximateRes);
  return rest;
};
