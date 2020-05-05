import React from 'react';
import { PolynomialView } from '../../components/Polynomial';
import { Polynomial } from '../../modules/polynomials/sum_polynomials';
import { dividePolynomialsTotal } from '../../modules/polynomials/divide_polynomials_total';
import { getRestPolynomials } from '../../modules/polynomials/get_rest_polynomials';

const division = () => {
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

  const resultTotal = React.useMemo(
    () => dividePolynomialsTotal(polynomial1, polynomial2),
    [polynomial1, polynomial2]
  );
  const resultRest = React.useMemo(
    () => getRestPolynomials(polynomial1, polynomial2),
    [polynomial1, polynomial2]
  );

  return (
    <div>
      <label className="polynomial-label">Первый многочлен:</label>
      <PolynomialView value={polynomial1} onChange={setPolynomial1} />
      <br />
      <label className="polynomial-label">Второй многочлен:</label>
      <PolynomialView value={polynomial2} onChange={setPolynomial2} />
      <br />
      <label className="polynomial-label">Результат:</label>
      <PolynomialView value={resultTotal} />
      <label className="polynomial-label">Остаток:</label>
      <PolynomialView value={resultRest} />
    </div>
  );
};

export default division;
