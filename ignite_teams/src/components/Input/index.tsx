import * as S from "./styles";

import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

//tipagem para receber a ref
type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
}

export function Input({ inputRef, ...rest}: InputProps){
  
  //devolve o tema do styled components
  const { colors } = useTheme();

  return(
    <S.Container 
      ref={inputRef} //repasse da ref, entao eu consigo pegar esse componente la na pagina players, pra qdo o usuario clicar em adicionar, tirar o foco do input e fechar a caixa de teclado
      {...rest} 
      placeholderTextColor={colors.gray_300} 
    />
  );
}