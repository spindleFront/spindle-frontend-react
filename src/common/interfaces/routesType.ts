import { ROUTE_NAMES } from '../enums/routeNames';
import { ReactElement } from 'react';

export interface RoutesType {
	path: ROUTE_NAMES;
	element: ReactElement;
	hidden: boolean;
}
