import {GALLERY_ROUTE,CONTACTS_ROUTE,PRICE_ROUTE,MAIN_ROUTE} from "../utils/constants";

import Main from '../pages/Main/Main'
import Price from "../pages/Price/Price";
import Gallery from "../pages/Galary/Gallery";
import Contacts from "../pages/Contacts/Contacts";
import PhotoAlbum from "../components/PhotoAlbum/PhotoAlbum";
export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: <Main/>
  },
  {
    path: PRICE_ROUTE,
    Component: <Price/>
  },
  {
    path: GALLERY_ROUTE,
    Component: <Gallery/>
  },
  {
    path: CONTACTS_ROUTE,
    Component: <Contacts/>
  },
  {
    path: '/gallery/:albumId',
    Component: <PhotoAlbum />
  }
]
