import React from 'react';
import {cn} from "@bem-react/classname";
import './Gallery.scss';
import PhotoAlbumList from '../../components/PhotoAlbumList/PhotoAlbumList'
import {Grid} from "@mui/material";
import {albums} from "../../utils/constants";

const galleryCN = cn('Gallery');
const photoAlbumList = cn('PhotoAlbumList')
const Gallery = () => {
	
	console.log(albums);
	
	return (
		<main className={galleryCN()}>
			<Grid className={photoAlbumList()} container justifyContent={'center'}
			      component={'ul'}>
				{albums.map(item =>
						<PhotoAlbumList key={item.id} item={item}/>
				)}
			</Grid>
		</main>
	);
};

export default Gallery;
