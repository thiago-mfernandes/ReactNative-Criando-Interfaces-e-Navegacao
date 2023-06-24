import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";
import { FilterStyleProps } from "./styles";

type FilterProps = TouchableOpacityProps & FilterStyleProps & {
  title: string;
}

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return(
    <S.Container {...rest} isActive={isActive}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}