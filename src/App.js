import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import themes from "./assets/themes";
import { set as setScreen } from "./store/screenSlice";

function App() {
  const dispatch = useDispatch();

  const screen = useSelector((state) => state.screen);
  const theme = screen.theme;

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(setScreen({ screenWidth: window.innerWidth }));
    });

    return () => {
      window.removeEventListener("resize", null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    Object.keys(themes[theme]).forEach((key) => {
      document.documentElement.style.setProperty(
        `--${key}`,
        themes[theme][key]
      );
    });
  }, [theme]);

  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return <ThemeProvider theme={muiTheme}></ThemeProvider>;
}

export default App;
