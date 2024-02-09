import React from 'react';
import {cn} from "@bem-react/classname";
import './Contacts.scss'

const contactsCN = cn('Contacts')

const Contacts = () => {
	return (
		<main className={contactsCN()}>
			Контакты
		</main>
	);
};

export default Contacts;
