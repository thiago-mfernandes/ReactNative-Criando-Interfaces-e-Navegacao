import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Groups } from "../screens/Groups";
import { NewGroup } from "../screens/NewGroup";
import { Players } from "../screens/Players";


const { Navigator, Screen } = createNativeStackNavigator();
/**
 *  1. Navigator: é o roteador
 *  2. Screen: é a interface/tela, e recebe duas props:
 *  2.1 name=" " nome da rota
 *  2.1 component=" " nome do componente que vai ser exibido para essa rota
 */

export function AppRoutes() {
  return (
    <Navigator 
      initialRouteName="groups" 
      screenOptions={{ headerShown: false }}//remove o cabecalho
    >
      <Screen name="groups" component={Groups}/>
      <Screen name="new" component={NewGroup}/>
      <Screen name="players" component={Players}/>
    </Navigator>
  );
}
