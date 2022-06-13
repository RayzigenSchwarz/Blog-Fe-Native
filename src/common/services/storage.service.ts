import AsyncStorage from '@react-native-community/async-storage';

export const setStorage = (key: string, value: string) => {
  return AsyncStorage.setItem(key, value);
};

export const getStorage = async (key: string) => {
  return await AsyncStorage.getItem(key);
};

export const removeStorage = (key: string) => AsyncStorage.removeItem(key);

export const clearStorage = () => AsyncStorage.clear();
