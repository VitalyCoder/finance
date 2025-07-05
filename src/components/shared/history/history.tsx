import { getHistory } from '../../../api/history';
import HistoryElement, {
	type THistoryElementProps,
} from '../../ui/historyElement/historyElement';
import './history.scss';

const data: THistoryElementProps = {
	date: 'Дата',
	description: 'Описание',
	category: 'Категория',
	spent: 'Траты',
	remaining: 'Остаток',
};

const History = () => {
	const history = getHistory();
	return (
		<div className='history'>
			<div className='history__header'>
				<h3>История</h3>
			</div>
			<div className='history__table'>
				<HistoryElement {...data} />
				<div>
					{history && history.map(a => <HistoryElement {...a} key={a.id} />)}
				</div>
			</div>
		</div>
	);
};

export default History;
