import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(false);
    const handleToggle = () => {
        setTheme(theme ? false : true);
    };
    const value = {
        theme, handleToggle
    };

    return (
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    );
}

export {
    ThemeContext,
    ThemeProvider,
};