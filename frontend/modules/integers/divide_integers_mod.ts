// Z10 MOD_ZZ_Z

import { divideNaturalsTotal } from '../naturals/divide_naturals_total';
import { absInteger } from './abs_integer';
import { multiplyNaturals } from '../naturals/multiply_naturals';
import { getTheRestOfDivisionNaturals } from '../naturals/get_the_rest_of_division_naturals';

export const divideIntegersMod = (a: string, b: string) => {
  return getTheRestOfDivisionNaturals(absInteger(a), absInteger(b));
};
