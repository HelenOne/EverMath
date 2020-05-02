// Q4 TRANS_Q_Z

import { isRationalInteger } from './is_rational_integer';

export const transformIntoInteger = ({
  numerator,
  denominator,
}: {
  numerator: string;
  denominator: string;
}) => {
  if (isRationalInteger({ numerator, denominator })) {
    return numerator;
  }
};
