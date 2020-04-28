// N11 DIV_NN_N

import { compareNaturals } from './compare_naturals';

export const divideNaturalsTotal = (a: string, b: string) => {
  a = a.replace(/^0+/, '');
  b = b.replace(/^0+/, '');
  let aArr;
  let bArr;

  if (compareNaturals(a, b) === 0) {
    // a = b
    return '1';
  } else if (compareNaturals(a, b) === 2) {
    // a > b
    aArr = a.split('').map((char) => parseInt(char));
    bArr = b.split('').map((char) => parseInt(char));
  } else {
    // a < b
    aArr = b.split('').map((char) => parseInt(char));
    bArr = a.split('').map((char) => parseInt(char));
  }
};
