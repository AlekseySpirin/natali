import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {AlbumProvider} from "./context/AlbumContext";
import {albums} from "./utils/constants";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlbumProvider value={albums}>
      <App/>
      </AlbumProvider>
    </BrowserRouter>
  </React.StrictMode>
);



