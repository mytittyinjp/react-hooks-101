import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCounthandler = () => {
    setCount(count + 1);
  };
  const incrementCounthandler2 = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCounthandler = () => {
    setCount(count - 1);
  };

  const decrementCounthandler2 = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetCounthandler = () => {
    setCount(0);
  };
  const doubleCountHandler = () => {
    setCount(count * 2);
  };
  const divide3Handler = () => {
    setCount((prevCount) => (prevCount % 3 === 0 ? prevCount / 3 : prevCount));
  };

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={incrementCounthandler}>+</button>
        <button onClick={decrementCounthandler}>-</button>
      </div>
      <div>
        <button onClick={incrementCounthandler2}>+</button>
        <button onClick={decrementCounthandler2}>-</button>
      </div>
      <div>
        <button onClick={resetCounthandler}>Reset</button>
        <button onClick={doubleCountHandler}>*2</button>
        <button onClick={divide3Handler}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;
