import type { THistoryEntity } from '../../../entities/history.entity';
import './historyElement.scss';

export type THistoryElementProps = {
	date: string;
	description: string;
	category: string;
	spent: string | number;
	remaining: string | number;
};

const HistoryElement: React.FC<
	THistoryEntity | THistoryElementProps
> = props => {
	const isHistoryEntity =
		typeof props.spent === 'number' && typeof props.remaining === 'number';

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
				{isHistoryEntity
					? `$${(props.spent as number).toFixed(2)}`
					: props.spent ?? '-'}
			</div>
			<div className='historyElement__remaining historyElement__item'>
				{isHistoryEntity
					? `$${(props.remaining as number).toFixed(2)}`
					: props.remaining ?? '-'}
			</div>
		</div>
	);
};

export default HistoryElement;
