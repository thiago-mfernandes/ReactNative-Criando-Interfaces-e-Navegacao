import * as S from "./styles";

import Icon from 'react-native-vector-icons/Feather';
import Logo from "../../assets/logo.png";
import { useTheme } from "styled-components/native";

interface BackButtonProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: BackButtonProps) {

  const { colors } = useTheme();

  return (
    <S.Container>
      {
        showBackButton &&
        <S.BackButton>
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