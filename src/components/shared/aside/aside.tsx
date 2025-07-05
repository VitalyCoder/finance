import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './aside.scss';

const Aside = () => {
	const [path, setPath] = useState<string>('/');

	const location = useLocation();
	useEffect(() => {
		setPath(location.pathname);
	}, [location]);

	return (
		<aside className='aside'>
			<Link to={'/'} className={path === '/' ? 'active' : ''}>
				Панель
			</Link>
			<Link to={'/history'} className={path === '/history' ? 'active' : ''}>
				История
			</Link>
			<Link to={'/cards'} className={path === '/cards' ? 'active' : ''}>
				Карты
			</Link>
		</aside>
	);
};

export default Aside;
