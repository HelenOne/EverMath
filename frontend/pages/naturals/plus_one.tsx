import React from 'react';
import { Input } from 'antd';
import { plusOne } from '../../modules/plus_one';

const plus_one = () => {
  const [numberValue, setNumberValue] = React.useState('');
  const [resultNumber, setResultNumber] = React.useState('');

  return (
    <div>
      <span>Введите число: </span>
      <Input
        value={numberValue || ''}
        onChange={(event) => {
          const value = event.target.value.replace(/[^0-9]/g, '');
          setNumberValue(value);
          setResultNumber(plusOne(value));
        }}
      />
      <div>
        <br />
        <span>Результат: </span>
        <Input value={resultNumber || ''} />
      </div>
    </div>
  );
};
export default plus_one;
