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

function WhatsAppIcon() {
	return null;
}

function TelegramIcon() {
	return null;
}

const footerCN = cn('Footer');

const Footer = () => {
	return (
		<BottomNavigation className={footerCN('Wrapper')} component={'footer'}>
			<Toolbar className={footerCN()}>
				<Grid container justifyContent="space-between">
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
						<Link href="https://wa.me/123456789" color="inherit">
							<IconButton color="inherit">
								<WhatsAppIcon />
							</IconButton>
						</Link>
						<Link href="https://t.me/yourtelegram" color="inherit">
							<IconButton color="inherit">
								<TelegramIcon />
							</IconButton>
						</Link>
					</Grid>
				</Grid>
			</Toolbar>
		</BottomNavigation>
	);
};

export default Footer;
