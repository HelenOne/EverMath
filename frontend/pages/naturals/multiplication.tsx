import React from 'react';
import { Input } from 'antd';
import { multiplyNaturals } from '../../modules/multiply_naturals';

const multiplication = () => {
  const [firstNumberValue, setFirstNumberValue] = React.useState('36');
  const [secondNumberValue, setSecondNumberValue] = React.useState('47');
  const resultNumber = React.useMemo(
    () => multiplyNaturals(firstNumberValue, secondNumberValue),
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
      </div>
    </div>
  );
};
export default multiplication;