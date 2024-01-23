import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >Increment</button>
      <h1>{count}</h1>
    </>
  );
}

export default App;
