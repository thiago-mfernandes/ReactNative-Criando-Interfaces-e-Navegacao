import * as S from "./styles";
import { Header } from "../../components/Header";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "../../theme";
import { Highlight } from "../../components/Highlight";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function NewGroup(){
  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <Icon 
          name="users" 
          size={56} 
          color={theme.colors.green_700} 
          style={{ alignSelf: "center" }} 
        />
        <Highlight 
          title="Nova Turma" 
          subtitle="Crie o grupo para adicionar pessoas:" 
        />
        <Input placeholder="Nome da Turma"/>
        <Button title="Criar" style={{ marginTop: 20 }}/>
      </S.Content>
    </S.Container>
  );
}