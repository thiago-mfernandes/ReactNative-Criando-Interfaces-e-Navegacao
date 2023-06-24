import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.gray_500};
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 6px;
`;

export const Name = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${({ theme }) => theme.fontSize.md}px;
    color: ${({ theme }) => theme.colors.gray_200};
    font-family: ${({ theme }) => theme.fontFamily.regular};
  `};
`;
