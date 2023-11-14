import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api/`;
const API_KEY = '39664041-37e45301d98578e53a9ee7384';

export const searchImage = async (query, page = 1, perPage = 12) => {
  const respons = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );

  return respons.data;
};
