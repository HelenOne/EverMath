import React from 'react';
import { Button, Tooltip, Input } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { Polynomial } from '../modules/polynomials/sum_polynomials';

export const PolynomialView: React.FC<{
  value: Polynomial;
  onChange?: (value: Polynomial) => void;
}> = ({ value, onChange }) => {
  return (
    <div
      className={onChange ? 'polynomial' : 'polynomial read-only-polynomial'}
    >
      {onChange ? (
        <Tooltip title="Добавить слагаемое более высокой степени">
          <Button
            className="add-monomial"
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={() => {
              // onChange ?
              onChange([
                ...value,
                {
                  numerator: '',
                  denominator: '',
                },
              ]);
              // : null;
            }}
          />
        </Tooltip>
      ) : undefined}
      {value
        .map((monomial, degree) => ({
          monomial,
          degree,
          hasNext:
            value[degree + 1] &&
            value[degree + 1].numerator !== '0' &&
            value[degree + 1].denominator !== '0'
              ? Boolean(value[degree + 1])
              : false,
        }))
        .reverse()
        .map(({ monomial, degree, hasNext }) => {
          return (
            <div
              className={
                !onChange && monomial.numerator === '0'
                  ? 'monomial zeroFraction'
                  : 'monomial'
              }
              key={degree}
            >
              {hasNext ? <PlusOutlined className="operatorIcon" /> : null}
              <div className="fraction">
                <Input
                  value={monomial.numerator}
                  onChange={(event) => {
                    const inputValue = event.target.value
                      .replace(/[^0-9\-]/g, '')
                      .replace(/^0{2,}/g, '0')
                      .replace(/([0-9\-])-/g, '$1');
                    const newValue = [...value];
                    newValue[degree].numerator = inputValue;
                    onChange ? onChange(newValue) : null;
                  }}
                />
                <Input
                  value={monomial.denominator}
                  onChange={(event) => {
                    const inputValue = event.target.value
                      .replace(/[^0-9\-]/g, '')
                      .replace(/^0/g, '')
                      .replace(/([0-9\-])-/g, '$1');
                    const newValue = [...value];
                    newValue[degree].denominator = inputValue;
                    onChange ? onChange(newValue) : null;
                  }}
                />
              </div>
              {degree > 1 ? (
                <span className="monomial-variable">
                  X<sup>{degree}</sup>
                </span>
              ) : degree === 1 ? (
                <span className="monomial-variable">X</span>
              ) : null}
            </div>
          );
        })}
    </div>
  );
};
