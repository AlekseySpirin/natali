import React from 'react';
import {Paper} from "@mui/material";
import {cn} from "@bem-react/classname";
import './CarouselPhotoItem.scss'

const carouselCN = cn('Carousel');

const CarouselPhotoItem = ({item}) => {
	const {
		title,
		image
	} = item;
	
	return (
		<Paper className={carouselCN('Item-wrapper')}
			// style={{height: '100%'}}
			>
		<img className={carouselCN('Image')}
			//      style={{
			// 	aspectRatio: '16 / 9',
			// 	width: '100%'
			//
			// }}
			   src={image} alt={title}/>
		<h2 className={carouselCN('Title')}
		    // style={{
			  //   fontSize: 'clamp(10px 5rem 25px)',
			  //   textAlign: 'center',
			  //   margin: 0,
			  //   paddingBottom: '10px'
		    // }}
		>{title}</h2>
</Paper>
)
	;
};

export default CarouselPhotoItem;
