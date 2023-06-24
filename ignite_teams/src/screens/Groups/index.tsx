import * as S from "./styles";
import { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native"

import { GroupCard } from "../../components/GroupCard";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";

export function Groups() {

  const[groups, setGroups] = useState<string[]>(['Turma da Igreja']);

  //useNavigation é o roteador
  /**
   * há duas estrategias de navegacao:
   * 1. A primeira é utilizando o navigation através da propriedades que o NavigationContainer compartilha com a aplicação. Bastar pegar pela pagina Groups({ naviagtion })
   * 2.  segunda é utilizando o useNavigation, sendo essa estratégia que iremos utilizar durante o desenvolvimento da aplicação.
   */
  const navigation = useNavigation();

  function handleNewGroup() {
    //no primeiro momento, nao aparece uma sugestao das rotas disponiveis, entao fiz um arquivo de tipagem no @types

    //navigation.navigate('new'); 1s estrategia
    navigation.navigate('new'); //2a estrategia
    
  }

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
            onPress={() => {}}
         />
        )}
        //qual componente quero renderizar quando minha lista estiver vazia
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?"/>
        )}
        //vai centralizar a lista vazia
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        showsVerticalScrollIndicator={false}
      /> 

      <Button title="Criar Nova Turma" onPress={handleNewGroup}/> 
    </S.Container>
  );
}

