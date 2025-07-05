export type TSetStore = {
	key: string;
	value: string;
};

export const setStore = (data: TSetStore) => {
	localStorage.setItem(data.key, data.value);
};

export const getStore = <T>(key: string): T | null => {
	const item = localStorage.getItem(key);
	if (!item) return null;
	const data = JSON.parse(item);
	return data as T;
};
