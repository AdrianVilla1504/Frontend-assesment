import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../Timer/index';
import './styles.css';

const InfoProductCard = ({ product }) => {
	const [boolean, setBoolean] = useState(true);
	const linking = useNavigate();
	const handleClick = () => {
		if (boolean) {
			linking(`/detail/${product.id}`, { replace: true });
		}
	};

	return (
		<div className='card'>
			<div className='card__visuals' key={product.id}>
				<img
					className='visuals__image'
					src={product.image}
					alt={product.title}
				/>
				<h2 className='visuals__title' key={product.id}>
					{product.title}
				</h2>
			</div>
			<div className='card__buttons'>
				<Timer setBoolean={setBoolean} />
				<button
					className='button__product-detail'
					type='button'
					onClick={handleClick}
				>
					Go to Detail
				</button>
			</div>
		</div>
	);
};

export default InfoProductCard;
