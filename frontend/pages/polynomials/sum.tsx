import React from 'react';
import { PolynomialView } from '../../components/Polynomial';
import {
  Polynomial,
  sumPolynomials,
} from '../../modules/polynomials/sum_polynomials';

const sum = () => {
  const [polynomial1, setPolynomial1] = React.useState<Polynomial>([
    {
      numerator: '',
      denominator: '',
    },
    {
      numerator: '',
      denominator: '',
    },
  ]);
  const [polynomial2, setPolynomial2] = React.useState<Polynomial>([
    {
      numerator: '',
      denominator: '',
    },
    {
      numerator: '',
      denominator: '',
    },
  ]);

  const result = React.useMemo(() => sumPolynomials(polynomial1, polynomial2), [
    polynomial1,
    polynomial2,
  ]);

  return (
    <div>
      <label className="polynomial-label">Первый многочлен:</label>
      <PolynomialView value={polynomial1} onChange={setPolynomial1} />
      <br />
      <label className="polynomial-label">Второй многочлен:</label>
      <PolynomialView value={polynomial2} onChange={setPolynomial2} />
      <br />
      <label className="polynomial-label">Результат:</label>
      <PolynomialView value={result} />
    </div>
  );
};

export default sum;
