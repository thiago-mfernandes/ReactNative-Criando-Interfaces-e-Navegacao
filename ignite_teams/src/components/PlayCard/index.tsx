import * as S from "./styles";

import { useTheme } from "styled-components/native";
import Icon from "react-native-vector-icons/Feather";

type PlayCardProps = {
  name: string;
  onRemove: () => void;
}

export function PlayCard({ name, onRemove }: PlayCardProps){
  const { colors } = useTheme();
  return(
    <S.Container>
      <Icon 
        name="user"
        size={24}
        color={colors.gray_200}
        style={{ marginLeft: 16, marginRight: 4 }}
      />
      <S.Name>
        {name}
      </S.Name>
      <Icon 
        name="x"
        size={24}
        color={colors.red_dark}
        style={{ marginRight: 16 }}
        onPress={onRemove}
      />
    </S.Container>
  );
}
