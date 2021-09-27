# useRef && forwardRef

### useRef

useRef返回一个可变的ref对象，其current属性被初始化为传入的参数

useRef返回的ref对象在组件的整个生命周期内保持不变，也就是说每次重新渲染组件时，返回的ref对象都是同一个。

类组件使用React.createRef,函数组件使用useRef,使用react.createRef,每次重新渲染组件都会重新创建ref.

### forwardRef

forwardRef 接收一个函数，函数的入参中第一个是组件的 props，第二个便是外部传递进来的 ref 引用。通过将这个引用在组件中绑定到相应的原生 DOM 元素上，实现了外部直接引用到组件内部元素的目的，所以叫 forwardRef（传递引用）。

- 因为函数组件没有实例，所以函数组件无法像类组件一样可以接受ref属性

- forwardRef可以在父组件中操作子组件的ref对象

- forwardRef可以将父组件中的ref对象转发到子组件中的dom元素上？？？？？

- 子组件接受props和ref作为参数

### useImperativeHandle

- useImperativeHandle可以让你在使用ref时，自定义暴露给父组件的实例值，不能让父组件想干啥干啥

- 在大多数情况下，应当避免使用ref这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用

- 父组件可以使用操作子组件中的多个 ref