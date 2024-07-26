import { useContext } from "react";
// import CompA from "./CompA";
import CompB from "./CompB";
import './App.css';
import { ThemeContext } from "./ThemeContext";

function App() {
    const { handleToggle } = useContext(ThemeContext);
    return (
        <div className="App">
            <CompB />
            <button onClick={handleToggle}>Toggle</button>
        </div>
    );
}

export default App;
