import { useState } from 'react';
import './card.scss';

export type TCardProps = {
	cards?: string[];
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
				<button className='cards__slider__btn' onClick={prevCard}>
					⬅️
				</button>
				<div className='cards__slider__window'>
					<div
						className='cards__slider__track'
						style={{
							transform: `translateX(-${currentIndex * 100}%)`,
							// width: `${cards.length * 100}%`,
						}}
					>
						{cards.map((imageUrl, index) => (
							<div
								key={`${imageUrl}-${index}`}
								className='cards__slider__element'
								style={{
									backgroundImage: `url(${imageUrl})`,
									// backgroundColor: index % 2 === 0 ? 'red' : 'blue',
								}}
							></div>
						))}
					</div>
				</div>
				<button className='cards__slider__btn' onClick={nextCard}>
					➡️
				</button>
			</div>
		</div>
	);
};

export default Cards;
