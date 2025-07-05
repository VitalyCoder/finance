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
				Dashboard
			</Link>
			<Link to={'/history'} className={path === '/history' ? 'active' : ''}>
				History
			</Link>
			<Link to={'/cards'} className={path === '/cards' ? 'active' : ''}>
				Cards
			</Link>
		</aside>
	);
};

export default Aside;
