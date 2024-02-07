import React from 'react';
import {Paper} from "@mui/material";

const CarouselPhotoItem = ({item}) => {
	const {
		title,
		image
	} = item;
	
	return (
		<Paper style={{height: '100%'}}>
			<img style={{
				width: '100%',
				height: '45vh'
			}} src={image} alt={title}/>
			<h2 style={{
				textAlign: 'center',
				margin: 0,
				paddingBottom: '10px'
			}}>{title}</h2>
		</Paper>
	);
};

export default CarouselPhotoItem;
