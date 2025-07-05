import type { TCardEntity } from '../../../entities/card.entity';
import Activity from '../activity/activity';
import Budget from '../budget/budget';
import Cards from '../cards/card';
import CategoriesComponent from '../category/category';
import History from '../history/history';
import './wrapper.scss';

const imageUrl = '/payCard.png';

const cards: TCardEntity[] = [
	{
		id: 'q',
		fullName: 'Test User',
		number: '4536 7546 4637 1234',
		imageUrl,
	},
	{
		id: 'w',
		fullName: 'Test User 2',
		number: '4536 7546 4637 5678',
		imageUrl,
	},
];

const Wrapper = () => {
	return (
		<div className='wrapper'>
			<div className='wrapper__top'>
				<div className='wrapper__top__budget'>
					<Budget />
				</div>
				<div className='wrapper__top__activity'>
					<Activity />
				</div>
			</div>
			<div className='wrapper__bottom'>
				<div className='wrapper__bottom__left'>
					<div className='wrapper__bottom__left__cards'>
						<Cards cards={cards} />
					</div>
					<div className='wrapper__bottom__left__categories'>
						<CategoriesComponent />
					</div>
				</div>
				<div className='wrapper__bottom__right'>
					<History />
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
