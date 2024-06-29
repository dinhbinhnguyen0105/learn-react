import { useState } from 'react';

function App() {
  // const [state, useState] = useState(1);
  const [counter, setCounter] = useState(1);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
