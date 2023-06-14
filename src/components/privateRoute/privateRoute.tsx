import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE_NAMES } from '../../common/enums/routeNames';

export const PrivateRoute: React.FC = () => {
	const user = window.localStorage.getItem('user');
	return user ? <Outlet /> : <Navigate to={ROUTE_NAMES.SIGN_IN} />;
};
