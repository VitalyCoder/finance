import './header.scss';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__item'>
				<h2>Мои финансы</h2>
			</div>
			<div className='header__item'>
				<div className='header__item__avatar'>
					<img src='/vite.svg' alt='' />
				</div>
				<div className='header__item__name'>
					<span>John Doe</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
