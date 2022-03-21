import React from 'react';
import TabBar from '@/components/TabBar';
import { history, useLocation } from 'umi';
import './BasicLayout.scss';

const NEED_TABBAR_PATH = ['/', '/category', '/cart', '/my'];

const BasicLayout: React.FC = (props) => {
  const location = useLocation();
  if (NEED_TABBAR_PATH.includes(location.pathname)) {
    return (
      <div className="basic-layout">
        {props.children}
        <TabBar pathname={history.location.pathname}></TabBar>
      </div>
    );
  }
  return <div className="blank-layout">{props.children}</div>;
};

export default BasicLayout;
