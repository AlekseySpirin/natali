import React, {useState} from 'react';
import {
	AppBar,
	IconButton,
	Link,
	Stack,
	Toolbar,
	Typography,
	useMediaQuery
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import KingBedIcon from '@mui/icons-material/KingBed';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {cn} from "@bem-react/classname";
import './Header.scss';
import Logo from '../Logo/Logo';
import CollectionsIcon from '@mui/icons-material/Collections';
import {
	CONTACTS_ROUTE,
	GALLERY_ROUTE,
	MAIN_ROUTE,
	PRICE_ROUTE
} from "../../utils/constants";
import {useNavigate} from "react-router-dom";
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";
import TelegramIcon from "../TelegramIcon/TelegramIcon";

const Header = () => {
	const navigate = useNavigate();
	const [burgerOpen, setBurgerOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width:768px)');
	const [activeSection, setActiveSection] = useState(0);
	
	const handleBurgerClick = () => {
		setBurgerOpen(!burgerOpen);
	};
	
	const handleMainRouteClick = () => {
		navigate(MAIN_ROUTE);
		setActiveSection(0);
	};
	
	const handlePriceRouteClick = () => {
		navigate(PRICE_ROUTE);
		setActiveSection(1);
	};
	
	const handleGalleryRouteClick = () => {
		navigate(GALLERY_ROUTE);
		setActiveSection(2);
	};
	
	const handleContactsRouteClick = () => {
		navigate(CONTACTS_ROUTE);
		setActiveSection(3);
	};
	
	const toolbar = cn('Toolbar');
	
	const sections = [
		{
			label: 'Главная',
			icon: <HomeIcon />,
			onClick: handleMainRouteClick,
			active: activeSection === 0,
		},
		{
			label: 'Проживание и цены',
			icon: <KingBedIcon />,
			onClick: handlePriceRouteClick,
			active: activeSection === 1,
		},
		{
			label: 'Галерея',
			icon: <CollectionsIcon />,
			onClick: handleGalleryRouteClick,
			active: activeSection === 2,
		},
		{
			label: 'Контакты',
			icon: <ContactPageIcon />,
			onClick: handleContactsRouteClick,
			active: activeSection === 3,
		},
	];
	
	return (
		<AppBar className={toolbar('Wrapper')}>
			{!isMobile &&
				<Stack className={toolbar('Info')}>
					<Stack sx={{
						justifyContent: 'center',
						flexDirection: 'row',
						
					}}>
						<Logo width={'100px'} height={'100px'}/>
						<Typography className={toolbar('Title')}
						            component="h1"
						>
							"У Наталии"
						</Typography>
					</Stack>
					<Stack flexDirection={'row'} alignItems={'center'}>
						<Typography className={toolbar('Subtitle')}
						            component="h2"
						>
							Телефон для брони: +7(978) 732-26-67
						</Typography>
						<Link target={'_blank'} href="https://wa.me/79787322667"
						      color="inherit">
							<IconButton color="inherit">
								<WhatsAppIcon height={'40px'} width={'40px'}/>
							</IconButton>
						</Link>
						<Link target={'_blank'} href="https://t.me/spirin_al"
						      color="inherit">
							<IconButton color="inherit">
								<TelegramIcon height={'40px'} width={'40px'}/>
							</IconButton>
						</Link>
					</Stack>
				</Stack>}
			{isMobile ? (
				<Toolbar className={toolbar()} sx={{padding: 0}} variant="dense">
					<Stack direction="row" alignItems="center" spacing={2}>
						<IconButton className={toolbar('Icon')}
						            size="large"
						            edge="start"
						            color="inherit"
						            aria-label="menu"
						            sx={{mr: 2}}
						            onClick={handleBurgerClick}
						>
							<MenuIcon/>
						</IconButton>
						<Stack sx={{
							justifyContent: 'space-between',
							alignItems: 'center',
							flexDirection: 'row',
							width: '100%'
							
						}}>
							<Logo width={'50px'} height={'50px'}/>
							<Typography className={toolbar('Title')}
							            component="h1"
							            sx={{fontSize: '30px'}}
							>
								"У Наталии"
							</Typography>
						</Stack>
					</Stack>
				</Toolbar>
			) : (
				<Toolbar className={toolbar()} sx={{padding: 0}} variant="dense">
					{sections.map((section) => (
						<Typography key={section.label}
						            className={toolbar('Item', { active: section.active })}
						            variant="h6"
						            component="div"
						            textAlign={'center'}
						            sx={{flexGrow: 1}}
						            onClick={section.onClick}
						>
							{section.label}
						</Typography>
					))}
				</Toolbar>
			)}
			<BurgerMenu sections={sections} open={burgerOpen}
			            onClose={() => setBurgerOpen(false)}/>
		</AppBar>
	);
};

export default Header;
