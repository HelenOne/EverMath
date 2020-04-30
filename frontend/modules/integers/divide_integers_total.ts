// Z9 DIV_ZZ_Z

import { isPositive } from './isPositive';
import { changeSign } from './change_sign';
import { divideNaturalsTotal } from '../naturals/divide_naturals_total';
import { absInteger } from './abs_integer';

export const divideIntegersTotal = (a: string, b: string) => {
  if (isPositive(a) !== isPositive(b)) {
    return changeSign(divideNaturalsTotal(absInteger(a), absInteger(b)));
  } else return divideNaturalsTotal(absInteger(a), absInteger(b));
};
