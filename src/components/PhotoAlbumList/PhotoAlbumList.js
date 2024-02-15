import React from 'react';
import {Grid} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
 import {Link} from 'react-router-dom'
import {cn} from "@bem-react/classname";
import './PhotoAlbumList.scss';

const photoAlbumListCN = cn('PhotoAlbumList');

const PhotoAlbumList = ({item}) => {
	const {
		title,
		imageList,
		albumId
	} = item;
	return (
		<Grid item xs={12} sm={10} md={5}
		      component={'li'}>
			<Link to={`/gallery/${albumId}`} className={photoAlbumListCN('Link')}>
				<Card className={photoAlbumListCN('Item')}>
					<CardHeader
						title={title}
					/>
					<CardMedia className={photoAlbumListCN('Image')}
					           component="img"
						// height="auto"
						         image={imageList[0].image}
						         alt={title}
					>
					</CardMedia>
					{/*<CardContent>*/}
					{/*	<Typography variant="body2" color="text.secondary">*/}
					{/*		This impressive paella is a perfect party dish and a fun meal to cook*/}
					{/*		together with your guests. Add 1 cup of frozen peas along with the*/}
					{/*		mussels,*/}
					{/*		if you like.*/}
					{/*	</Typography>*/}
					{/*</CardContent>*/}
				</Card>
			</Link>
		</Grid>
	
	);
};

export default PhotoAlbumList;
