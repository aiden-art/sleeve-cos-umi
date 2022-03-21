import React from 'react';
import './BasicLayout.scss';

const BasicLayout: React.FC = (props) => {
  return <div className="blank-layout">{props.children}</div>;
};

export default BasicLayout;
