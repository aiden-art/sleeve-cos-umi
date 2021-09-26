import React from 'react';
import { history } from 'umi';
import { List } from 'antd-mobile';
import './index.scss';

const Item = List.Item;
const learning: React.FC = () => {
  return (
    <div className="learning-page">
      <List>
        <Item
          arrow="horizontal"
          onClick={() => {
            history.push('/use-state-page');
          }}
        >
          useState
        </Item>
        <Item
          arrow="horizontal"
          onClick={() => {
            history.push('/use-effect-page');
          }}
        >
          useEffect&useLayoutEffect
        </Item>
        <Item arrow="horizontal" onClick={() => {}}>
          useMemo
        </Item>
        <Item arrow="horizontal" onClick={() => {}}>
          useCallback
        </Item>
      </List>
    </div>
  );
};

export default learning;
