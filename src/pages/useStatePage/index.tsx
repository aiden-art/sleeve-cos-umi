import React, { useState, useEffect, memo } from 'react';
import { Button } from 'antd-mobile';

//--------------修改深层次对象start----------------//

// 当某个state数据是饮用类型时，react组件的更新机制只会对state进行浅比较
// 就是说更新某个复杂数据类型时只要它的引用地址没变，组件就不会重新渲染

// const useStatePage: React.FC = () => {
//   const [filterList, setFilterList] = useState([{ checked: false }]);

//   const changeFilter = () => {
//     console.log('改变filterList');
//     //方法一：

//     //prevList与filterList指向同一个地址,不会出发组件重新渲染
//     // setFilterList((prevList) => {
//     //   prevList[0].checked = !prevList[0].checked;
//     //   return prevList;
//     // });

//     //方法二：

//     //仍然是同一个引用地址，不会触发组件重新渲染
//     // setFilterList((prevList) => {
//     //   let list = prevList;
//     //   list[0].checked = !list[0].checked;
//     //   return list;
//     // });

//     //方法三：

//     //可触发组件更新
//     // setFilterList((prevList) => {
//     //   let list = prevList;
//     //   list[0].checked = !list[0].checked;
//     //   return [...list];
//     // });

//     //方法四

//     //可触发组件更新
//     setFilterList((prevList) => {
//       //如果是对象可以使用Object.assign()方法
//       let list = prevList.slice();
//       list[0].checked = !list[0].checked;
//       return list;
//     });
//   };

//   useEffect(() => {
//     console.log('组件渲染');
//   }, [filterList]);

//   return (
//     <div>
//       <Button onClick={changeFilter}>change state</Button>
//     </div>
//   );
// };

//--------------修改深层次对象end----------------//

//-----------------每次渲染都是独立的闭包start---------------//

//当调用setCount方法时，函数组件会重新渲染，从上到下执行一遍
//当你先点击show alert按钮，然后在点击click me你会发现alert出来的值与界面未保持一致
//每一次渲染都有它自己的Props和state
//每一次渲染都有它自己的事件处理函数
//当点击更新状态时，函数组件都会重新被调用，那么每次渲染都是独立的，取到的值不会受后面操作影响
// const useStatePage: React.FC = () => {
//   console.log('组件渲染');
//   const [count, setCount] = useState(0);

//   const handleAlertClick = () => {
//     setTimeout(() => {
//       alert('You clicked on:' + count);
//     }, 3000);
//   };
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       <button onClick={handleAlertClick}>Show alert</button>
//     </div>
//   );
// };
//-----------------每次渲染都是独立的闭包end---------------//

//---------------------函数式更新start---------------//

// const useStatePage: React.FC = () => {
//   const [number, setNumber] = useState(0);

//   const lazy = () => {
//     setTimeout(() => {
//       //这种方式会使用点击lazy时的state,当你先点击lazy,然后在点几次add,你会发现number会变回点lazy时的值加一
//       // setNumber(number + 1);
//       //这种方式执行时会去获取最新的number值
//       setNumber((number) => number + 1);
//     }, 3000);
//   };

//   return (
//     <div>
//       <p>{number}</p>
//       <button onClick={() => setNumber(number + 1)}>add</button>
//       <button onClick={lazy}>lazy</button>
//     </div>
//   );
// };

//--------------------函数式更新end--------------//

//-------------------惰性初始化state start-------------//

// initialState参数只会在组件的初始化渲染中起作用，后续渲染时会忽略
//如果初始state需要通过复杂计算得到，则可以传入一个函数，在函数中计算并返回初始的state，此函数之灾初始渲染时调用

type UseStatePageProps = {
  number: number;
};
const useStatePage: React.FC<UseStatePageProps> = (props) => {
  //该函数只在初始化渲染时执行一次
  const getInitState = () => {
    console.log('getInitState');
    return {
      number: props.number || 20,
    };
  };

  let [counter, setCounter] = useState(getInitState);

  return (
    <div>
      <p>{counter.number}</p>
      <button onClick={() => setCounter({ number: counter.number + 1 })}>
        +
      </button>
    </div>
  );
};
//-------------------惰性初始化state end-------------//

export default useStatePage;
