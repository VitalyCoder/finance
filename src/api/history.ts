import type { TCategoryProps } from '../components/ui/category/category';
import type { THistoryEntity } from '../entities/history.entity';
import { getBalance } from './balance';
import { getStore, setStore, type TSetStore } from './store';

const category: Array<string> = [
	'Магазины',
	'Продукты',
	'Животные',
	'Такси',
	'Переводы',
	'Аптеки',
	'Маркетплейсы',
];

const arr: THistoryEntity[] = [
	{
		id: '1',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[0],
		spent: 1,
		remaining: 1,
	},
	{
		id: '2',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[0],
		spent: 1,
		remaining: 1,
	},
	{
		id: '3',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[1],
		spent: 100,
		remaining: 1,
	},
	{
		id: '4',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[3],
		spent: 1,
		remaining: 1,
	},
	{
		id: '5',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[0],
		spent: 1,
		remaining: 1,
	},
	{
		id: '6',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[3],
		spent: 1,
		remaining: 1,
	},
	{
		id: '7',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[5],
		spent: 1,
		remaining: 1,
	},
	{
		id: '8',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[0],
		spent: 1,
		remaining: 1,
	},
	{
		id: '9',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[6],
		spent: 1,
		remaining: 1,
	},
	{
		id: '10',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[0],
		spent: 1,
		remaining: 1,
	},
	{
		id: '11',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[1],
		spent: 1,
		remaining: 1,
	},
	{
		id: '12',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[0],
		spent: 1,
		remaining: 1,
	},
	{
		id: '13',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[5],
		spent: 1,
		remaining: 1,
	},
	{
		id: '14',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[6],
		spent: 1,
		remaining: 1,
	},
	{
		id: '15',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[0],
		spent: 1,
		remaining: 1,
	},
	{
		id: '16',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[2],
		spent: 1,
		remaining: 1,
	},
	{
		id: '17',
		date: '01/04/25',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting',
		category: category[2],
		spent: 1,
		remaining: 1,
	},
];

let currentBalance = getBalance()?.find(b => b.type === 'income')
	?.mony as number;

const arrWithRemaining = currentBalance
	? arr.map(item => {
			currentBalance -= item.spent;
			return {
				...item,
				remaining: currentBalance,
			};
	  })
	: [];

const data: TSetStore = {
	key: 'history',
	value: JSON.stringify(arrWithRemaining),
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
		if (!item || !item.category) return;

		if (!categoryMap.has(item.category)) {
			categoryMap.set(item.category, { mony: 0, count: 0 });
		}

		const data = categoryMap.get(item.category)!;
		data.mony += item.spent;
		data.count += 1;
	});

	return Array.from(categoryMap.entries()).map(([categoryId, data]) => ({
		id: categoryId,
		name: categoryId,
		mony: data.mony,
		countOfTransactions: data.count,
	}));
};
