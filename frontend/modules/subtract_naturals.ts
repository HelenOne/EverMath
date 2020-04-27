// N5 SUB_NN_N

import { compareNaturals } from './compare_naturals';

export const subtractNaturals = (a: string, b: string) => {
  a = a.replace(/^0+/, '');
  let aArr;
  b = b.replace(/^0+/, '');
  let bArr;

  if (compareNaturals(a, b) === 0) {
    return '0';
  } else if (compareNaturals(a, b) === 2) {
    // a > b
    aArr = a.split('').map((char) => parseInt(char));
    bArr = b.split('').map((char) => parseInt(char));
  } else {
    // a < b
    aArr = b.split('').map((char) => parseInt(char));
    bArr = a.split('').map((char) => parseInt(char));
  }

  while (aArr.length !== bArr.length) {
    if (aArr.length < bArr.length) {
      aArr.unshift(0);
    } else {
      bArr.unshift(0);
    }
  }

  let debt = 0;

  for (let i = aArr.length - 1; i >= 0; i--) {
    if (debt > 0) {
      if (debt > aArr[i]) {
        debt -= aArr[i];
        aArr[i] = 0;
      } else {
        aArr[i] -= debt;
        debt = 0;
      }
    }
    if (bArr[i] > aArr[i]) {
      debt++;
      aArr[i] += 10;
    }
    aArr[i] -= bArr[i];
  }

  return aArr.join('').replace(/^0+/, '');
};
