// N6 MUL_ND_N

export const multiplyNaturalByDigit = (number: string, digit: number) => {
  number = number.replace(/^0+/, '');
  const numberArr = number.split('').map((char) => parseInt(char));

  let buffer = 0;
  let result: number[] = [];

  for (let i = numberArr.length - 1; i >= 0; i--) {
    let currentNumber = (numberArr[i] * digit + buffer) % 10;
    result.unshift(currentNumber);
    buffer = Math.floor((numberArr[i] * digit + buffer - currentNumber) / 10);
  }

  while (buffer !== 0) {
    result.unshift(buffer % 10);
    buffer = Math.floor((buffer - (buffer % 10)) / 10);
  }

  return result.join('');
};

multiplyNaturalByDigit('36', 7);
