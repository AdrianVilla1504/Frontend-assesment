import { React, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '../../services/products';
import './styles.css';

const ProductDetail = () => {
	const [product, setProduct] = useState({});

	const { id } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			setProduct(await getProduct(id));
		};
		fetchProduct();
	}, []);

	return (
		<div className='product__detail'>
			<header className='detail__header'>
				<Link to={'/'}>
					<button className='header__button-back'>Home</button>
				</Link>
				<h2 className='header__title2'>
					Detail of: <br /> {product.title}
				</h2>
			</header>
			<div className='product__detail-card'>
				<div className='product__detail-img'>
					{
						<img
							className='detail__img'
							src={product.image}
							alt={product.title}
						/>
					}
				</div>
				<div className='product__detail-text'>
					<h3 className='product__detail-category'>
						Category: {product.category}
					</h3>
					<p className='product__detail-description'>
						<span className='description__title'>Description:</span>
						<br />
						{product.description}
					</p>
					<span className='price__title'>Cost:</span>
					<br />
					<span className='product__detail-price'>{product.price}</span>
					<div className='button__detail-container'>
						<a
							className='detail__button-buy'
							href='https://res.cloudinary.com/dkagy4g5m/image/upload/v1660843673/PAYS_xzagzc.jpg'
							target='_blank'
						>
							Buy Now
						</a>
					</div>
				</div>
			</div>
			<footer></footer>
		</div>
	);
};

export default ProductDetail;
