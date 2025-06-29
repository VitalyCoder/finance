import type React from 'react';
import type { THistoryEntity } from '../../../entities/history.entity';
import './historyElement.scss';

const HistoryElement: React.FC<
	THistoryEntity | THistoryElementProps
> = props => {
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
				{props.spent}
			</div>
			<div className='historyElement__remaining historyElement__item'>
				{props.remaining}
			</div>
		</div>
	);
};

export default HistoryElement;

export type THistoryElementProps = {
	date: 'Date';
	description: 'Description';
	category: 'Category';
	spent: 'Spent';
	remaining: 'Remaining';
};
