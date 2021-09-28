# useEffect api

### 关于useeffect需要知道的

#### 什么是副作用

副作用：指那些没有发生在数据向视图转换过程中的逻辑，如ajax请求，访问原生dom，本地持久化缓存，绑定解绑事件等

副作用可以分为两类：需要清除的和不需要清除的

### useEffect

useEffect执行顺序: 组件更新挂载完成 -> 浏览器 dom 绘制完成 -> 执行 useEffect 回调。

useEffect给函数组件增加了操作副作用的能力。它跟class组件中的componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。

useeffect接受一个函数，该函数会在组件渲染到屏幕之后才会执行，该函数要么返回一个能清除副作用的函数，要么就不返回任何值

与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。大多数情况下，effect 不需要同步地执行。在个别情况下（例如测量布局），有单独的 useLayoutEffect Hook 供你使用，其 API 与 useEffect 相同。

### useLayoutEffect

useLayoutEffect 执行顺序: 组件更新挂载完成 -> 执行 useLayoutEffect 回调-> 浏览器dom绘制完成。

- useEffect在全部渲染完毕后才会执行

- uselayoutEffect会在浏览器layout之后，painting之前执行

- 可以使用useLayoutEffect来读取Dom布局并同步触发重渲染
