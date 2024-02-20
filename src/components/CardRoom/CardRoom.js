import React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './CardRoom.scss';
import {cn} from "@bem-react/classname";
import {
	Grid,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow
} from "@mui/material";
import CarouselPhoto from "../CarouselPhoto/CarouselPhoto";

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

const cardCN = cn('Card');

const CardRoom = ({item}) => {
	const {
		title,
		subtitle,
		description,
		price,
		image
	} = item;
	// console.log(image);
	
	const [expanded, setExpanded] = React.useState(false);
	
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	
	return (
		<Grid item xs={12} sm={10} md={5} component={'li'}>
			<Card className={cardCN()}>
				<CardHeader className={cardCN('Title')}
				            title={title}
				            subheader={subtitle}
				/>
				<CardMedia className={cardCN('Image')} // component="img"
					// height="194"
					// image={image[0].image}
					// alt="Комната №9"
				>
					<CarouselPhoto autoPlay={false} key={item.id} items={image}/>
				</CardMedia>
				<CardContent sx={{
					padding: '0',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center'
				}}>
					{/*<Typography variant="h6" color="black">*/}
					{/*	Цены:*/}
					{/*</Typography>*/}
					<TableContainer>
						<Table>
							{/*<TableHead>*/}
							{/*	<TableRow>*/}
							{/*		<TableCell>Месяц</TableCell>*/}
							{/*		<TableCell align="center">Цена (руб.)</TableCell>*/}
							{/*	</TableRow>*/}
							{/*</TableHead>*/}
							<TableBody>
								<TableRow>
									<TableCell>Май-Июнь</TableCell>
									<TableCell align="right">
										{price.june} руб.
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Июль-Август</TableCell>
									<TableCell align="right">
										{price.july} руб.
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Сентябрь</TableCell>
									<TableCell align="right">
										{price.september} руб.
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</CardContent>
				<CardActions disableSpacing sx={{padding: 0}}>
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
						<Typography className={cardCN('Description')} paragraph>
							{description}
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</Grid>
	)
		;
};

export default CardRoom;
