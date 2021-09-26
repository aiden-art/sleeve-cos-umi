import React, { useState, useLayoutEffect, useEffect } from 'react';
import { request } from 'umi';
import './index.scss';

//------------useEffect与useLayoutEffect区别start----------//

// const useEffectPage: React.FC = () => {
//   const [color, setColor] = useState('red');
//   useLayoutEffect(() => {
//     const myDivEl = document.getElementById('myDiv');
//     console.log(myDivEl);
//     //在页面渲染之前弹出,此时DOM已修改完成但未渲染到页面
//     alert(color);
//   });
//   useEffect(() => {
//     //页面渲染完成之后调用
//     console.log('color', color);
//   });
//   return (
//     <div>
//       <div id="myDiv" style={{ background: color }}>
//         颜色
//       </div>
//       <button onClick={() => setColor('red')}>红</button>
//       <button onClick={() => setColor('yellow')}>黄</button>
//       <button onClick={() => setColor('blue')}>蓝</button>
//     </div>
//   );
// };

//------------useEffect与useLayoutEffect区别end----------//

//---------------优雅的fetch Data start------------------//
const useEffectPage: React.FC = () => {
  const [data, setData] = useState([]);

  //  这种方式虽然可以运行但是会发出警告，因为async默认返回隐含的promise
  //  但useEffect函数要么返回清除副作用函数，要么就不返回任何内容
  //   useEffect(async () => {
  //     const result = await request(
  //       'https://hn.algolia.com/api/v1/search?query=redux',
  //     );
  //     setData(result);
  //   }, []);

  //推荐方式
  useEffect(() => {
    const fetchData = async () => {
      const result = await request(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );
      console.log(result);
      setData(result);
    };
    fetchData();
  }, []);
  return <div>useEffect</div>;
};
//---------------优雅的fetch Data end------------------//

export default useEffectPage;
