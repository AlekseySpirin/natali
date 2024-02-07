import React from 'react';
import {AppBar, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {cn} from "@bem-react/classname";
import './Header.scss';
import Logo from '../Logo/Logo';

const Header = () => {
	
	const toolbar = cn('Toolbar');
	
	return (
		<AppBar className={toolbar('Wrapper')}>
			<Stack flexDirection={'row'}
			       marginTop={'20px'}
			       width={'70%'}
			       justifyContent={'start'}
			>
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
					+7 (978) 719-10-70
				</Typography>
			</Stack>
			<Toolbar className={toolbar()} variant="dense">
				<IconButton className={toolbar('Icon')}
				            size="large"
				            edge="start"
				            color="inherit"
				            aria-label="menu"
				            sx={{mr: 2}}>
					<MenuIcon/>
				</IconButton>
				<Typography className={toolbar('Item')}
				            variant="h6"
				            component="div"
				            textAlign={'center'}
				            sx={{flexGrow: 1}}
				>
					Главная
				</Typography>
				<Typography className={toolbar('Item')}
				            variant="h6"
				            component="div"
				            sx={{flexGrow: 1}}
				            textAlign={'center'}
				>
					Проживание и цены
				</Typography>
				<Typography className={toolbar('Item')}
				            variant="h6"
				            component="div"
				            sx={{flexGrow: 1}}
				            align={"center"}
				            textAlign={'center'}
				>
					Галерея
				</Typography>
				<Typography className={toolbar('Item')}
				            variant="h6"
				            component="div"
				            sx={{flexGrow: 1}}
				            textAlign={'center'}
				>
					Контакты
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
