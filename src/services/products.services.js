import { API_BASE_URL } from '../constants.config';

export const getProductsFromPage = async (offset, limit) => {
  try {
    const response = await fetch(`${API_BASE_URL}?offset=${offset}&limit=${limit}`);
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
