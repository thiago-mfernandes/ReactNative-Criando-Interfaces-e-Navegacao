import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export function Routes(){
  return (
    //carrega um contexto de navegacao para as rotas serem utilizadas
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}