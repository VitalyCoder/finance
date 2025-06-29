import { Outlet } from 'react-router-dom';
import Aside from '../aside/aside';
import Header from '../header/header';
import './layout.scss';

const Layout = () => {
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
