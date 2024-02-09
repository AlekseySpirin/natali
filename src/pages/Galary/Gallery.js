import React from 'react';
import {cn} from "@bem-react/classname";
import './Gallery.scss'

const galleryCN = cn('Gallery')

const Gallery = () => {
	return (
		<main className={galleryCN()}>
			Галерея
		</main>
	);
};

export default Gallery;
