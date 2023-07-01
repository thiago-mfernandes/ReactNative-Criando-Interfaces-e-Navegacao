import * as S from "./styles";
import Icon from "react-native-vector-icons/Feather";

import { useState } from "react";
import { Header } from "../../components/Header";
import { theme } from "../../theme";
import { Highlight } from "../../components/Highlight";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "../../storage/group/groupCreate";
import { AppError } from "../../utils/AppError";
import { Alert } from "react-native"

export function NewGroup(){

  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleNewGroup(){
    try {
      if(group.trim().length === 0){
        return Alert.alert("Novo Grupo", "Informe o nome da turma.")
      }
      //armazena no storage o estado capturado no input
      await groupCreate(group);      
      //passo o grupo por parametro pela rota players
      navigation.navigate('players', { group: group });
      
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo.");
        console.log(error);
      }
    }
  }

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
          subtitle="Crie um grupo e adicione pessoas" 
        />
        <Input 
          onChangeText={text => setGroup(text)} //qdo alterar o texto, seta o estado
          placeholder="Nome da Grupo"
        />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNewGroup}/>
      </S.Content>
    </S.Container>
  );
}