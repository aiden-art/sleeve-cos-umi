# useReducer

useReduceruseReducer 接受的第一个参数是一个函数，我们可以认为它就是一个 reducer , reducer 的参数就是常规 reducer 里面的 state 和  action ,返回改变后的 state , useReducer 第二个参数为 state 的初始值 返回一个数组，数组的第一项就是更新之后 state 的值 ，第二个参数是派发更新的 dispatch 函数。

useState底层就是一个简单版的useReducer