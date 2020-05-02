import React from 'react';
import { Card, Input } from 'antd';
import { MinusOutlined, PauseOutlined } from '@ant-design/icons';
import { subtractNaturals } from '../../modules/naturals/subtract_naturals';
import { subtractRationals } from '../../modules/rational/subtract_rationals';

const subtraction = () => {
  const [firstNumerator, setFirstNumerator] = React.useState('');
  const [firstDenominator, setFirstDenominator] = React.useState('');
  const [secondNumerator, setSecondNumerator] = React.useState('');
  const [secondDenominator, setSecondDenominator] = React.useState('');

  const result = React.useMemo(
    () =>
      subtractRationals(
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
      <MinusOutlined className="operatorIcon" />
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
export default subtraction;
