// Z10 MOD_ZZ_Z

import { divideNaturalsTotal } from '../naturals/divide_naturals_total';
import { absInteger } from './abs_integer';
import { multiplyNaturals } from '../naturals/multiply_naturals';
import { getTheRestOfDivisionNaturals } from '../naturals/get_the_rest_of_division_naturals';
import { subtractNaturals } from '../naturals/subtract_naturals';
import { compareNaturals } from '../naturals/compare_naturals';
import { divideIntegersTotal } from './divide_integers_total';

export const divideIntegersMod = (a: string, b: string) => {
  if (compareNaturals(a, b) === 1) {
    let c = a;
    a = b;
    b = c;
  }
  // return getTheRestOfDivisionNaturals(absInteger(a), absInteger(b));
  return subtractNaturals(
    absInteger(a),
    multiplyNaturals(absInteger(b), absInteger(divideIntegersTotal(a, b)))
  );
};
