import React from 'react';
import TabBar from '@/components/TabBar';
import { history } from 'umi';
import './BasicLayout.scss';

const BasicLayout: React.FC = (props) => {
  return (
    <div className="basic-layout">
      {props.children}
      <TabBar pathname={history.location.pathname}></TabBar>
    </div>
  );
};

export default BasicLayout;
