import './style.css';

function Header() {
	return (
		<div className='header'>
			<div className='nav left-nav'>
				<p>Shop</p>
				<p>Learn</p>
				<p>Professional</p>
				<p>Support</p>
			</div>

			<img className='logo' src='/assets/deako-lighting_light-bg-copy.png' alt='logo' />

			<div className='nav right-nav'>
				<img className='nav-icon' src='./assets/magnifyingglass@2x.png' alt='cart' />
				<img className='nav-icon' src='./assets/person@2x.png' alt='cart' />
				<img className='nav-icon' src='./assets/cart@2x.png' alt='cart' />
			</div>
		</div>
	);
}

export default Header;
