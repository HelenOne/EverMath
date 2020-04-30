// Z3 MUL_ZM_Z

export const changeSign = (number: string) => {
  number = number.replace(/^0+/, '');
  const numberArr = number.split('');
  if (numberArr[0] === '-') {
    numberArr.shift();
  } else {
    numberArr.unshift('-');
  }
  return numberArr.join('');
};
