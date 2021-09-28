# React.useMemo & React.memo

### useMemo

useMemo是一个记住函数输出的 React 钩子。这就对了。useMemo 接受两个参数：一个函数和一个依赖项列表。useMemo将调用该函数并返回其返回值。然后，每次useMemo再次调用时，它都会首先检查是否有任何依赖项发生了变化。如果没有，它将返回缓存的返回值，而不是调用函数。如果它们发生了变化，useMemo将再次调用提供的函数并重复该过程。

说明：

虽然性能优化是一项崇高的追求，但是这样做同样会有副作用

在使用React.useMemo的情况下，需要注意如下几个问题：

- 开销。
  
  钩子本身引入了新的复杂逻辑，它可能引入比它解决的更多的性能问题。除非这是一个非常昂贵的计算，否则不要应用 useMemo，或者，如果您不确定，您可以对两种方式进行基准测试并做出明智的决定。

- 没有保证。

  根据React 文档，您可能永远不会依赖useMemo. 换句话说，虽然useMemo应该仅在依赖项更改时调用，但这并不能保证。如果useMemo在每次渲染时调用回调，您的应用程序必须仍然运行良好（虽然可能有点慢）。

### React.memo

考虑 React.memo，所有这些问题也适用。

React.memo应该只应用于纯组件。另一个问题与 Redux/Context 和 hooks 有关。在 hooks 之前，Redux 选择器通过 props 传递存储值并React.memo捕获它们。但是，如果您正在使用useSelector/useContext,React.memo将不会在这些更改时重新渲染您的组件。由于这些复杂性，我建议不要使用React.memo，因为useMemo在大多数情况下应该足够了。

### useCallback

 useCallback与 useMemo 几乎相同，但用于函数。事实上，useCallback(fn, deps)相当于useMemo(() => fn, deps)。useCallback应该在使用大量回调函数时通过不重新声明它们来加速应用程序，除非依赖项发生变化。