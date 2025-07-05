import { getCategoriesInfo } from '../../../api/history';
import Category from '../../ui/category/category';
import './category.scss';

const CategoriesComponent = () => {
	const categoriesInfo = getCategoriesInfo();
	if (!categoriesInfo) return null;
	const total = categoriesInfo.reduce((acc, val) => acc + val.mony, 0);

	return (
		<div className='categories'>
			<div className='categories__header'>
				<h3>Категории</h3>
			</div>
			<div className='categories__list'>
				{categoriesInfo.map((c, index) => (
					<Category category={c} total={total} index={index} key={c.id} />
				))}
			</div>
		</div>
	);
};

export default CategoriesComponent;
