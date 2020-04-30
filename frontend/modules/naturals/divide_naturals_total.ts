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

  let result: string = ''; //неполное частное
  let position = 0; //какая цифра по счету от начала

  // compareNaturals((multiplyNaturals(result.join(''), bArr.join('')) + rest), bArr.join('')) === 1

  let aWorkingPart = a.substr(position, b.length); //кусочек делимого, который сейчас делим
  while (true) {
    let workingPartExtended = false;
    const initWorkingPart = aWorkingPart;
    for (let i = 1; compareNaturals(aWorkingPart, b) === 1; i++) {
      aWorkingPart =
        initWorkingPart + a.substr(position + initWorkingPart.length, i);
      aWorkingPart = aWorkingPart.replace(/^0+/, '');

      if (workingPartExtended) {
        result += '0';
      }
      workingPartExtended = true;
      if (position + aWorkingPart.length >= a.length) {
        break;
      }
      debugger;
    }
    let rate = 0;
    let buffer = b;
    while (true) {
      const possibleRate = rate + 1;
      const possibleBuffer = multiplyNaturals(b, possibleRate.toString());
      const comparing = compareNaturals(possibleBuffer, aWorkingPart);
      if (comparing === 2) {
        break;
      }
      rate = possibleRate;
      buffer = possibleBuffer;
      debugger;
    }
    result += rate.toString();
    const edgeReached = position + aWorkingPart.length >= a.length;
    debugger;
    let newWorkingPart = subtractNaturals(aWorkingPart, buffer);
    newWorkingPart = newWorkingPart.replace(/^0+/, '');
    position += aWorkingPart.length - newWorkingPart.length;
    aWorkingPart = newWorkingPart;
    if (edgeReached && compareNaturals(aWorkingPart, b) === 1) {
      break;
    }
    debugger;
  }

  return result;
};
