import React from 'react';
import { Input } from 'antd';
import { PauseOutlined } from '@ant-design/icons';
import { divideRationals } from '../../modules/rational/divide_rationals';
import { getTheRestOfDivisionNaturals } from '../../modules/naturals/get_the_rest_of_division_naturals';

const division = () => {
  const [firstNumerator, setFirstNumerator] = React.useState('');
  const [firstDenominator, setFirstDenominator] = React.useState('');
  const [secondNumerator, setSecondNumerator] = React.useState('');
  const [secondDenominator, setSecondDenominator] = React.useState('');

  const result = React.useMemo(
    () =>
      divideRationals(
        { numerator: firstNumerator, denominator: firstDenominator },
        { numerator: secondNumerator, denominator: secondDenominator }
      ),
    [firstNumerator, firstDenominator, secondNumerator, secondDenominator]
  );
  return (
    <div className="rational-wrapper">
      <div>
        <Input
          className="operatorIcon"
          onChange={(event) => setFirstNumerator(event.target.value.replace(/[^0-9]/g, '')}
        />
        <div className="line"></div>
        <Input
          className="operatorIcon"
          onChange={(event) => setFirstDenominator(event.target.value.replace(/[^0-9]/g, '')}
        />
      </div>
      <svg
        viewBox="64 64 896 896"
        focusable="false"
        className="operatorIcon"
        data-icon="more"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56  56 0 10112 0 56 56 0 10-112 0z"></path>
      </svg>
      <div>
        <Input
          className="operatorIcon"
          onChange={(event) => setSecondNumerator(event.target.value.replace(/[^0-9]/g, '')}
        />
        <div className="line"></div>
        <Input
          className="operatorIcon"
          onChange={(event) => setSecondDenominator(event.target.value.replace(/[^0-9]/g, '')}
        />
      </div>
      <PauseOutlined className="equal operatorIcon" />
      <div>
        <Input className="operatorIcon" value={result.numerator || ''} />
        <Input className="operatorIcon" value={result.denominator || ''} />
      </div>
    </div>
  );
};
export default division;
