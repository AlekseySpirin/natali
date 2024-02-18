import React from 'react';
import {cn} from "@bem-react/classname";
import './Contacts.scss';
import {Grid, Typography} from "@mui/material";

const contactsCN = cn('Contacts');

const Contacts = () => {
	return (
		<main className={contactsCN()}>
			<Grid container className={contactsCN('Container')}>
				<Grid xs={12} sm={12} md={12} item>
					<Typography className={contactsCN('Title')}
					>
						Контакты
					</Typography>
					<img className={contactsCN('Image')}
					     src="image/courtyard/courtyard2.jpg"
					     alt=""/>
					<Typography className={contactsCN('Description')}
					            fontWeight={700}
					            marginTop={'20px'}
					            marginLeft={'20px'}
					            variant="h5"
					            color="inherit">
						<span style={{fontWeight: '700'}}>Телефон, WhatsApp:</span> +7(978)
						732-26-67
					</Typography>
					<Typography className={contactsCN('Description')} marginTop={'20px'}
					            fontWeight={700} marginLeft={'20px'} variant="h5"
					            color="inherit">
						<span
							style={{fontWeight: '700'}}>Электронная почта:</span> maydaynatalia@ya.ru
					</Typography>
					<Typography className={contactsCN('Description')} marginTop={'20px'}
					            fontWeight={700} marginLeft={'20px'} variant="h5"
					            color="inherit">
						<span style={{fontWeight: '700'}}>Адрес:</span> Россия, Республика
						Крым, пгт. Черноморское, ул. Первомайская 7
					</Typography>
					<Typography className={contactsCN('Description')} marginTop={'50px'}
					            fontWeight={700} marginLeft={'20px'} variant="h5"
					            color="inherit">
						Контактное лицо: Наталия
					</Typography>
				</Grid>
			</Grid>
		</main>
	);
};

export default Contacts;
