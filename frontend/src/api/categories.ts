import type { TCategoryProps } from '../components/ui/category/category';
import { getStore, setStore, type TSetStore } from './store';

const categories: TCategoryProps[] = [
	{
		id: 'string',
		name: 'string',
		mony: 1200,
		countOfTransactions: 2,
	},
	{
		id: 'string1',
		name: 'string',
		mony: 1200,
		countOfTransactions: 2,
	},
	{
		id: 'string2',
		name: 'string',
		mony: 1200,
		countOfTransactions: 2,
	},
	{
		id: 'string3',
		name: 'string',
		mony: 1200,
		countOfTransactions: 2,
	},
	{
		id: 'string4',
		name: 'string',
		mony: 1200,
		countOfTransactions: 2,
	},
	{
		id: 'string5',
		name: 'string',
		mony: 1200,
		countOfTransactions: 2,
	},
	{
		id: 'string6',
		name: 'string',
		mony: 1200,
		countOfTransactions: 2,
	},
	{
		id: 'string7',
		name: 'string',
		mony: 1200,
		countOfTransactions: 2,
	},
];

const data: TSetStore = {
	key: 'categories',
	value: JSON.stringify(categories),
};

export const setCategories = () => {
	setStore(data);
};

export const getCategories = () => {
	return getStore<TCategoryProps[]>('categories');
};

// export const getCategoriesInfo = () => {
// 	const categories = getCategories();
// 	const info = categories?.filter(
// 		(item, index, self) =>
// 			index === self.findIndex(other => other.id === item.id)
// 	);

// 	return info;
// };
