import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/products';
import InfoProductCard from '../InfoProductCard';


const ProductCard = () => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		const fetchProduct = async () => {
			setProduct(await getProducts());
		};
		fetchProduct();
	}, []);

	return (
		<div className='container__card'>
			{product.map((product) => {
				return (
					<InfoProductCard product={product} key={product.id}/>
				);
			})}
		</div>
	);
};

export default ProductCard;
