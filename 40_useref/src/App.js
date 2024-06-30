import { useState, useRef, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(60);
  const timerID = useRef();
  const prevCounter = useRef();

  useEffect(() => {
    prevCounter.current = counter;
  }, [counter]);

  const handleStart = () => {
    timerID.current = setInterval(() => {
      setCounter(prev => prev - 1);
    }, 500);
  }

  const handleStop = () => {
    clearInterval(timerID.current);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <div className='button-container'>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}

export default App;
