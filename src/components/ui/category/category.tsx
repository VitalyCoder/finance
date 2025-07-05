import { colors } from '../../../common/constants/colors';
import './category.scss';

export type TCategoryProps = {
	id: string;
	name: string;
	mony: number;
	countOfTransactions: number;
};

const Category: React.FC<{
	category: TCategoryProps;
	total: number;
	index: number;
}> = ({ category, total, index }) => {
	const { main, light } = colors[index % colors.length];
	const progressWidth = (100 / total) * category.mony;

	return (
		<div className='category'>
			<div className='category__name'>{category.name}</div>

			<div
				className='category__progress-background'
				style={{ backgroundColor: light }}
			>
				<div
					className='category__progress-fill'
					style={{
						width: `${progressWidth}%`,
						backgroundColor: main,
					}}
				></div>
			</div>

			<div className='category__info'>
				<div>{category.countOfTransactions} transactions</div>
				<div>$ {category.mony.toFixed(2)}</div>
			</div>
		</div>
	);
};

export default Category;
