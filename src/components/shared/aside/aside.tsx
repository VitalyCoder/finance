import { Link } from 'react-router-dom';
import './aside.scss';

const Aside = () => {
	return (
		<aside className='aside'>
			<Link to={'/'}>Dashboard</Link>
			<Link to={'/history'}>History</Link>
			<Link to={'/cards'}>Cards</Link>
		</aside>
	);
};

export default Aside;
