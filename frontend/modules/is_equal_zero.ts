//N2 NZER_N_B

export const isEqualZero = (number: string) => {
  number = number.replace(/^0+/, "");
  if (number === "") {
    return true;
  }
  const numberArr = number.split("").map((char) => parseInt(char));
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] !== 0) {
      return false;
    }
  }
  return true;
};
