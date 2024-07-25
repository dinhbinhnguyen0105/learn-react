// import { useReducer, useState } from "react";
// import UseReducerTur from "./UseReducerTur";
import Todo from "./Todo";

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
// 2. Actions (Định nghĩa các action ):
// 3. Reducer (Tạo ra reducer, nhận đầu vào <state & action> và trả ra đầu ra mới <Tuỳ vào yêu cầu bài toán & đầu vào của reducer >; đầu vào & đầu ra luôn bảo lưu kiểu dữ liệu) :

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
