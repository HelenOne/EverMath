// Z8 MUL_ZZ_Z

import { isPositive } from './isPositive';
import { changeSign } from './change_sign';
import { multiplyNaturals } from '../naturals/multiply_naturals';
import { absInteger } from './abs_integer';

export const multiplyIntegers = (a: string, b: string) => {
  if (isPositive(a) !== isPositive(b)) {
    return changeSign(multiplyNaturals(absInteger(a), absInteger(b)));
  } else return multiplyNaturals(absInteger(a), absInteger(b));
};
