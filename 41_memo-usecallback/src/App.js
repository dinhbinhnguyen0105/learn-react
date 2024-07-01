import { useCallback, useState } from 'react';
import UseCallback from './UseCallback';
// import Memo from './Memo';


/**
 * memo không phải là một HOOK, nó là một Higher order component 
 * memo dùng để ghi nhớ các props của một component để quyết định có render lại component đó không (nếu các props thay đổi thì sẽ render lại component được bọc trong memo)
 * 
 * useCallback(callback, [deps]); <callback là hàm tự tạo> <deps điều kiện để chạy lại callback>
 *  => Tránh tạo ra hàm mới không cần thiết trong component (Đôi khi sẽ tạo ra những hàm mới khiến component re-render lại mặc dù đã sử dụng memo )
 *  
 * Nếu sử dụng memo thì phải sử dụng useCallback cho các props là func 
 */

function App() {
  const [counter, setCounter] = useState(0);
  const handleCrease = useCallback(() => {
    setCounter(prev => prev + 1);
  }, []);

  return (
    <div className="App">
      <div className='counter'>
        <h1>{counter}</h1>
        <UseCallback onIncrease={handleCrease} />
      </div>
    </div>
  );
  // return (
  //   <div className="App">
  //     <div className='counter'>
  //       <Memo counter={counter} />
  //       <h1>{counter}</h1>
  //       <button onClick={() => setCounter(counter + 1)}>Click</button>
  //     </div>
  //   </div>
  // );
}

export default App;
