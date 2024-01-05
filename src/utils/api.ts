const API_URL = new URL('https://api.escuelajs.co');
const PRODUCTS = new URL('/api/v1/products', API_URL);
const TEN_PRODUCTS = new URL('/api/v1/products?offset=5&limit=10', API_URL);
const USERS = new URL('/api/v1/users', API_URL);

export const Api = {
	Products: PRODUCTS,
	TenProducts: TEN_PRODUCTS,
	Users: USERS,
};
