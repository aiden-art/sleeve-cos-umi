import React, { useState, useMemo, useCallback } from 'react';

type FibDispalyTYpe = {
  length: number;
};

type NameDisplayType = {
  name: string;
  onChange: (name: string) => void;
};

// ----------------------- 未使用usememo start---------------------- //
// 不使用usememo,当更改name或者length,NameDisplay组件和组件都FibDisplay将重新渲染（并运行昂贵的计算）
// const FibDisplay: React.FC<FibDispalyTYpe> = ({ length }) => {
//   console.log('Calculating numbers & rerendering...');
//   //斐波那契数列
//   const numbers = [1, 1];
//   for (let i = 2; i < length; i++) {
//     numbers[i] = numbers[i - 1] + numbers[i - 2];
//   }

//   return (
//     <p>
//       {length} numbers of the fibonacci sequence: {numbers.join(', ')}
//     </p>
//   );
// };

// const NameDisplay: React.FC<NameDisplayType> = ({ name }) => {
//   console.log('Rerendering name...');
//   return <p>Your name is {name}</p>;
// };

// ----------------------- 未使用usememo end---------------------- //

//----------------------- 使用usememo start ----------------------//

const FibDisplay: React.FC<FibDispalyTYpe> = ({ length }) => {
  console.log('FibDispaly rerendering...');
  //斐波那契数列
  //将昂贵的计算包装在一个函数中，该函数仅在length更改时运行。该组件仍将重新渲染，但除非需要，否则不会运行昂贵的计算。
  const numbers = useMemo(() => {
    console.log('Calculating numbers...');
    const result = [1, 1];
    for (let i = 2; i < length; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result;
  }, [length]);

  return (
    <p>
      {length} numbers of the fibonacci sequence: {numbers.join(', ')}
    </p>
  );
};

//React.memo是一种记住整个组件的方法。只有在 props 改变时才会重新渲染，从而彻底解决我们的问题。
const NameDisplay: React.FC<NameDisplayType> = React.memo(({ name }) => {
  console.log('Rerendering name...');
  return <p>Your name is {name}</p>;
});

//----------------------- 使用usememo end ----------------------//

//----------------------- 使用useCallback start ----------------------//

const UseMemoPage: React.FC = () => {
  const [length, setLength] = useState(3);
  const [name, setName] = useState('John Doe');
  //useCallback可以缓存函数 useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
  const onNameChanged = useCallback((e) => setName(e.target.value), []);
  const onLengthChanged = useCallback(
    (e) => setLength(Number(e.target.value)),
    [],
  );
  //useCallback用于父组件传函数给子组件的情况
  //不使用 改变length的时候NameDisplay组件会重新渲染,因为函数的引用地址改变了
  // const nameChanged = (name: string) => {
  //   console.log('name has changed', name);
  // };
  //使用useCallback，改变length的时候NameDisplay组件不会重新渲染
  const nameChanged = useCallback((name: string) => {
    console.log('name has changed', name);
  }, []);

  return (
    <>
      <input value={name} type="text" onChange={onNameChanged} />
      <NameDisplay name={name} onChange={nameChanged} />
      <hr />
      <input value={length} onChange={onLengthChanged} />
      <FibDisplay length={length} />
    </>
  );
};

//----------------------- 使用useCallback end ----------------------//

export default UseMemoPage;
