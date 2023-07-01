import * as S from "./styles";
import Icon from "react-native-vector-icons/Feather";

import { FlatList, Alert, TextInput } from "react-native";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "styled-components/native";

import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Filter } from "../../components/Filter";
import { PlayCard } from "../../components/PlayCard";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AppError } from "../../utils/AppError";
import { playerAddByGroup } from "../../storage/player/playerAddByGroup";
import { playersGetByGroup } from "../../storage/player/playersGetByGroup";
import { playersGetByGroupAndTeam } from "../../storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "../../storage/player/PlayerStorageDTO";
import { playerRemovedByGroup } from "../../storage/player/playerRemovedByGroup";
import { groupRemoveByName } from "../../storage/group/groupRemoveByName";
import { Loading } from "../../components/Loading";

interface RouteParams {
  group: string;
}

//useRef é usado para anotar a referencia de um componente e acessar na arvore de elementos

export function Players(){
  const [isLoading, setIsLoading] = useState(true);
  const { colors } = useTheme();
  const [team, setTeam] = useState('Time 01');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState('');

  const newPlayerInputRef = useRef<TextInput>(null);

  const route = useRoute();
  const navigation = useNavigation();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    if(newPlayerName.trim().length === 0) {
      return Alert.alert("Nova Pessoa", "Informe o nome da pessoa para adicionar.");
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      //passo o jogador e o grupo
      await playerAddByGroup(newPlayer, group);

      newPlayerInputRef.current?.blur();

      setNewPlayerName('');
      //substitui o players no useEffect(() = {...},[team, players])
      fetchPlayersByTeam();
      const players = await playersGetByGroup(group);
      console.log(players)
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert("Nova Pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova Pessoa", "Não foi possível adicionar uma nova pessoa.");
      }
    }
  }

  async function fetchPlayersByTeam(){
    try {
      //aplico loading na pagina
      setIsLoading(true);

      // recebo os jogadores de cada time atraves da funcao
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
      
    } catch (error) {
      console.log(error);
      Alert.alert("Pessoas", "Não foi possível carregar as pessoas do time selecionado.")
    } finally {
      //setar o loading como falso
      setIsLoading(false);      
    }
  }

  async function groupRemove(){
    try {
      await groupRemoveByName(group);
      navigation.navigate('groups');
    } catch (error) {
      console.log(error);
      Alert.alert("Remover grupo", "Não foi possível remover o grupo.")
    }
  }

  async function handleRemovePlayer(playerName: string){
    try {
      await playerRemovedByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert("Remover pessoa", "Não foi possível remover essa pessoa.");
    }
  }

  async function handleGroupRemove() {
    Alert.alert("Remover", "Deseja remover o Grupo?",[
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => groupRemove()}
    ]);    
  }

  useEffect(() => {
    //executa a função de fetch, carrega a lista de players que tenho
    fetchPlayersByTeam();
    //se meu filtro de team mudar, ou se algum jogador for adicionado, o useEffect é executado e a tela re-renderizada com o nome do novo jogador, ou, apos o jogador ser adicionado, chamo o fetch na propria funcao de adicionar
  },[team]);

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight 
        title={group}
        subtitle="Adicione a galera e separe os times"
      />

      <S.Form>
        <Input
          inputRef={newPlayerInputRef} //dentro do componente vou obter a referencia
          onChangeText={setNewPlayerName}
          value={newPlayerName}//input controlado
          placeholder="Nome da pessoa"
          autoCorrect={false} //input que pode receber apelidos, outros..
          onSubmitEditing={handleAddPlayer}//chama essa funcao no botao de enviar do teclado
          returnKeyType="done"//confirma a execucao
        />
        <Icon
          name="plus"
          size={32}
          color={colors.green_700}
          style={{ alignSelf: "center" }}
          onPress={handleAddPlayer}
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

      {
        isLoading ? <Loading /> : 
        <FlatList 
          data={players}
          keyExtractor={ item => item.name }
          // item da lista
          renderItem={({ item }) => (
            <PlayCard 
              name={item.name} 
              onRemove={() => handleRemovePlayer(item.name)}
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
      }
      <Button 
        title="Remover Turma"
        type="secondary"
        onPress={handleGroupRemove}
      />
    </S.Container>
  );
}