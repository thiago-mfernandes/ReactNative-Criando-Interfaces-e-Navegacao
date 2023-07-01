import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { player_collection } from "../storageConfig";

export async function playersGetByGroup(group: string) {
  try {
    //obter os jogadores do grupo
    const storage = await AsyncStorage.getItem(`${player_collection}-${group}`);
    //tipar, se houver algo no storage, transformar em objeto, senao, devolver vazio
    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];
    return players
  } catch (error) {
    throw error;
  }
}