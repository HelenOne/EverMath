// Z9 DIV_ZZ_Z

import { isPositive } from './isPositive';
import { changeSign } from './change_sign';
import { divideNaturalsTotal } from '../naturals/divide_naturals_total';
import { absInteger } from './abs_integer';
import { plusOne } from '../naturals/plus_one';
import { getTheRestOfDivisionNaturals } from '../naturals/get_the_rest_of_division_naturals';

export const divideIntegersTotal = (a: string, b: string) => {
  if (isPositive(a) !== isPositive(b)) {
    return changeSign(
      getTheRestOfDivisionNaturals(absInteger(a), absInteger(b)) === '0'
        ? divideNaturalsTotal(absInteger(a), absInteger(b))
        : plusOne(divideNaturalsTotal(absInteger(a), absInteger(b)))
    );
  } else return divideNaturalsTotal(absInteger(a), absInteger(b));
};
