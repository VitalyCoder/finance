import type { THistoryEntity } from '../../../entities/history.entity';
import HistoryElement, {
	type THistoryElementProps,
} from '../../ui/historyElement/historyElement';
import './history.scss';

const data: THistoryElementProps = {
	date: 'Date',
	description: 'Description',
	category: 'Category',
	spent: 'Spent',
	remaining: 'Remaining',
};

const arr: THistoryEntity[] = [
	{
		id: '1',
		date: '1',
		description: '1',
		category: '1',
		spent: '1',
		remaining: '1',
	},
	{
		id: '2',
		date: '1',
		description: '1',
		category: '1',
		spent: '1',
		remaining: '1',
	},
	{
		id: '3',
		date: '1',
		description: '1',
		category: '1',
		spent: '1',
		remaining: '1',
	},
];

const History = () => {
	return (
		<div className='history'>
			<div className='history__header'>
				<h3>History</h3>
			</div>
			<div className='history__table'>
				<HistoryElement {...data} />
				{arr.map(a => (
					<HistoryElement {...a} />
				))}
			</div>
		</div>
	);
};

export default History;
