//наибольший общий делитель
import React from 'react';
import { Input } from 'antd';
import { gcdNaturals } from '../../modules/naturals/gcd_naturals';
import { useMemoDebounced } from '../../debounce';

const gcd = () => {
  const [firstNumberValue, setFirstNumberValue] = React.useState('');
  const [secondNumberValue, setSecondNumberValue] = React.useState('');

  const resultNumber = React.useMemo(() => {
    return gcdNaturals(firstNumberValue, secondNumberValue);
  }, [firstNumberValue, secondNumberValue]);

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
        {console.log(resultNumber)}
      </div>
    </div>
  );
};
export default gcd;
