import React from 'react';
import { Input } from 'antd';
import { divideNaturalsTotal } from '../../modules/divide_naturals_total';

const division = () => {
  const [firstNumberValue, setFirstNumberValue] = React.useState('');
  const [secondNumberValue, setSecondNumberValue] = React.useState('');
  const [resultNumber, setResultNumber] = React.useState('');
  return (
    <div>
      <div>
        <span>Введите первое число: </span>
        <Input
          value={firstNumberValue || ''}
          onChange={(event) => {
            const value = event.target.value.replace(/[^0-9]/g, '');
            setFirstNumberValue(value);
            setResultNumber(divideNaturalsTotal(value, secondNumberValue));
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
            setResultNumber(divideNaturalsTotal(firstNumberValue, value));
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
export default division;
