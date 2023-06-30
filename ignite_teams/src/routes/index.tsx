import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

export function Routes(){
  const { colors } = useTheme();
  return (
    //carrega um contexto de navegacao para as rotas serem utilizadas
    <View style={{ flex: 1, backgroundColor: colors.gray_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View> //essa view previne o efeito de Glitch
  );
}