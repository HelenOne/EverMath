// P7 FAC_P_Q

import { Polynomial } from './sum_polynomials';
import { gcdNaturals } from '../naturals/gcd_naturals';
import { lcmNaturals } from '../naturals/lcm_naturals';

export const getLcmGcd = (polynomial: Polynomial) => {
  let gcd = polynomial[0].numerator;
  let lcm = polynomial[0].denominator;
  for (let i = 1; i < polynomial.length - 1; i++) {
    gcd = gcdNaturals(gcd, polynomial[i].numerator);
    lcm = lcmNaturals(lcm, polynomial[i].denominator);
  }
  return { lcm, gcd };
};
