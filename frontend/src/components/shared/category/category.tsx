import { getCategoriesInfo } from '../../../api/history';
import Category from '../../ui/category/category';
import './category.scss';

const CategoriesComponent = () => {
	const categoriesInfo = getCategoriesInfo();
	if (!categoriesInfo) return null;

	return (
		<div className='categories'>
			<div className='categories__header'>Categories</div>
			<div className='categories__list'>
				{categoriesInfo.map(c => (
					<Category {...c} key={c.id} />
				))}
			</div>
		</div>
	);
};

export default CategoriesComponent;
