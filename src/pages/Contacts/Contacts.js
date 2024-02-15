import React from 'react';
import {cn} from "@bem-react/classname";
import './Contacts.scss';
import {Grid, Typography} from "@mui/material";

const contactsCN = cn('Contacts');

const Contacts = () => {
	return (
		<main className={contactsCN()}>
			<Grid width={'100%'} container >
				<Grid width={'100%'} item>
					<Typography marginTop={'40px'}
					            marginBottom={'40px'}
					            fontWeight={700}
					            textAlign={'center'}
					            fontStyle={'italic'}
					            component={'h2'}
					            variant="h3"
					            sx={{flexGrow: 1, width: '100%'}}
					>
						Контакты
					</Typography>
					<Typography fontWeight={600} marginTop={'20px'}  marginLeft={'20px'} variant="h5" color="inherit">
						<span style={{fontWeight: '700'}}>Телефон, WhatsApp:</span> +7(978) 732-26-67
					</Typography>
					<Typography marginTop={'20px'} fontWeight={700}  marginLeft={'20px'} variant="h5" color="inherit">
						<span
							style={{fontWeight: '700'}}>Электронная почта:</span> maydaynatalia@ya.ru
					</Typography>
					<Typography marginTop={'20px'} fontWeight={700}  marginLeft={'20px'} variant="h5" color="inherit">
						<span style={{fontWeight: '700'}}>Адрес:</span> Россия, Республика
						Крым, пгт. Черноморское, ул. Первомайская 7
					</Typography>
					<Typography marginTop={'50px'} fontWeight={700}  marginLeft={'20px'} variant="h5" color="inherit">
						Контактное лицо: Наталия
					</Typography>
				</Grid>
			</Grid>
		</main>
	);
};

export default Contacts;
