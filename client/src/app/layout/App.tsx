import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
import React, { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const paletteType = isDarkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    },
  });

  const handleChange = () => {
    setIsDarkMode(prev => !prev)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header isDarkMode={isDarkMode} toggleThemeMode={handleChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
};

export default App;
