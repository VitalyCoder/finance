import type { TCategoryProps } from '../components/ui/category/category';
import type { THistoryEntity } from '../entities/history.entity';
import { getStore, setStore, type TSetStore } from './store';

const arr: THistoryEntity[] = [
	{
		id: '1',
		date: '01/04/25',
		description: '1',
		category: '1cats',
		spent: 1,
		remaining: 1,
	},
	{
		id: '2',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
	{
		id: '3',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
	{
		id: '4',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
	{
		id: '5',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
	{
		id: '6',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
	{
		id: '7',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
	{
		id: '8',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
	{
		id: '9',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
	{
		id: '10',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
	{
		id: '11',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
	{
		id: '12',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
	{
		id: '13',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
	{
		id: '14',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
	{
		id: '15',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
	{
		id: '16',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
	{
		id: '17',
		date: '01/04/25',
		description: '1',
		category: '1',
		spent: 1,
		remaining: 1,
	},
];

const data: TSetStore = {
	key: 'history',
	value: JSON.stringify(arr),
};

export const setHistory = () => {
	setStore(data);
};

export const getHistory = () => {
	return getStore<THistoryEntity[]>('history');
};

export const getCategoriesInfo = (): TCategoryProps[] => {
	const history = getHistory();
	if (!history) return [];

	const categoryMap = new Map<string, { mony: number; count: number }>();

	history.forEach(item => {
		if (!categoryMap.has(item.category)) {
			categoryMap.set(item.category, { mony: 0, count: 0 });
		}

		const data = categoryMap.get(item.category)!;
		data.mony += item.spent;
		data.count += 1;
	});

	const result: TCategoryProps[] = Array.from(categoryMap.entries()).map(
		([categoryId, data]) => ({
			id: categoryId,
			name: categoryId,
			mony: data.mony,
			countOfTransactions: data.count,
		})
	);

	return result;
};
