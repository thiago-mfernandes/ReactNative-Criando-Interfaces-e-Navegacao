import AsyncStorage from "@react-native-async-storage/async-storage";
import { player_collection } from "../storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerRemovedByGroup(playerName: string, group: string){
  try {
    //pego todos os jogadores de um grupo
    const storage = await playersGetByGroup(group);

    //obtennho todos os jogadores exceto o playerName(jogador deletado)
    const playersWithoutDeletedOne = storage.filter(player => player.name !== playerName);

    //passo pra texto o deletedPlayer
    const players = JSON.stringify(playersWithoutDeletedOne);

    //
    await AsyncStorage.setItem(`${player_collection}-${group}`, players)

  } catch (error) {
    throw error;
  }
}