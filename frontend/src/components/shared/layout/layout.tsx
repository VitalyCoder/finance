import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { setBalance } from '../../../api/balance';
import { setCategories } from '../../../api/categories';
import { setHistory } from '../../../api/history';
import Aside from '../aside/aside';
import Header from '../header/header';
import './layout.scss';

const Layout = () => {
	useEffect(() => {
		setCategories();
		setHistory();
		setBalance();
	}, []);

	return (
		<div className='layout'>
			<Header />
			<Aside />
			<main className='layout__content'>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
