import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

/**
 * herdadando, ou seja:
 * styled(TouchableOpacity),
 * o typescript entende melhor a tipagem, do que colocar entre crase
 */

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.md}px;
    color: ${theme.colors.gray_200};
    font-family: ${theme.fontFamily.regular};
  `};
`;