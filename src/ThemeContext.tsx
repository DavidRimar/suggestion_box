import { createContext, useContext, useState } from "react";

const ThemeContext = createContext('light');

const lightPalette = {
  primary: {
    300: '#A3A4FF',
    400: '#8884FF',
    500: '#6C5EFA',
    600: '#573CFA',
  },
};

const darkPalette = {
  primary: {
    300: '#910A67',
    400: '#720455',
    500: '#3C0753',
    600: '#030637',
  },
};

export const themes = {
  light: {
    background: lightPalette.primary[500],
    button: lightPalette.primary[300]
  },
  dark: {
    background: darkPalette.primary[500],
    button: darkPalette.primary[300]
  },
};


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);