import AsyncStorage from "@react-native-async-storage/async-storage";
import { group_collection } from "../storageConfig";

export async function groupGetAll(){
  try {
    //vai retornar uma string
    const storage = await AsyncStorage.getItem(group_collection);
    //se tiver algo no storage, tranforme em objeto ou devolva o array vazio
    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups;
  } catch (error) {
    throw error;
  }
}