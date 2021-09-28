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
        <Item
          arrow="horizontal"
          onClick={() => {
            history.push('/use-ref-page');
          }}
        >
          useRef&&forwardRef
        </Item>
        <Item
          arrow="horizontal"
          onClick={() => {
            history.push('/react-slot');
          }}
        >
          react slot
        </Item>
        <Item
          arrow="horizontal"
          onClick={() => {
            history.push('/use-memo-page');
          }}
        >
          useMemo
        </Item>
        <Item
          arrow="horizontal"
          onClick={() => {
            history.push('/use-reducer-page');
          }}
        >
          useReducer
        </Item>
        <Item
          arrow="horizontal"
          onClick={() => {
            history.push('/use-context-page');
          }}
        >
          useContext
        </Item>
      </List>
    </div>
  );
};

export default learning;
