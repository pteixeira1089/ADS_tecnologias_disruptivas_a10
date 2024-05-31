import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import { unstable_createMuiStrictModeTheme } from "@mui/material";
import { createTheme } from "@mui/material";
import React from "react";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#004d40',
    },
    secondary: {
      main: '#ff5722',
    },
  },
})


function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <ListarTarefa />
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
