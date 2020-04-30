// Z1 ABS_Z_N

export const absInteger = (number: string) => {
  const numberArr = number.split('');
  if (numberArr[0] === '-') {
    numberArr.shift();
  }
  return numberArr.join('');
};
