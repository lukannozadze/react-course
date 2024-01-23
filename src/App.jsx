import React, { useRef, useImperativeHandle, forwardRef } from 'react';

function App() {
  const btnRef = useRef(null);

  const handleClick = () => {
    if (btnRef.current) {
      btnRef.current.clickButton();
    }
  };

  return (
    <>
      <Test ref={btnRef} />
      <button onClick={handleClick}>Click me to click Test button</button>
    </>
  );
}

const Test = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    clickButton: () => {
      console.log('Button clicked');
    }
  }));

  return <button>Test Button</button>;
});

export default App;