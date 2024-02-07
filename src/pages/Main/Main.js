import React from 'react';
import {cn} from "@bem-react/classname";
import './Main.scss'
import CarouselPhoto from "../../components/CarouselPhoto/CarouselPhoto";


const Main = () => {
	const mainCN = cn('Main')
	return (
		<main className={mainCN()}>
		<CarouselPhoto />
		</main>
	);
};

export default Main;
