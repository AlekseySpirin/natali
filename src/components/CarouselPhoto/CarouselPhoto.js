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
	const [selectedImages, setSelectedImages] = useState(null);
	
	

	
	const handleClickOpen = (images) => {
		setSelectedImages(images);
		setOpen(true);
	};
	
	const handleClose = () => {
		setOpen(false);
	};
	
	return (
		<>
			<Carousel navButtonsAlwaysVisible  autoPlay={autoPlay} className={carouselCN()}>
				{items.map((item) => (
					<img
						className={carouselCN('Image')}
						key={item.id}
						src={item.image}
						alt={item.title}
						onClick={() => handleClickOpen(items)}
					/>
				))}
			</Carousel>
			{selectedImages &&
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
						<Carousel navButtonsAlwaysVisible autoPlay={autoPlay}
						          className={modalPhotoCN('Carousel')}
						>
							{selectedImages.map((image) => (
								<>
									<h3 className={modalPhotoCN('Title')}>
										{image.title}
									</h3>
									<img className={modalPhotoCN('Image')}
									     key={image.id}
									     src={image.image}
									     alt={image.title}
									/>
								</>
							))}
						</Carousel>
					</DialogContent>
				</Dialog>)
			}
		</>
	);
};

export default CarouselPhoto;
