import { TextInputProps } from "react-native";
import * as S from "./styles";
import { useTheme } from "styled-components/native";

interface InputProps extends TextInputProps {

}

export function Input({ ...rest}: InputProps){
  //devolve o tema do styled components
  const { colors } = useTheme();

  return(
    <S.Container 
      {...rest} 
      placeholderTextColor={colors.gray_300} 
    />
  );
}