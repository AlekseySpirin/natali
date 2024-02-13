import React from 'react';
import {AppBar, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {cn} from "@bem-react/classname";
import './Header.scss';
import Logo from '../Logo/Logo';
import {
	CONTACTS_ROUTE,
	GALLERY_ROUTE,
	MAIN_ROUTE,
	PRICE_ROUTE
} from "../../utils/constants";
import { useNavigate} from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const handleMainRouteClick = () => {
		navigate(MAIN_ROUTE);
	};
	
	const handlePriceRouteClick = () => {
		navigate(PRICE_ROUTE);
	};
	
	const handleGalleryRouteClick = () => {
		navigate(GALLERY_ROUTE);
	};
	
	const handleContactsRouteClick = () => {
		navigate(CONTACTS_ROUTE);
	};
	
	const toolbar = cn('Toolbar');
	
	return (
		<AppBar className={toolbar('Wrapper')}>
			<Stack className={toolbar('Info')}>
				<Logo/>
				<Typography className={toolbar('Title')}
				            marginLeft={'20px'}
				            fontStyle={'italic'}
				            maxWidth={'500px'}
				            fontFamily={'cursive'}
				            justifyContent={'center'}
				            alignItems={'center'}
				            variant="h3"
				            component="div"
				            sx={{flexGrow: 1}}
				>
					"У Наталии"
				</Typography>
				<Typography className={toolbar('Title')}
				            marginLeft={'20px'}
				            fontStyle={'italic'}
				            maxWidth={'500px'}
				            fontFamily={'cursive'}
				            justifyContent={'center'}
				            alignItems={'center'}
				            variant="h5"
				            component="div"
				            sx={{flexGrow: 1}}
				>
					+7(978) 732-26-67
				</Typography>
			</Stack>
			<Toolbar className={toolbar()} variant="dense">
				<IconButton className={toolbar('Icon')}
				            size="large"
				            edge="start"
				            color="inherit"
				            aria-label="menu"
				            sx={{mr: 2}}
				            
				>
					
					<MenuIcon />
				</IconButton>
				<Typography className={toolbar('Item')}
				            variant="h6"
				            component="div"
				            textAlign={'center'}
				            sx={{flexGrow: 1}}
				            onClick={handleMainRouteClick}
				>
					Главная
				</Typography>
				<Typography className={toolbar('Item')}
				            variant="h6"
				            component="div"
				            sx={{flexGrow: 1}}
				            textAlign={'center'}
				            onClick={handlePriceRouteClick}
				          
				>
					Проживание и цены
				</Typography>
				<Typography className={toolbar('Item')}
				            variant="h6"
				            component="div"
				            sx={{flexGrow: 1}}
				            align={"center"}
				            textAlign={'center'}
				            onClick={handleGalleryRouteClick}
				>
					Галерея
				</Typography>
				<Typography className={toolbar('Item')}
				            variant="h6"
				            component="div"
				            sx={{flexGrow: 1}}
				            textAlign={'center'}
				            onClick={handleContactsRouteClick}
				>
					Контакты
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
