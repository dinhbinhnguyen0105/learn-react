 import { useState, useRef } from 'react';

function App() {
  const [countdown, setCountDown] = useState(60);
  const timerID = useRef();

  const onStart = () => timerID.current = setInterval(() => setCountDown(prev => prev - 1), 1000); 
  const onStop = () => clearInterval(timerID.current);

  console.log(countdown);

  return (
    <div className='app'>
      <div className='countdown-display'><h1>{countdown}</h1></div>
      <div className='countdown-btn-box'>
        <button onClick={onStart}>start</button>
        <button onClick={onStop}>stop</button>
      </div>
    </div>
  );
}

export default App;