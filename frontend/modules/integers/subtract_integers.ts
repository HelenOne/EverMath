// Z7 SUB_ZZ_Z

import { changeSign } from './change_sign';
import { sumIntegers } from './sum_integers';

export const subtractIntegers = (a: string, b: string) => {
  return sumIntegers(a, changeSign(b));
};
