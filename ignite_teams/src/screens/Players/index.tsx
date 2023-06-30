import * as S from "./styles";
import Icon from "react-native-vector-icons/Feather";

import { FlatList } from "react-native";
import { useState } from "react";
import { useTheme } from "styled-components/native";

import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Filter } from "../../components/Filter";
import { PlayCard } from "../../components/PlayCard";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";
import { useRoute } from "@react-navigation/native";

interface RouteParams {
  group: string;
}

export function Players(){
  const { colors } = useTheme();
  const [team, setTeam] = useState('Time 01');
  const [players, setPlayers] = useState([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight 
        title={group}
        subtitle="Adicione a galera e separe os times"
      />

      <S.Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false} //input que pode receber apelidos, outros..
        />
        <Icon
          name="plus"
          size={32}
          color={colors.green_700}
          style={{ alignSelf: "center" }}
        />
      </S.Form>
      <S.HeaderList>
        <FlatList 
          data={['Time 01', 'Time 02']}
          keyExtractor={ item => item }
          renderItem={({ item }) => (
            <Filter 
              title={item} 
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal //faz a flatlist ficar na horizontal
        />
        <S.TotalPlayers>
          {players.length}
        </S.TotalPlayers>
      </S.HeaderList>

      <FlatList 
        data={players}
        keyExtractor={ item => item }
        // item da lista
        renderItem={({ item }) => (
          <PlayCard 
            name={item} 
            onRemove={() => {}}
          />
        )}
        //lista vazia
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
        showsVerticalScrollIndicator={false} //barra de rolagem
        /**
         * 1.posso passar um array no container, sendo a primeira propriedade aplicada qdo a flalist chegar ao fim, vai ter um padding bottom
         * 2.na segunda propriedade, uma condicao que soh vai ser aplicada se nao houver players para centralizar o texto de lista vazia no centro da tela
         */
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />
      <Button 
        title="Remover Turma"
        type="secondary"
      />
    </S.Container>
  );
}