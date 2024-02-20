import React from 'react';
import {Grid, Typography} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
 import {Link} from 'react-router-dom'
import {cn} from "@bem-react/classname";
import './PhotoAlbumList.scss';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const ExpandMore = styled((props) => {
	const {
		expand,
		...other
	} = props;
	return <IconButton {...other} />;
})(({
	    theme,
	    expand
    }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

const photoAlbumListCN = cn('PhotoAlbumList');

const PhotoAlbumList = ({item}) => {
	const [expanded, setExpanded] = React.useState(false);
	
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	const {
		title,
		imageList,
		albumId,
		description
	} = item;
	return (
		<Grid item xs={12} sm={10} md={5}
		      component={'li'}>
			
				<Card className={photoAlbumListCN('Item')}>
					<CardHeader
						title={title}
					/>
					<Link to={`/gallery/${albumId}`} className={photoAlbumListCN('Link')}>
					<CardMedia className={photoAlbumListCN('Image')}
					           component="img"
						// height="auto"
						         image={imageList[0].image}
						         alt={title}
					>
					</CardMedia>
					</Link>
					{/*<CardContent>*/}
					{/*	<Typography variant="body2" color="text.secondary">*/}
					{/*		{description}*/}
					{/*	</Typography>*/}
					{/*</CardContent>*/}
					<CardActions  disableSpacing sx={{padding: 0}}>
						<Typography variant="subtitle1" sx={{
							margin: 'auto 0 auto 16px',
							color: 'black',
							width: '100%',
							textAlign: 'center'
						}}>
							Подробнее
						</Typography>
						<ExpandMore
							expand={expanded}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"
						>
							<ExpandMoreIcon fontSize={'large'}/>
						</ExpandMore>
					</CardActions>
					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent>
							<Typography className={photoAlbumListCN('Description')} paragraph>
								{description}
							</Typography>
						</CardContent>
					</Collapse>
				</Card>
			
		</Grid>
	
	);
};

export default PhotoAlbumList;
