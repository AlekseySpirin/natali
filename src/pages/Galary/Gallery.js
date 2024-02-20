import React from 'react';
import {cn} from "@bem-react/classname";
import './Gallery.scss';
import PhotoAlbumList from '../../components/PhotoAlbumList/PhotoAlbumList';
import {Grid} from "@mui/material";
import {useAlbumContext} from "../../context/AlbumContext";


const galleryCN = cn('Gallery');
const photoAlbumList = cn('PhotoAlbumList');
const Gallery = () => {
	const albums = useAlbumContext();
	
	return (
		<main className={galleryCN()}>
			<Grid className={photoAlbumList()} container justifyContent={'center'}
			      component={'ul'}>
				{albums.map(item =>
					<PhotoAlbumList key={item.albumId} item={item}/>
				)}
			</Grid>
		</main>
	);
};

export default Gallery;
