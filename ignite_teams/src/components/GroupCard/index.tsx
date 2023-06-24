import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

import Icon from "react-native-vector-icons/Feather";
import { theme } from "../../theme";

interface GroupCardProps extends TouchableOpacityProps {
  title: string;
}

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <S.Container {...rest}>
      <Icon 
        name="users" 
        size={32} 
        color={theme.colors.green_700} 
        style={{ marginRight:20}} 
      />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
