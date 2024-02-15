import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import {Button, Dialog, DialogActions, DialogContent} from '@mui/material';
import {cn} from "@bem-react/classname";
import CloseIcon from '@mui/icons-material/Close';
import './CarouselPhoto.scss';

const carouselCN = cn('Carousel');
const modalPhotoCN = cn('ModalPhoto');

const CarouselPhoto = ({
	                       items,
	                       autoPlay
                       }) => {
	const [open, setOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	
	console.log(selectedImage)
	
	const handleClickOpen = (item) => {
		setSelectedImage(items.indexOf(item));
		setOpen(true);
	};
	
	const handleClose = () => {
		setOpen(false);
	};
	
	return (
		<>
			<Carousel navButtonsAlwaysVisible autoPlay={autoPlay}
			          className={carouselCN()}>
				{items.map((item) => (
					<img
						className={carouselCN('Image')}
						key={item.id}
						src={item.image}
						alt={item.title}
						onClick={() => handleClickOpen(item)}
					/>
				))}
			</Carousel>
			{selectedImage !== null &&
				(<Dialog maxWidth={"lg"} fullWidth className={modalPhotoCN()}
				         open={open} onClose={handleClose}>
					{/*<DialogTitle>{selectedImages[0].title}</DialogTitle>*/}
					<DialogContent>
						<DialogActions>
							<Button className={modalPhotoCN('CloseBtn')}
							        onClick={handleClose}>
								<CloseIcon fontWeight={'500'}/>
							</Button>
						</DialogActions>
						<Carousel index={selectedImage}
						          navButtonsAlwaysVisible autoPlay={autoPlay}
						          className={modalPhotoCN('Carousel')}
						>
							{items.map((image) => (
								<div key={image.id}>
									<h3 className={modalPhotoCN('Title')}>
										{image.title}
									</h3>
									<img className={modalPhotoCN('Image')}
									     key={image.id}
									     src={image.image}
									     alt={image.title}
									/>
								</div>
							))}
						</Carousel>
					</DialogContent>
				</Dialog>)
			}
		</>
	);
};

export default CarouselPhoto;
