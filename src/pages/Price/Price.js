import React from 'react';
import {cn} from "@bem-react/classname";
import './Price.scss';
import rooms from '../../data/rooms/rooms.json';
import CardRoomList from "../../components/CardRoomList/CardRoomList";

const priceCN = cn('Price');

const Price = () => {
	
	return (
		<main className={priceCN()}>
			{rooms.map(item => <CardRoomList key={item.id} item={item}/>)}
		</main>
	);
};

export default Price;
