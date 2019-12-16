import AsyncStorage from '@react-native-community/async-storage';

import Favourite from '../models/Favourite';

const setData = ({ unsplash, desc }: Favourite) => {
  getData()
  .then(data => {
    data.push({ unsplash, desc });
    AsyncStorage.setItem('favourites', JSON.stringify(data))
  })
};

const getData = async (): Promise<Array<Favourite>> => {
  try {
    const json = await AsyncStorage.getItem('favourites')
    if (json !== null) {
      const value = JSON.parse(json);
      return value;
    }
  } catch(e) {
    console.log(e);
  }
  return [];
};

export { getData, setData };