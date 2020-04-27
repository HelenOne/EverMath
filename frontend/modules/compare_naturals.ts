//N-1 COM_NN_D

export const compareNaturals = (a: string, b: string) => {
  a = a.replace(/^0+/, '');
  b = b.replace(/^0+/, '');
  if (a.length > b.length) {
    return 2; //первое число больше второго
  } else if (a.length < b.length) {
    return 1; //второе число больше первого
  } else {
    const aArr = a.split('').map((char) => parseInt(char, 10));
    const bArr = b.split('').map((char) => parseInt(char, 10));
    for (let i = 0; i < aArr.length; i++) {
      if (aArr[i] > bArr[i]) {
        return 2; //первое число больше 2
      } else if (aArr[i] < bArr[i]) {
        return 1; //второе число больше первого
      }
    }
    return 0; //числа равны
  }
};
