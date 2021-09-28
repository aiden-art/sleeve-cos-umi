import Reat, { useState } from 'react';

//-------------------------普通插槽 start ------------------//

// //ts中如何定义children的类型
// //1.使用FC类型
// const ChildComponent: React.FC = ({ children }) => {
//   return <div>{children}</div>;
// };

// //2.使用ReactChild类型
// // type PropsType = {
// //   children: React.ReactChild | React.ReactChild[];
// // };
// // const ChildComponent = ({ children }: PropsType) => {
// //   return <div>{children}</div>;
// // };

// //3.使用ReactNode类型
// // type PropsType = {
// //   children: React.ReactNode;
// // };
// // const ChildComponent = ({ children }: PropsType) => {
// //   return <div>{children}</div>;
// // };

// const ReactSlotPage = () => {
//   return (
//     <div>
//       <ChildComponent>hello world</ChildComponent>
//       <ChildComponent>
//         <h1>hello world</h1>
//       </ChildComponent>
//     </div>
//   );
// };

//-------------------------普通插槽 end ------------------//

//-------------------------具名插槽 start ------------------//
// type PropsType = {
//   header?: () => React.ReactNode;
//   content?: () => React.ReactNode;
//   footer?: () => React.ReactNode;
// };
// const ChildComponent: React.FC<PropsType> = ({ header, content, footer }) => {
//   return (
//     <div>
//       <div className="header">{header?.()}</div>
//       <div className="content">{content?.()}</div>
//       <div className="footer">{footer?.()}</div>
//     </div>
//   );
// };
// const ReactSlotPage = () => {
//   const header = () => {
//     return <header>header</header>;
//   };
//   const content = () => {
//     return <article>article</article>;
//   };
//   const footer = () => {
//     return <footer>footer</footer>;
//   };
//   return (
//     <div>
//       <ChildComponent
//         header={header}
//         content={content}
//         footer={footer}
//       ></ChildComponent>
//     </div>
//   );
// };
//-------------------------具名插槽 start ------------------//

//------------------------作用域插槽 start -----------------//

//vue的作用域插槽的作用是用子组件中的数据在父组件中写插槽内容

type PropsType = {
  element?: (data: any) => React.ReactNode;
};

const ChildComponent: React.FC<PropsType> = ({ children, element }) => {
  const [info] = useState('子组件数据');
  return (
    <div>
      {element?.(info)}
      {children}
    </div>
  );
};

const ReactSlotPage = () => {
  const info = (data: any) => {
    return <span>{data}</span>;
  };
  return (
    <div>
      <ChildComponent element={info}></ChildComponent>
    </div>
  );
};
//------------------------作用域插槽 end -----------------//
export default ReactSlotPage;
