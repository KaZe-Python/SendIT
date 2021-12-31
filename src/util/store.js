import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key, val) => {
    try{
        await AsyncStorage.setItem(key, JSON.stringify(val))
    } catch(e) {
        console.log(e)
    }
}

export const getData = async (key) => {
    try{
        const data = await AsyncStorage.getItem(key);
        return data != null ? JSON.parse(data) : null;
    }catch (e) {
        console.log(e)
    }
}