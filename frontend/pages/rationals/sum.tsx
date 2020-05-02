import React from 'react';
import { Card, Input } from 'antd';
import { PlusOutlined, PauseOutlined } from '@ant-design/icons';
import { sumRationals } from '../../modules/rational/sum_rationals';

const sum = () => {
  const [firstNumerator, setFirstNumerator] = React.useState('');
  const [firstDenominator, setFirstDenominator] = React.useState('');
  const [secondNumerator, setSecondNumerator] = React.useState('');
  const [secondDenominator, setSecondDenominator] = React.useState('');

  const result = React.useMemo(
    () =>
      sumRationals(
        { numerator: firstNumerator, denominator: firstDenominator },
        { numerator: secondNumerator, denominator: secondDenominator }
      ),
    [firstNumerator, firstDenominator, secondNumerator, secondDenominator]
  );

  return (
    <div className="rational-wrapper">
      <div>
        <Input
          value={firstNumerator || ''}
          onChange={(event) => setFirstNumerator(event.target.value)}
        />
        <div className="line"></div>
        <Input
          value={firstDenominator || ''}
          onChange={(event) => setFirstDenominator(event.target.value)}
        />
      </div>
      <PlusOutlined className="operatorIcon" />
      <div>
        <Input
          value={secondNumerator || ''}
          onChange={(event) => setSecondNumerator(event.target.value)}
        />
        <div className="line"></div>
        <Input
          value={secondDenominator || ''}
          onChange={(event) => setSecondDenominator(event.target.value)}
        />
      </div>
      <PauseOutlined className="equal operatorIcon" />
      <div>
        <Input value={result.numerator || ''} />
        <Input value={result.denominator || ''} />
      </div>
    </div>
  );
};
export default sum;
