import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './CardRoom.scss'
import {cn} from "@bem-react/classname";
import {Grid} from "@mui/material";


const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

const cardCN = cn('Card')

const CardRoom = ({item}) => {
	const  {title, subtitle, description, image} = item;
console.log(image)
	
	const [expanded, setExpanded] = React.useState(false);
	
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	
	return (
		<Grid item xs={12} sm={10} md={5}>
		<Card className={cardCN()}  component={'li'}>
			<CardHeader
				title={title}
				subheader={subtitle}
			/>
			<CardMedia
				component="img"
				height="194"
				image={image[0].image}
				alt="Комната №9"
			/>
			{/*<CardContent>*/}
			{/*	<Typography variant="body2" color="text.secondary">*/}
			{/*		This impressive paella is a perfect party dish and a fun meal to cook*/}
			{/*		together with your guests. Add 1 cup of frozen peas along with the*/}
			{/*		mussels,*/}
			{/*		if you like.*/}
			{/*	</Typography>*/}
			{/*</CardContent>*/}
			<CardActions disableSpacing>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon/>
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography className={cardCN('Description')} paragraph>
						{	description}
					</Typography>
					
					
				</CardContent>
			</Collapse>
		</Card>
		</Grid>
	);
};

export default CardRoom;
