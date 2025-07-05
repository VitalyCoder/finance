import './category.scss';

const Category: React.FC<TCategoryProps> = props => {
	return (
		<div className='category'>
			<div className='category__name'>{props.name}</div>
			<div className='category__progress'></div>
			<div className='category__info'>
				<div>{props.countOfTransactions} transactions</div>
				<div>$ {props.mony}</div>
			</div>
		</div>
	);
};

export default Category;

export type TCategoryProps = {
	id: string;
	name: string;
	mony: number;
	countOfTransactions: number;
};
