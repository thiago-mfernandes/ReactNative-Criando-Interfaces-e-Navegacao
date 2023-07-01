import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/AppError";
import { player_collection } from "../storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string){
  try {
    //pegar os jogadores deste grupo
    const storedPlayers = await playersGetByGroup(group);
    //verificacao: se ja existe alguem em storedPlayers com o mesmo nome de newPlayer, o metodo filter retorna em playerAlreadyExists o valor
    const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name);

    if(playerAlreadyExists.length > 0){
      throw new AppError("Essa pessoa já esta cadastrada neste time.");
    }

    //passo de objeto pra texto
    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${player_collection}-${group}`, storage);
  } catch (error) {
    throw(error)
  }
}
