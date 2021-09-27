import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';

//------------父组件调用子组件内部方法 start----------//
// interface ChildHandles {
//   chandleChangeTitle: () => void;
// }

// //forwardRef的方法签名：
// //function forwardRef<T, P = {}>(Component: RefForwardingComponent<T, P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
// //T表示引用的元素类型，P为组件的props类型
// let ChildRef = forwardRef<ChildHandles, any>((props, ref) => {
//   const [title, setTitle] = useState('child ref');
//   //通过useimperativeHandle实现对外提供预定义好的接口
//   //该函数会返回一个对象，该对象作为ref引用的current属性的值
//   useImperativeHandle(ref, () => ({
//     chandleChangeTitle: () => {
//       setTitle('changed handle title');
//     },
//   }));
//   return <div>{title}</div>;
// });

// const useRefPage: React.FC = () => {
//   const childRef = useRef<ChildHandles>(null);
//   console.log(childRef);
//   const changeTitle = () => {
//     childRef.current?.chandleChangeTitle();
//   };
//   return (
//     <div>
//       <ChildRef ref={childRef}></ChildRef>
//       <button onClick={changeTitle}>修改标题</button>
//     </div>
//   );
// };

//------------父组件调用子组件内部方法 end-----------//

//------------父组件调用子组件内部DOM元素方法 start-----------//
// const ChildRef = forwardRef<HTMLInputElement>((props, ref) => {
//   return (
//     <>
//       <input type="text" ref={ref} />
//     </>
//   );
// });
// const useRefPage = () => {
//   const inputRef = useRef<HTMLInputElement>(null);
//   const inputFocus = () => {
//     inputRef.current?.focus();
//   };
//   return (
//     <div>
//       <ChildRef ref={inputRef} />
//       <button onClick={inputFocus}>聚焦</button>
//     </div>
//   );
// };
//------------父组件调用子组件内部DOM元素方法 end-----------//

//---------------利用useRef实现vue wacth api start------------------//

//在类组件中可以使用componentDidUpdate这个生命周期实现监听组件数据的变化
// componentDidUpdate(prevProps, prevState){
//     if(prevProps.title !== this.props.title){
//         console.log('props中的title数据改变了');
//     }
//     if(prevState.info !== this.state.info){
//         console.log('state中的info数据改变了');
//     }
// }

//在函数组件中，可以通过useEffect监听数据的变化，但是无法获取改变前的就数据
//由于useRef返回的对象在组件的整个生命周期内保持不变，所以可以利用它来保存旧数据
//自定义hook useWatch实现
function useWatch<T>(
  value: T | undefined,
  callback: (currentValue: T | undefined, prevValue: T | undefined) => void,
  config = { immediate: false },
): () => void {
  const oldValue = useRef<T>();
  //初始化是否执行开关
  const isInit = useRef(false);
  //是否监听开关
  const isWatch = useRef(true);
  useEffect(() => {
    if (isWatch.current) {
      if (!isInit.current) {
        isInit.current = true;
        if (config.immediate) {
          callback(value, oldValue.current);
        }
      } else {
        callback(value, oldValue.current);
      }
      oldValue.current = value;
    }
  }, [value]);

  const unwatch = () => {
    isWatch.current = false;
  };

  return unwatch;
}

const useRefPage = () => {
  const [title, setTile] = useState('hello world');
  useWatch(title, (currentValue, prevValue) => {
    console.log(currentValue, prevValue);
  });
  const changeTitle = () => {
    setTile((title) => {
      return title.toUpperCase();
    });
  };
  return (
    <div>
      <p>{title}</p>
      <button onClick={changeTitle}>change title</button>
    </div>
  );
};
//---------------利用useRef实现vue wacth api end------------------//
export default useRefPage;
