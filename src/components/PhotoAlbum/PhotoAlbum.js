import React, {useEffect, useState} from 'react';
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import './PhotoAlbum.scss';
import {cn} from "@bem-react/classname";
import {useAlbumContext} from "../../context/AlbumContext";
import {useParams} from "react-router-dom";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	Divider,
	Grid
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Carousel from "react-material-ui-carousel";

const modalPhotoCN = cn('ModalPhoto');
const photoAlbumCN = cn('PhotoAlbum');

const PhotoAlbum = () => {
	const {albumId} = useParams();
	const albums = useAlbumContext();
	const [album, setAlbum] = useState(null);
	const [open, setOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	
	console.log(selectedImage)
	const handleImageClick = (image) => {
		
		setSelectedImage(imageList.indexOf(image))
		// setSelectedImages(image);
		setOpen(true);
	};
	
	
	
	const handleClose = () => {
		setOpen(false);
	};
	
	useEffect(() => {
		// Функция для загрузки данных
		const fetchData = async () => {
			const foundAlbum = albums.find((album) => album.albumId === Number(albumId));
			setAlbum(foundAlbum);
		};
		
		// Запуск загрузки данных
		fetchData();
	}, [albums, albumId]); // Обновлять эффект, если меняются albums или albumId
	
	if (!album) {
		return <div>Загрузка...</div>; // Или другое сообщение о загрузке
	}
	
	const {
		imageList,
		title
	} = album;
	
	return (
		<main className={photoAlbumCN('Wrapper')}>
			<h3 className={photoAlbumCN('Title')}>
				{title}
			</h3>
			<Divider className={photoAlbumCN('Divider')}
			         variant={'middle'}/>
			<Grid className={photoAlbumCN('List')} container justifyContent={'center'}
			      component={'ul'}>
				{imageList ? (
					imageList.map((item) => (
						<Grid key={item.id} item xs={12} sm={10} md={5}
						      component={'li'}>
							<Card onClick={() => handleImageClick(item)}
							      className={photoAlbumCN('Item')}>
								{/*<CardHeader title={item.title}/>*/}
								<CardMedia className={photoAlbumCN('Image')}
								           component="img"
								           image={`/${item.image}`}
								           alt={item.title}/>
							</Card>
						</Grid>
					))
				) : (
					<div>Загрузка...</div>
				)}
			</Grid>
			<Dialog maxWidth={"lg"} fullWidth className={modalPhotoCN()} open={open}
			        onClose={handleClose}>
				<DialogContent>
					<DialogActions>
						<Button className={modalPhotoCN('CloseBtn')} onClick={handleClose}>
							<CloseIcon fontWeight={'500'}/>
						</Button>
					</DialogActions>
					<Carousel
						index={selectedImage}
						// index={selectedImages.findIndex((image) => image.id === selectedImages.id)}
						navButtonsAlwaysVisible autoPlay={false}
						className={modalPhotoCN('Carousel')}>
						{imageList.map((image) => (
							<div key={image.id}>
								<h3 className={modalPhotoCN('Title')}>
									{image.title}
								</h3>
								<img className={modalPhotoCN('Image')} src={`/${image.image}`}
								     alt={image.title}/>
							</div>
						))}
					</Carousel>
				</DialogContent>
			</Dialog>
		</main>
	
	);
};

export default PhotoAlbum;
