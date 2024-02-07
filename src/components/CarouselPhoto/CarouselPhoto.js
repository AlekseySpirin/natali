import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselPhotoItem from "../CarouselPhotoItem/CarouselPhotoItem";
import mainSlider from "../../data/dataImg/mainSlider.json";

const CarouselPhoto = () => {
	
	return (
		<Carousel sx={{
			transform: 'translateY(200px)',
			margin: '0 100px',
			borderRadius: '10px'
		}}>
			{
				mainSlider.map(item => <CarouselPhotoItem key={item.id} item={item}/>)
			}
		</Carousel>
	);
};

export default CarouselPhoto;
