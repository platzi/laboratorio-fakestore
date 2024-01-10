export type Role = 'admin' | 'customer';

export interface User {
	id: number;
	email: string;
	password: string;
	name: string;
	role: Role;
	avatar: string;
}
