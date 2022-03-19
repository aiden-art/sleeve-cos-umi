import React from 'react';
import { DotLoading } from 'antd-mobile';
import './index.scss';

const PageLoading: React.FC = () => {
  return (
    <div className="loading-page">
      <span style={{ fontSize: 32 }}>
        <DotLoading color="#157658" />
      </span>
    </div>
  );
};

export default PageLoading;
