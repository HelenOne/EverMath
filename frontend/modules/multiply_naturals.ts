// N8 MUL_NN_N

import { multiplyNaturalByDigit } from './multiply_natural_by_digit';
import { sumNaturals } from './sum_naturals';

export const multiplyNaturals = (a: string, b: string) => {
  a = a.replace(/^0+/, '');
  b = b.replace(/^0+/, '');

  const aArr = a.split('').map((char) => parseInt(char, 10));
  const bArr = b.split('').map((char) => parseInt(char, 10));

  let result = '0';

  for (
    let i = bArr.length - 1, numberOfZeros = 0;
    i >= 0;
    i--, numberOfZeros++
  ) {
    let zeros = Array(numberOfZeros).fill('0');
    let currentNumber = multiplyNaturalByDigit(aArr.join(''), bArr[i])
      .split('')
      .concat(zeros)
      .join(''); //array of chars
    result = sumNaturals(currentNumber, result);
  }

  return result;
};
