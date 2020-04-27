// N4 ADD_NN_N

export const sumNaturals = (a: string, b: string) => {
  a = a.replace(/^0+/, '');
  const aArr = a.split('').map((char) => parseInt(char));
  b = b.replace(/^0+/, '');
  const bArr = b.split('').map((char) => parseInt(char));

  while (aArr.length !== bArr.length) {
    if (aArr.length < bArr.length) {
      aArr.unshift(0);
    } else {
      bArr.unshift(0);
    }
  }

  let buffer = 0;
  let result = [];

  for (let i = aArr.length - 1; i >= 0; i--) {
    let currentNumber = aArr[i] + bArr[i] + buffer;
    if (currentNumber > 9) {
      result.unshift(currentNumber % 10);
      buffer = Math.floor((currentNumber - (currentNumber % 10)) / 10);
    } else {
      result.unshift(currentNumber);
    }
  }

  while (buffer !== 0) {
    result.unshift(buffer % 10);
    buffer = Math.floor((buffer - (buffer % 10)) / 10);
  }

  return result.join('');
};
