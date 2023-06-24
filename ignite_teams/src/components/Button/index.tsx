import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type?: S.ButtonStyleProps
}

export function Button({ title, type = 'primary', ...rest }: ButtonProps){
  return (
    <S.Container type={type} {...rest}>
      <S.Title>
        {title}
      </S.Title>
    </S.Container>
  );
}