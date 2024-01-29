const App = () => {
  const addNums = (num1, num2) => {
    return num1 + num2;
  };
  const x = useCustomMemo(addNums);
  console.log(x(1,2));
  console.log(x(1,2));
  return (
    <>
      <h1>React Intermediate</h1>
    </>
  );
};
export default App;

const useCustomMemo = (fn) => {
  const cache = {};
  
  return (...args) => {
    if (args.toString() in cache) {
      console.log(cache);
      return cache[args.toString()];
    }
    console.log("fire");
    const result = fn(...args);
    cache[args.toString()] = result;
    return result;
  };
};
