import { useState } from "react";
import { GroupCard } from "../../components/GroupCard";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import * as S from "./styles";
import { FlatList } from "react-native";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";

export function Groups() {

  const[groups, setGroups] = useState<string[]>([]);

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma." />

      <FlatList 
        data={groups}
        //keyExtractor recebe um parametro item, nao da pra mudar
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={String(item)}
            //onPress={() => {}}
         />
        )}
        //qual componente quero renderizar quando minha lista estiver vazia
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?"/>
        )}
        //vai centralizar a lista vazia
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      /> 

      <Button title="Criar Nova Turma" /> 
    </S.Container>
  );
}

