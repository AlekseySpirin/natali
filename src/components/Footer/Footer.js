import React from 'react';
import {
	BottomNavigation,
	Grid,
	IconButton,
	Link,
	Toolbar,
	Typography
} from "@mui/material";
import { cn } from "@bem-react/classname";
import './Footer.scss'
import TelegramIcon from '../TelegramIcon/TelegramIcon'
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";



const footerCN = cn('Footer');

const Footer = () => {
	return (
		<BottomNavigation className={footerCN('Wrapper')} component={'footer'}>
			<Toolbar className={footerCN()}>
				<Grid container sx={{width: '100%'}} justifyContent="space-between">
					<Grid item>
						<Typography variant="body1" color="inherit">
							<span style={{ fontWeight: 'bold' }}>Телефон:</span> +7(978) 732-26-67
						</Typography>
						<Typography variant="body1" color="inherit">
							<span style={{ fontWeight: 'bold' }}>Электронная почта:</span> maydaynatalia@ya.ru
						</Typography>
						<Typography variant="body1" color="inherit">
							<span style={{ fontWeight: 'bold' }}>Адрес:</span> Россия, Республика Крым, пгт. Черноморское, ул. Первомайская 7
						</Typography>
					</Grid>
					<Grid item>
						<Link target={'_blank'}  href="https://wa.me/79787322667" color="inherit">
							<IconButton color="inherit">
								<WhatsAppIcon height={'40px'} width={'40px'}/>
							</IconButton>
						</Link>
						<Link target={'_blank'}  href="https://t.me/natalia_kovpanec" color="inherit">
							<IconButton color="inherit">
								<TelegramIcon height={'40px'} width={'40px'}/>
							</IconButton>
						</Link>
					</Grid>
				</Grid>
			</Toolbar>
		</BottomNavigation>
	);
};

export default Footer;
