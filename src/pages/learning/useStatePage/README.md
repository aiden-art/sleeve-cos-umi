# useState api

### 关于useState需要知道的

- 当多次调用useState时，React假设你能保证每次渲染时它们的调用顺序是不变的

  理解：多个useState的调用是按顺序同步调用的，比如说不能在settimeout函数中调用useState,并且按照官方的说法Hook只能在函数组件最外层调用

- 在函数组件中调用useState,组件会将其作为内部的state，并且在组件重复渲染时保留这个state

- useState唯一的参数是初始state

- useState会返回一个数组：一个state，一个更新state函数

    - 在初始化渲染期间，返回的状态（state）与传入的第一个参数（initialState）值相同

    - 更新state函数不会把新的state 和 旧的state进行合并，而是直接替换