import { useState } from 'react';
import ContentFakeChat from './ContentFakeChat';

function App() {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle ? <ContentFakeChat /> : <></>}
    </div>
  );
}

export default App;
