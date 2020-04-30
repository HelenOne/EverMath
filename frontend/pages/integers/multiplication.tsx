import React from 'react';
import { multiplyIntegers } from '../../modules/integers/multiply_integers';
import { Input } from 'antd';

const multiplication = () => {
  const [firstNumberValue, setFirstNumberValue] = React.useState('');
  const [secondNumberValue, setSecondNumberValue] = React.useState('');
  const resultNumber = React.useMemo(
    () => multiplyIntegers(firstNumberValue, secondNumberValue),
    [firstNumberValue, secondNumberValue]
  );
  return (
    <div>
      <div>
        <span>Введите первое число: </span>
        <Input
          value={firstNumberValue || ''}
          onChange={(event) => {
            const value = event.target.value.replace(/^(-)|[^0-9]+/g, '$1');
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
            const value = event.target.value.replace(/^(-)|[^0-9]+/g, '$1');
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
