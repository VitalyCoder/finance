import { useEffect, useState } from 'react';
import { getBalance } from '../../../api/balance';
import { getHistory } from '../../../api/history';
import BalanceCard, {
	type TBalanceCard,
} from '../../ui/balanceCard/balanceCard';
import './budget.scss';

const Budget = () => {
	const [budget, setBudget] = useState<TBalanceCard[]>([]);

	useEffect(() => {
		const balance = getBalance();
		const history = getHistory();

		const spent = Number(history?.reduce((acc, cur) => acc + cur.spent, 0));
		const income = Number(
			balance
				?.filter(b => b.type === 'income')
				.reduce((acc, cur) => acc + cur.mony, 0)
		);

		if (balance && Array.isArray(balance) && spent && income) {
			const total: TBalanceCard = {
				id: 'total',
				title: 'Total balance',
				mony: income - spent,
				type: 'total',
			};
			const spentData: TBalanceCard = {
				id: 'spent',
				title: 'Spent',
				mony: spent,
				type: 'spent',
			};
			const incomeData: TBalanceCard = {
				id: 'income',
				title: 'Income',
				mony: income,
				type: 'income',
			};
			setBudget([total, spentData, incomeData]);
		}
	}, []);

	return (
		<div className='budget'>
			<div className='budget__header'>
				<h3>Весь бюджет</h3>
			</div>
			<div className='budget__balance'>
				{budget.map((p: TBalanceCard) => (
					<BalanceCard {...p} key={p.id} />
				))}
			</div>
		</div>
	);
};

export default Budget;
