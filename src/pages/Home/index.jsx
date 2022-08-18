import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/index';
import './styles.css';

const Home = () => {
	return (
		<div className='home__container'>
			<header className='home__header'>
				<p className='header__title'>Limited-Time Offer, buy now.</p>
			</header>
			<ProductCard />
			<footer>
				<Link to={'/about'}>
					<button className='footer__title' type='button'>
						About
					</button>
				</Link>
			</footer>
		</div>
	);
};

export default Home;
