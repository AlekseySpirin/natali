import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselPhotoItem from "../CarouselPhotoItem/CarouselPhotoItem";
import mainSlider from "../../data/dataImg/mainSlider.json";
import {cn} from "@bem-react/classname";
import './CarouselPhoto.scss';

const CarouselPhoto = () => {
	
	const carouselCN = cn('Carousel');
	
	return (
		<Carousel className={carouselCN()}
		>
			{
				mainSlider.map(item => <CarouselPhotoItem key={item.id} item={item}/>)
			}
		</Carousel>
	);
};

export default CarouselPhoto;
