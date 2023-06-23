import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

//essa tipagem vai ser reaproveitada
export type ButtonStyleProps = 'primary' | 'secondary';
//essa vai ser interna desse arquivo
interface ButtonProps {
  type: ButtonStyleProps;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) => 
    type == "primary" ? theme.colors.green_700 : theme.colors.red_dark
  };
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.md}px;
    font-family: ${theme.fontFamily.bold};
    color: ${theme.colors.white};  
  `}

`;