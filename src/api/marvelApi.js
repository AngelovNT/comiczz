import axios from 'axios';

const BASE_URL = 'https://gateway.marvel.com/v1/public';
const PUBLIC_KEY = '826935b16b194edd3c1ddddc70a2f805';

export const fetchComics = async (offset = 0, limit = 20) => {
  const response = await axios.get(`${BASE_URL}/comics`, {
    params: {
      apikey: PUBLIC_KEY,
      limit,
      offset,
      orderBy: 'title',
    },
  });
  return response.data.data.results;
};
