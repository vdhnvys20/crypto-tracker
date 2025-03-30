import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoData = async (page = 1, perPage = 10) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    return [];
  }
};

export const fetchCryptoDetails = async (coinId, days = 30) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto details:', error);
    return null;
  }
};

export const fetchCoinList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/list`)
        return response.data;
    } catch (error) {
        console.error('Error fetching coin list', error);
        return [];
    }
}