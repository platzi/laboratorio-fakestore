export interface ProductCategory {
	id: number;
	name: string;
	image: string;
}

export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: ProductCategory;
	images: string[];
}
