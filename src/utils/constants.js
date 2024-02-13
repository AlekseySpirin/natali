import atlesh from '../data/gallery/atlesh.json';
import beachCity from '../data/gallery/beachCity.json';
import belyaus from '../data/gallery/belyaus.json';
import calosLimen from '../data/gallery/calosLimen.json';
import ribzik from '../data/gallery/ribzik.json';
import rocks from '../data/gallery/rocks.json';
import combineArrays from "./arrayUtils";

export const MAIN_ROUTE = '/main';
export const PRICE_ROUTE = '/price';
export const GALLERY_ROUTE = '/gallery';
export const CONTACTS_ROUTE = '/contacts';

export const albums = combineArrays(
	atlesh,
	beachCity,
	belyaus,
	calosLimen,
	ribzik,
	rocks
);


