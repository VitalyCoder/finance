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
		setCurrentIndex(prev => (prev === 0 ? cards.length - 1 : prev - 1));

	const nextCard = () =>
		setCurrentIndex(prev => (prev === cards.length - 1 ? 0 : prev + 1));

	return (
		<div className='cards'>
			<div className='cards__header'>
				<h3>Мои карты</h3>
			</div>
			<div className='cards__slider'>
				<button onClick={prevCard}>⬅️</button>
				<div className='cards__slider__window'>
					<div
						className='cards__slider__track'
						style={{
							transform: `translateX(-${currentIndex * 100}%)`,
						}}
					>
						{cards.map(card => (
							<div
								key={card.id}
								className='cards__slider__element'
								style={{
									backgroundImage: `url(${card.imageUrl})`,
								}}
							></div>
						))}
					</div>
				</div>
				<button onClick={nextCard}>➡️</button>
			</div>
		</div>
	);
};

export default Cards;
