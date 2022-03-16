import React from 'react';
import { TabBar } from 'antd-mobile';
import './index.scss';
import { history } from 'umi';

type TabBarCPropsType = {
  pathname: string;
};
type IconCPropsType = {
  icon: any;
};

const menuList = [
  {
    title: '首页',
    link: '/',
    icon: 'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/tabbar/home%40dis.png',
    selectedIcon:
      'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/tabbar/home.png',
  },
  {
    title: '分类',
    link: '/category',
    icon: 'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/tabbar/category%40dis.png',
    selectedIcon:
      'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/tabbar/category.png',
  },
  {
    title: '购物车',
    link: '/cart',
    icon: 'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/tabbar/cart%40dis.png',
    selectedIcon:
      'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/tabbar/cart.png',
  },
  {
    title: '我的',
    link: '/my',
    icon: 'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/tabbar/my%40dis.png',
    selectedIcon:
      'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/tabbar/my.png',
  },
];

const IconC: React.FC<IconCPropsType> = (props) => {
  return (
    <div
      style={{
        width: '22px',
        height: '22px',
        background: `url(${props.icon}) center center /  21px 21px no-repeat`,
      }}
    />
  );
};

const TabBarC: React.FC<TabBarCPropsType> = (props) => {
  const handlePress = (link: string): void => {
    history.push(link);
  };

  return (
    <div className="tab-bar">
      <TabBar
        onChange={(link) => {
          handlePress(link);
        }}
      >
        {menuList.map((item) => {
          return (
            <TabBar.Item
              title={item.title}
              key={item.link}
              icon={(active) => (
                <IconC icon={active ? item.selectedIcon : item.icon}></IconC>
              )}
            ></TabBar.Item>
          );
        })}
      </TabBar>
    </div>
  );
};

export default TabBarC;
