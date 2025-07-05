import './header.scss';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__item'>
				<button>Open</button>
				<h2>Финансовый помощник</h2>
			</div>
			<div className='header__item'>
				<div className='header__item__avatar'>
					<img src='' alt='icon' />
				</div>
				<div className='header__item__name'>
					<span>Name</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
