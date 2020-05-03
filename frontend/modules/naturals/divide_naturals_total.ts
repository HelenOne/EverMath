// N11 DIV_NN_N

import { compareNaturals } from './compare_naturals';
import { multiplyNaturals } from './multiply_naturals';
import { subtractNaturals } from './subtract_naturals';

export const divideNaturalsTotal = (a: string, b: string) => {
  a = a.replace(/^0+/, '');
  b = b.replace(/^0+/, '');
  let aArr;
  let bArr;

  if (compareNaturals(a, b) === 0 && a.length !== 0 && b.length !== 0) {
    return '1';
  } else if (compareNaturals(a, b) === 1) {
    // a < b
    const tmp = a;
    a = b;
    b = tmp;
  }

  if (a.length === 0 || b.length === 0) {
    return '';
  }

   let result: string = '0'; //неполное частное
   let sub: string = a;
   let result: string; 
   while(compareNaturals(sub,b) !== 1){
   sub = substr(sub, b);
   result = plusOne(result);
   }
  return result;
};
