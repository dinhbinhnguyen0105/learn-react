import { useContext } from "react";
import Child1 from "./Child1";
import { ThemeContext } from './ThemeContext';

import './App.css'

function App() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className='app'>
      <button onClick={() => themeContext.toggleTheme()}>Toggle theme </button>
      <Child1 />
    </div>
  );
}

export default App;