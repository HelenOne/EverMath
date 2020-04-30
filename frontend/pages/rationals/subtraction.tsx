import React from 'react';
import { Card, Input } from 'antd';
import { MinusOutlined } from '@ant-design/icons';

const subtraction = () => {
  return (
    <div className="rational-wrapper">
      <div>
        <Input />
        <div className="line"></div>
        <Input />
      </div>
      <MinusOutlined />
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
export default subtraction;
