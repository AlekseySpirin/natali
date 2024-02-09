import React from 'react';
import {publicRoutes} from "../../routes/routes";
import {Navigate, Route, Routes} from "react-router-dom";
import {MAIN_ROUTE} from "../../utils/constants";

const AppRouter = () => {
	
	return (
		<Routes>
			{publicRoutes.map(({
				                   path,
				                   Component
			                   }) => {
				return <Route key={path} path={path} element={Component}/>;
			})}
			<Route path="*" element={<Navigate to={MAIN_ROUTE}/>}/>
		</Routes>
	);
};

export default AppRouter;
