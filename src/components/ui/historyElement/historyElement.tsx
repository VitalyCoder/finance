import type { THistoryEntity } from '../../../entities/history.entity';
import './historyElement.scss';

const HistoryElement: React.FC<
	THistoryEntity | THistoryElementProps
> = props => {
	const isHistoryEntity = typeof props.spent === 'number';

	return (
		<div className='historyElement'>
			<div className='historyElement__date historyElement__item'>
				{props.date}
			</div>
			<div className='historyElement__description historyElement__item'>
				{props.description}
			</div>
			<div className='historyElement__category historyElement__item'>
				{props.category}
			</div>
			<div className='historyElement__spent historyElement__item'>
				{isHistoryEntity ? `$${props.spent.toFixed(2)}` : props.spent}
			</div>
			<div className='historyElement__remaining historyElement__item'>
				{isHistoryEntity ? `$${props.remaining.toFixed(2)}` : props.remaining}
			</div>
		</div>
	);
};

export default HistoryElement;

export type THistoryElementProps = {
	date: 'Дата';
	description: 'Описание';
	category: 'Категория';
	spent: 'Траты';
	remaining: 'Остаток';
};
