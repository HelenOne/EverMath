// Z2 POZ_Z_D

export const isPositive = (number: string) => {
  number = number.replace(/^0+/, '');
  const numberArr = number.split('');
  if (numberArr[0] === '-') {
    return 1; // negative
  } else if (number === '') {
    return 0; // === 0
  } else return 2; // positive
};
