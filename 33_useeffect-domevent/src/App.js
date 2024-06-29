import { useState, useEffect } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  return (

    <div className="App">
      <button
        onClick={() => setToggle(!toggle)}
      >Toggle</button>
      { toggle ? <Content /> : <></>}
    </div>
  );
}

function Content() {
  const [stateSize, setStateSize] = useState({ width: window.innerWidth, height: window.innerHeight});
  useEffect(() => {
    const handleOnResize = () => {
      setStateSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleOnResize);

    //Cleanup func
    return () => {
      window.removeEventListener('resize', handleOnResize);
    };
  }, []);

  return (
    <div className="content-container">
      <h1>
          Width: {stateSize.width}; Height: {stateSize.height}
        </h1>
    </div>
  );
}

export default App;
