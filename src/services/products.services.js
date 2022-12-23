import { API_BASE_URL } from '../constants.config';

export const getProductsFromPage = async (page, limit) => {
  try {
    const currentOffset = (page - 1) * limit;
    const response = await fetch(`${API_BASE_URL}?offset=${currentOffset}&limit=${limit}`);
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
