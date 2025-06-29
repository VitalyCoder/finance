import BalanceCard, {
	type TBalanceCard,
} from '../../ui/balanceCard/balanceCard';
import './budget.scss';

const props: TBalanceCard[] = [
	{
		id: '1',
		title: 'Total Balance',
		mony: 100000 - 1000,
		type: 'total',
	},
	{
		id: '2',
		title: 'Total Balance',
		mony: 1000,
		type: 'spent',
	},
	{
		id: '3',
		title: 'Total Balance',
		mony: 100000,
		type: 'income',
	},
];

const Budget = () => {
	return (
		<div className='budget'>
			<div className='budget__header'>
				<h3>All Budget</h3>
			</div>
			<div className='budget__balance'>
				{props.map((p: TBalanceCard) => (
					<BalanceCard {...p} key={p.id} />
				))}
			</div>
		</div>
	);
};

export default Budget;
