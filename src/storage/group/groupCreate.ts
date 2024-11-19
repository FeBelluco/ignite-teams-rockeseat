import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { groupsGetAll } from "./groupsGetAll";
import { GROUP_COLLECTION } from "./storageConfig";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll(); //chamando func criada

    const groupAlreadyExists = storedGroups.includes(newGroup);

    if(groupAlreadyExists){
      throw new AppError('Já existe um grupo com esse nome.');
    }

    const storage = JSON.stringify([...storedGroups, newGroup]) //convertendo para string para a chamada de setItem.

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
