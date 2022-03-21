import React from 'react';
import TabBar from '@/components/TabBar';
import { history, useLocation } from 'umi';
import './BasicLayout.scss';
import { NavBar } from 'antd-mobile';

const NEED_TABBAR_PATH = ['/', '/category', '/cart', '/my'];

const BasicLayout: React.FC = (props) => {
  const location = useLocation();
  const back = () => {
    history.goBack();
  };
  if (NEED_TABBAR_PATH.includes(location.pathname)) {
    return (
      <div className="basic-layout">
        {props.children}
        <TabBar pathname={history.location.pathname}></TabBar>
      </div>
    );
  }
  return (
    <div className="blank-layout">
      <NavBar className="nav-bar" onBack={back} backArrow={true}>
        风袖
      </NavBar>
      {props.children}
    </div>
  );
};

export default BasicLayout;
