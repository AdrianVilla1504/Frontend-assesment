import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/products';
import './styles.css'

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
			<div className='product__detail-card'>
				<div className='product__detail-img'>
					{<img className='detail__img' src={product.image} alt={product.title} />}
				</div>
				<div className='product__detail-text'>
					<h2 className='product__detail-title' key = {product.id}>
						{product.title}
					</h2>
					<h3 className='product__detail-category'>
						{product.category}
					</h3>
					<p className='product__detail-description'>
						{product.description}
					</p>
					<span className='product__detail-price'>
						${product.price}
					</span>

				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
