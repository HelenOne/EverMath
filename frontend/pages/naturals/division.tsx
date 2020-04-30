import React from 'react';
import { Input } from 'antd';
import { divideNaturalsTotal } from '../../modules/naturals/divide_naturals_total';
import { getTheRestOfDivisionNaturals } from '../../modules/naturals/get_the_rest_of_division_naturals';

const division = () => {
  const [firstNumberValue, setFirstNumberValue] = React.useState('');
  const [secondNumberValue, setSecondNumberValue] = React.useState('');

  const resultNumber = React.useMemo(
    () => divideNaturalsTotal(firstNumberValue, secondNumberValue),
    [firstNumberValue, secondNumberValue]
  );
  const resultRest = React.useMemo(
    () => getTheRestOfDivisionNaturals(firstNumberValue, secondNumberValue),
    [firstNumberValue, secondNumberValue]
  );

  return (
    <div>
      <div>
        <span>Введите первое число: </span>
        <Input
          value={firstNumberValue || ''}
          onChange={(event) => {
            const value = event.target.value.replace(/[^0-9]/g, '');
            setFirstNumberValue(value);
          }}
        />
      </div>
      <div>
        <br />
        <span>Введите второе число: </span>
        <Input
          value={secondNumberValue || ''}
          onChange={(event) => {
            const value = event.target.value.replace(/[^0-9]/g, '');
            setSecondNumberValue(value);
          }}
        />
      </div>
      <div>
        <br />
        <span>Результат: </span>
        <Input value={resultNumber || ''} />
        <div className="rest">Остаток: {resultRest}</div>
      </div>
    </div>
  );
};
export default division;
