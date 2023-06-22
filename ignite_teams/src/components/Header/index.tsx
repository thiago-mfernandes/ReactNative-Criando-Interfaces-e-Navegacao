import * as S from "./styles";
import Logo from "../../assets/logo.png";
import Icon from 'react-native-vector-icons/FontAwesome';

interface BackButtonProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = true }: BackButtonProps) {
  return (
    <S.Container>
      {
        showBackButton &&
        <S.BackButton>
          <Icon name="chevron-left" size={32} color="#fff" />

          
        </S.BackButton>
      }
      <S.Logo source={Logo} />
    </S.Container>
  );
}