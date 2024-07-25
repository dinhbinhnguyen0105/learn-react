import { useState, createContext } from "react";

const ThemeContext = createContext();
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('ligth');
    const toggleTheme = () => setTheme(theme === 'ligth' ? 'dark' : 'ligth');
    const value = { theme, toggleTheme };
    return (
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };