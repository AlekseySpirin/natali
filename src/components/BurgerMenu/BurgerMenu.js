import React from 'react';
import {Drawer, IconButton} from '@mui/material';
import { ListItemText, ListItemIcon, ListItemButton, ListItem, List, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


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
				</List>
			</Box>
		</Drawer>
	);
};

export default BurgerMenu;
