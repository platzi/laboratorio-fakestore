const API_URL = new URL('https://api.escuelajs.co');
const PRODUCTS = new URL('/api/v1/products', API_URL);
const USERS = new URL('/api/v1/users', API_URL);

export const Api = {
	Products: PRODUCTS,
	Users: USERS,
};
