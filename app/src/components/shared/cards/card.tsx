import { useState } from 'react';
import type { TCardEntity } from '../../../entities/card.entity';
import './card.scss';

type TCardProps = {
	cards?: TCardEntity[];
};

const Cards: React.FC<TCardProps> = ({ cards }) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	if (!cards || cards.length === 0) {
		return <span>Вы не добавили карт</span>;
	}

	const prevCard = () =>
		setCurrentIndex(prev => (prev === cards.length - 1 ? 0 : prev - 1));

	const nextCard = () =>
		setCurrentIndex(prev => (prev === cards.length - 1 ? 0 : prev + 1));

	return (
		<div className='cards'>
			<div className='cards__header'>Мои карты</div>
			<div className='cards__slider'>
				<button onClick={prevCard} disabled={currentIndex === 0 ? true : false}>
					⬅️
				</button>
				<div className='cards__slider__element'>
					{/* <div>{cards[currentIndex].id}</div>
					<div>{cards[currentIndex].number}</div> */}
				</div>
				<button onClick={nextCard}>➡️</button>
			</div>
		</div>
	);
};

export default Cards;
