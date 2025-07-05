import type { TBalanceCard } from '../components/ui/balanceCard/balanceCard';
import { getStore, setStore, type TSetStore } from './store';

const props: TBalanceCard[] = [
	{
		id: '2',
		title: 'Income',
		mony: 100000,
		type: 'income',
	},
];

const data: TSetStore = {
	key: 'balance',
	value: JSON.stringify(props),
};

export const setBalance = () => {
	setStore(data);
};

export const getBalance = () => {
	return getStore<TBalanceCard[]>('balance');
};
