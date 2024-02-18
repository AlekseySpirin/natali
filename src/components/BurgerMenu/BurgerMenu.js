import React from 'react';
import {Drawer, IconButton, Link, Stack} from '@mui/material';
import { ListItemText, ListItemIcon, ListItemButton, ListItem, List, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";
import TelegramIcon from "../TelegramIcon/TelegramIcon";


const BurgerMenu = ({ sections, open, onClose }) => {
	return (
		<Drawer anchor="left" open={open} onClose={onClose}>
			<Box
				sx={{
					width: 250,
					height: '100vh',
					backgroundColor: '#1976d2', // Установка цвета фона
					color: 'white', // Установка цвета текста и иконок
					'& .MuiListItemIcon-root': {
						color: 'white', // Установка цвета иконок
					},
				}}
				role="presentation"
				onClick={onClose}
				onKeyDown={onClose}
			>
				<IconButton onClick={onClose} sx={{ mt: 1, ml: 1 }}>
					<CloseIcon sx={{color: '#fff'}} />
				</IconButton>
				<List>
					{sections.map((section) => (
						<ListItem key={section.label} disablePadding>
							<ListItemButton onClick={section.onClick}>
								<ListItemIcon>
									{section.icon}
								</ListItemIcon>
								<ListItemText primary={section.label} />
							</ListItemButton>
						</ListItem>
					))}
					<Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
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
				</List>
			</Box>
		</Drawer>
	);
};

export default BurgerMenu;
