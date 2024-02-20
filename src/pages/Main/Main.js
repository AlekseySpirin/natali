import React from 'react';
import {cn} from "@bem-react/classname";
import './Main.scss';
import CarouselPhoto from "../../components/CarouselPhoto/CarouselPhoto";
import {Box, Typography} from "@mui/material";
import mainSlider from "../../data/courtyard/courtyard.json";
import mainDescription from '../../data/mainDescription/mainDescription.json'

const Main = () => {
	const mainCN = cn('Main');
	return (
		<main className={mainCN()}>
			<CarouselPhoto autoPlay={true} items={mainSlider}/>
			<Typography className={mainCN('Title')}
			            component="h2"
			>
				Добро пожаловать в гостевой дом "У Наталии",
				где каждый момент превращается в незабываемый отдых.
			</Typography>
			<Typography className={mainCN('Description')}
			            component="p"
			>
				Расположенный в Черноморском районе Республики Крым, в живописном
				поселке Черноморское, на Тарханкутском полуострове, наш уютный дом
				предлагает идеальное сочетание чистого моря, прекрасных песчаных пляжей
				и впечатляющих скалистых берегов.
			</Typography>
			{mainDescription.map(item => (
				<Box key={item.subtitle}>
					<Typography className={mainCN('Subtitle')} component={'h4'}>
						{item.subtitle}
					</Typography>
					
					{Array.isArray(item.description) ? (
						item.description.map((line, index) => (
							<Typography key={index} className={mainCN('Description')} component="p">
								{line}
							</Typography>
						))
					) : (
						<Typography className={mainCN('Description')} component="p">
							{item.description}
						</Typography>
					)}
				</Box>
				)
			)}
			<Typography className={mainCN('Title')}
			            component="h3">
				Приятного отдыха!
			</Typography>;
		</main>
	)
};

export default Main;
