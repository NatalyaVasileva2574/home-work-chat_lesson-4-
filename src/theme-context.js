import { createContext, useState, useCallback } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

// Providers: Provider<T>;
// Consumers: Provider<T>;

const defaultValue = "default value"
export const ThemeContext = createContext(defaultValue);

const themes = {
  dark: {
    color: "#000",
  },
  light: {
    color: "#fff",
  },
}

const themeMUI = createTheme({
  dark: createTheme({
    palette: {
      primary: {
        main: "#0000",
      }
    }
  }),

  light: createTheme({
    palette: {
      primary: {
        main: "#ff0000",
      }
    }
  }),
});

export const CustomThemeProvider = ({ children, inistialTheme = "light" }) => {
  const [theme, setTheme] = useState({
    theme: themes[inistialTheme],
    name: inistialTheme,
  });

  const themeSetter = useCallback((name) => {
    if (themes[name]) {
      setTheme({
        name,
        theme: theme[name],
      })
    }
  },[])

  return (
    <ThemeContext.Provider value={{ theme, themeSetter }}>
      <ThemeProvider theme={themeMUI[theme.name]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};


