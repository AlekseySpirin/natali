import React from 'react';
import CardRoom from "../CardRoom/CardRoom";
import './CardRoomList.scss'
import {cn} from "@bem-react/classname";
import {Divider, Grid} from "@mui/material";

const cardRoomListCN = cn('CardList')
const CardRoomList = ({item}) => {
const {titleList, list} = item

	return (
		<>
			<h3 className={cardRoomListCN('Title')}>
				{titleList}
			</h3>
			<Divider className={cardRoomListCN('Divider')}
				variant={'middle'} />
			<Grid container justifyContent={'center'} className={cardRoomListCN()} component={'ul'}>
				{list.map(item =>
					<CardRoom key={item.id} item={item}/>
				)}
			</Grid>
		</>
	);
};

export default CardRoomList;
