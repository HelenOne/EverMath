// N3 ADD_1N_N

export const plusOne = (number: string) => {
  number = number.replace(/^0+/, "");
  const numberArr = number.split("").map((char) => parseInt(char));
  for (let i = numberArr.length - 1; i >= 0; i--) {
    if (numberArr[i] !== 9) {
      numberArr[i]++;
      break;
    } else {
      numberArr[i] = 0;
    }
  }
  if (numberArr[0] === 0) {
    numberArr.unshift(1);
  }
  return numberArr.join("");
};
