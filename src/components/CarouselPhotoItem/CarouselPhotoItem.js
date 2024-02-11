import React from 'react';
import {cn} from "@bem-react/classname";
import './CarouselPhotoItem.scss';

const carouselCN = cn('Carousel');

const CarouselPhotoItem = ({item}) => {
	const {
		title,
		image
	} = item;
	
	return (
		<img className={carouselCN('Image')}
		     src={image} alt={title}/>
	);
};

export default CarouselPhotoItem;
