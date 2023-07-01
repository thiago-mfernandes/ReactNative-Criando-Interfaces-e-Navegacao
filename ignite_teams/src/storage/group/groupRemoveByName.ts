import AsyncStorage from "@react-native-async-storage/async-storage";
import { group_collection, player_collection } from "../storageConfig";
import { groupGetAll } from "./groupGetAll";

export async function groupRemoveByName(groupDeleted: string){
  try {
    //pego todos os grupos
    const storedGroups = await groupGetAll();

    //aplico o filtro para montar uma lista com todos os grupos, exceto o grupo deletado
    const storedGroupsWithoutDeletedOne = storedGroups.filter(group => group !== groupDeleted);

    //no group collection vou setar um novo grupo em formato de texto sem o grupo deletado
    await AsyncStorage.setItem(group_collection, JSON.stringify(storedGroupsWithoutDeletedOne));

    //preciso deletar tbm a colecao de jogadores do grupo que nao existe mais
    await AsyncStorage.removeItem(`${player_collection}-${groupDeleted}`)
  } catch (error) {
    throw error;
  }
}