import { ThemeProvider } from "styled-components";
import { Groups } from "./src/screens/Groups";
import { theme } from "./src/theme";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content" //cor dos icones
        backgroundColor="transparent"
        translucent //iniciar o StatusBar no topo do dispositivo
      />
      <Groups />
    </ThemeProvider>
  );
}
