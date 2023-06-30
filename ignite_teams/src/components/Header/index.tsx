import * as S from "./styles";

import Icon from 'react-native-vector-icons/Feather';
import Logo from "../../assets/logo.png";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

interface BackButtonProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: BackButtonProps) {

  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleGoHome(){
    navigation.navigate('groups');

    //o metodo goBack() volta para a tela anterior
    //navigation.goBack();
  }

  return (
    <S.Container>
      {
        showBackButton &&
        <S.BackButton onPress={handleGoHome}>
          <Icon 
            name="chevron-left" 
            size={32} 
            color={colors.white} 
          />          
        </S.BackButton>
      }
      <S.Logo source={Logo} />
    </S.Container>
  );
}