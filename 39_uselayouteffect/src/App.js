import { useState, useEffect, useLayoutEffect } from "react";

/**
 * 1. useEffect
 *  - Cập nhập lại state
 *  - Cập nhập lại DOM (mutated) {Trong JS, khi chỉnh sửa lại một phần nhỏ thì gọi lại đột biến DOM (mutated)}
 *  - Render lại UI
 *  - Gọi Cleanup nếu deps thay đổi
 *  - Gọi useEffect callback
 * 
 * 2. useLayoutEffect
 *  - Cập nhập lại state
 *  - Cập nhập lại DOM (mutated) {Trong JS, khi chỉnh sửa lại một phần nhỏ thì gọi lại đột biến DOM (mutated)}
 *  - Gọi Cleanup nếu deps thay đổi
 *  - Gọi useEffect callback
 *  - Render lại UI
 * 
 */

function App() {
  const [counter, setCounter] = useState(0);
  useLayoutEffect(() => {
    if(counter > 3) setCounter(0);
  }, [counter]);

  const handleOnClick = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button
        onClick={handleOnClick}
      >Click me</button>
    </div>
  );
}

export default App;
