import AsyncStorage from '@react-native-async-storage/async-storage';
import { PowerOutage } from '../types/PowerOutage';

const KEY = '@guardblackout_events';

export async function getEvents(): Promise<PowerOutage[]> {
  const json = await AsyncStorage.getItem(KEY);
  return json ? JSON.parse(json) : [];
}

export async function saveEvent(event: PowerOutage) {
  const list = await getEvents();
  list.push(event);
  await AsyncStorage.setItem(KEY, JSON.stringify(list));
}
export async function saveAll(list: PowerOutage[]) {
    await AsyncStorage.setItem(KEY, JSON.stringify(list));
  }
  