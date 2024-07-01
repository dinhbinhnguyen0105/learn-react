import { useReducer, useState } from "react";

/**
 * useReducer();
 * =>  Cung cấp thêm lựa chọn để sử dụng state trong function component (đối với component có nhiều state hoặc state phức tạp thì nên sử dụng useReducer() )
 * 
 */

/**
 * useState():
 * 1. Init state: 0
 * 2. Actions: Up (state + 1) / Down (state - 1)
 * 
 * useReducer():
 * 1. Init state
 * 2. Actions: Up (state + 1) / Down (state - 1)
 * 3. Reducer
 * 4. Dispatch
 */

// 1. Init state (Định nghĩa state):
const initState = 0;
// 2. Actions (Định nghĩa các action ):
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
// 3. Reducer (Tạo ra reducer, nhận đầu vào <state & action> và trả ra đầu ra mới <Tuỳ vào yêu cầu bài toán & đầu vào của reducer >; đầu vào & đầu ra luôn bảo lưu kiểu dữ liệu) :
 const reducer = (state, action ) => {
  switch(action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid action'); 
  }
 }


function App() {
  // Dispatch
  const [counter, dispath] = useReducer(reducer, initState);

  const handleUp = () => {
    setCounter(prev => prev  + 1);
  }
  
  const handleDown = () => {
    setCounter(prev => prev  - 1);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleUp}>UP</button>
      <button onClick={handleDown}>DOWN</button>
    </div>
  );
}

export default App;
