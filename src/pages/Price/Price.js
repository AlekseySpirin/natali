import React from 'react';

import {cn} from "@bem-react/classname";
import './Price.scss';

const priceCN = cn('Price');

const Price = () => {
	return (
		<main className={priceCN()}>
			<div>
				Номера и цены
			</div>
		</main>
	);
};

export default Price;
