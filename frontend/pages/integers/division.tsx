import React from 'react';
import { Input } from 'antd';
import { divideIntegersTotal } from '../../modules/integers/divide_integers_total';
import { divideIntegersMod } from '../../modules/integers/divide_integers_mod';

const div = () => {
  const [firstNumberValue, setFirstNumberValue] = React.useState('');
  const [secondNumberValue, setSecondNumberValue] = React.useState('');
  const resultNumber = React.useMemo(
    () => divideIntegersTotal(firstNumberValue, secondNumberValue),
    [firstNumberValue, secondNumberValue]
  );
  const resultRest = React.useMemo(
    () => divideIntegersMod(firstNumberValue, secondNumberValue),
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
        <span className="rest">Остаток: {resultRest}</span>
      </div>
    </div>
  );
};
export default div;
