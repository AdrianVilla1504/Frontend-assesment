import React from 'react';
import ProductCard from '../../components/ProductCard/index';
import './styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='home__container'>
			<header className='home__header'>
				<p className='header__title'>
          Limited-Time Offer, buy now.
        </p>
			</header>
			<ProductCard />
      <footer>
				<Link to={"/about"} >
					<button className='footer__title' type='button'>
            About
          </button>
				</Link>
			</footer>
		</div>
	);
};

export default Home;
