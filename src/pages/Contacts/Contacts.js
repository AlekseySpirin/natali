import React from 'react';
import {cn} from "@bem-react/classname";
import './Contacts.scss';
import {Grid, Typography} from "@mui/material";

const contactsCN = cn('Contacts');

const Contacts = () => {
	return (
		<main className={contactsCN()}>
			<Grid container className={contactsCN('Container')}>
				<Grid item>
					<Typography className={contactsCN('Title')}
					>
						Контакты
					</Typography>
					<img className={contactsCN('Image')}
					     src={"image/courtyard/courtyard2.jpg"}
					     alt=""/>
					<Typography className={contactsCN('Description')}
					            color="inherit">
						<span className={contactsCN('Span')}>
							Телефон, WhatsApp, Telegram:
						</span> +7(978) 732-26-67
					</Typography>
					<Typography className={contactsCN('Description')}
					            color="inherit">
						<span className={contactsCN('Span')}>
							Электронная почта:
						</span>						maydaynatalia@ya.ru
					</Typography>
					<Typography className={contactsCN('Description')}
					            color="inherit">
						<span className={contactsCN('Span')}>
							Адрес:
						</span>						Россия, Республика Крым, пгт. Черноморское, ул. Первомайская 7
					</Typography>
					<Typography className={contactsCN('Description')}
					            color="inherit">
						<span className={contactsCN('Span')}>Контактное лицо:</span> Наталия
					</Typography>
				</Grid>
			</Grid>
		</main>
	);
};

export default Contacts;
