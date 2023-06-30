import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_600};
  padding: 24px;
`;

export const Text = styled.Text`
  font-size: 50px;
`;