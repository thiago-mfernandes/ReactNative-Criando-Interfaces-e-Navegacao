import AsyncStorage from "@react-native-async-storage/async-storage";
import { group_collection } from "../storageConfig";
import { groupGetAll } from "./groupGetAll";
import { AppError } from "../../utils/AppError";

export async function groupCreate(newGroupName: string){
  try {
    //pego os grupos armazenados (vem um objeto)
    const storedGroups = await groupGetAll();

    const groupAlreadyExists = storedGroups.includes(newGroupName);

    //verifica se a string é vazia
    if(!newGroupName) {
      throw new AppError("É obrigatório informar o nome da turma.");
    }

    if(groupAlreadyExists){
      throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }


    //crio um array, com um spread dos storedGroups mais o novo nome, convertidos para string pelo metodo stringify
    const storage = JSON.stringify([...storedGroups, newGroupName])
    //seto no storage do dispositivo meu array em formato string
    await AsyncStorage.setItem(group_collection, storage);
  } catch (error) {
    throw error;
  }
}