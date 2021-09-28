import React, { useReducer } from 'react';

type actionType = {
  payload?: number;
  name: string;
};

type ReducerType = (state: number, action: actionType) => number;

const UseReducerPage: React.FC = () => {
  // number为更新后的state值,  dispatchNumbner 为当前的派发函数
  const [number, dispatchNumber] = useReducer<ReducerType>((state, action) => {
    console.log(action);
    const { payload, name } = action;
    switch (name) {
      case 'add':
        return state + 1;
      case 'sub':
        return state - 1;
      case 'reset':
        return payload!;
    }
    // return的值为新的state
    return state;
  }, 0);
  return (
    <div>
      当前值：{number}
      {/* 派发更新 */}
      <button onClick={() => dispatchNumber({ name: 'add' })}>增加</button>
      <button onClick={() => dispatchNumber({ name: 'sub' })}>减少</button>
      <button onClick={() => dispatchNumber({ name: 'reset', payload: 666 })}>
        赋值
      </button>
      {/* 把dispatch 和 state 传递给子组件  */}
      {/* <MyChildren  dispatch={ dispatchNumbner } State={{ number }} /> */}
    </div>
  );
};

export default UseReducerPage;
