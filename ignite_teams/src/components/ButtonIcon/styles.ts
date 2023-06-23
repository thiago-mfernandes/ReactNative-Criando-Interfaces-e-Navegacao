import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"

export type ButtonIconStyleProps = 'primary' | 'secondary';

interface ButtonIconProps {
  type: ButtonIconStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

//attrs acessa os atributos do elemento estilizado !!
export const Icon = styled(MaterialIcon).attrs<ButtonIconProps>(({ theme, type }) => ({
  size: 24,
  color: (type === 'primary') ? theme.colors.green_700 : theme.colors.red
}))``;