import AsyncStorage from '@react-native-async-storage/async-storage';

const STOCK_PRICES_KEY = 'stockPrices';

export const saveStockPrices = async (prices) => {
  try {
    await AsyncStorage.setItem(STOCK_PRICES_KEY, JSON.stringify(prices));
  } catch (error) {
    console.error('Error saving stock prices:', error.message);
    throw error;
  }
};

export const getStockPrices = async () => {
  try {
    const prices = await AsyncStorage.getItem(STOCK_PRICES_KEY);
    return prices ? JSON.parse(prices) : {};
  } catch (error) {
    console.error('Error getting stock prices:', error.message);
    throw error;
  }
};