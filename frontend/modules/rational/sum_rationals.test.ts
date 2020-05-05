// tests

import { sumRationals } from './sum_rationals';

test('if one fraction is 0 the result is the another one', () => {
  expect(
    sumRationals(
      { numerator: '0', denominator: '0' },
      { numerator: '1', denominator: '2' }
    )
  ).toBe({ numerator: '1', denominator: '2' });
});
