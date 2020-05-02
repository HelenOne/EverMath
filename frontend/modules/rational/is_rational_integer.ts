// Q2 INT_Q_B

export const isRationalInteger = ({
  numerator,
  denominator,
}: {
  numerator: string;
  denominator: string;
}) => {
  denominator = denominator.replace(/^0+/, '');
  if (denominator === '' || denominator === '1') {
    return true;
  } else {
    return false;
  }
};
