import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";
import MaterialIcons from "react-native-vector-icons/glyphmaps/MaterialIcons.json";

interface ButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons;
  type?: S.ButtonIconStyleProps;
}

export function ButtonIcon({ icon, type = "primary", ...rest }: ButtonIconProps) {
  return (
    <S.Container {...rest}>
      <S.Icon name={icon} type={type}/>
    </S.Container>
  );
}