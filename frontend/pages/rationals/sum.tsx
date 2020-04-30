import React from 'react';
import { Card, Input } from 'antd';

const sum = () => {
  return (
    <div className="rational-wrapper">
      <div>
        <Input />
        <div className="line"></div>
        <Input />
      </div>
      +
      <div>
        <Input />
        <div className="line"></div>
        <Input />
      </div>
      =
      <div>
        <Input />
        <Input />
      </div>
    </div>
  );
};
export default sum;
