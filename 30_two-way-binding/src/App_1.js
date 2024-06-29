import { useState } from "react";

const gifs = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB Keyboard',
]

function App(){

  const [gif, setGif] = useState('Chưa có phần thưởng');

  const handleClick = () => {
    const gifIndex = Math.floor(Math.random() * gifs.length);
    setGif(gifs[gifIndex]);
  }

  return (
    <div className="App">
        <div style={{padding: 32}}>
          <h1>{gif}</h1>
          <button onClick={handleClick}>Lấy thưởng</button>
        </div>
    </div>
  );
}

export default App;