import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content" //cor dos icones
        backgroundColor="transparent"
        translucent //iniciar o StatusBar no topo do dispositivo
      />
      <Routes />
    </ThemeProvider>
  );
}
