import type React from 'react';
import { useState } from 'react';
import './balanceCard.scss';

export type TTitle = 'Баланс' | 'Траты' | 'Пополнения';

const BalanceCard: React.FC<TBalanceCard> = props => {
	const [title] = useState<TTitle>(() => {
		if (props.title === 'income') return 'Пополнения';
		if (props.title === 'spent') return 'Траты';
		return 'Баланс';
	});

	const pickColor = (data: TBalanceCard['type']): string => {
		if (data === 'income') return 'blue';
		if (data === 'spent') return 'red';
		return 'green';
	};

	return (
		<div className='balanceCard'>
			<div className='balanceCard__title'>
				<span>{title}</span>
			</div>
			<div
				className='balanceCard__circle'
				style={{
					border: `2px dotted ${pickColor(props.type)}`,
				}}
			>
				<div>$ {props.mony}</div>
			</div>
		</div>
	);
};

export default BalanceCard;

export type TBalanceCard = {
	id: string;
	title: string;
	mony: number;
	type: 'income' | 'spent' | 'total';
};
